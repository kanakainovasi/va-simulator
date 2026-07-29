import { put, get } from '@vercel/blob'
import * as fs from 'fs'
import * as path from 'path'

const DB_BLOB_PATHNAME = 'database/dev.db'
const LOCAL_DB_PATH = '/tmp/dev.db'

function isBlobEnabled(): boolean {
  if (!process.env.VERCEL) return false
  return !!(process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_OIDC_TOKEN)
}

export function localDbExists(): boolean {
  try {
    return fs.existsSync(LOCAL_DB_PATH)
  } catch {
    return false
  }
}

export async function downloadDbFromBlob(): Promise<boolean> {
  if (!isBlobEnabled()) {
    console.log('[DB-SYNC] Blob not configured, skipping download')
    return false
  }

  try {
    console.log('[DB-SYNC] Downloading SQLite from Blob...')
    const result = await get(DB_BLOB_PATHNAME, {
      access: 'private',
      useCache: false,
    })

    if (!result || !result.stream) {
      console.log('[DB-SYNC] No existing DB in Blob (first deploy)')
      return false
    }

    const dir = path.dirname(LOCAL_DB_PATH)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const chunks: Buffer[] = []
    const reader = result.stream.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      if (value) chunks.push(Buffer.from(value))
    }
    const buffer = Buffer.concat(chunks)
    fs.writeFileSync(LOCAL_DB_PATH, buffer)

    console.log('[DB-SYNC] Downloaded SQLite:', buffer.length, 'bytes')
    return true
  } catch (error) {
    console.error('[DB-SYNC] Download failed:', error)
    return false
  }
}

export async function uploadDbToBlob(): Promise<void> {
  if (!isBlobEnabled()) {
    return
  }

  try {
    if (!fs.existsSync(LOCAL_DB_PATH)) {
      console.log('[DB-SYNC] No local DB file to upload')
      return
    }

    const fileBuffer = fs.readFileSync(LOCAL_DB_PATH)
    console.log('[DB-SYNC] Uploading SQLite to Blob:', fileBuffer.length, 'bytes')

    await put(DB_BLOB_PATHNAME, fileBuffer, {
      access: 'private',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/x-sqlite3',
    })

    console.log('[DB-SYNC] Upload complete')
  } catch (error) {
    console.error('[DB-SYNC] Upload failed (non-fatal):', error)
  }
}
