import { PrismaClient } from '@prisma/client'
import { downloadDbFromBlob, uploadDbToBlob, localDbExists, createEmptyDb } from './db-blob-sync'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  __dbReadyPromise: Promise<void> | undefined
  __prismaClientReady: boolean | undefined
}

/**
 * Lazily create PrismaClient — only after DATABASE_URL is guaranteed to exist.
 * This prevents PrismaClientInitializationError at module load time.
 */
function getPrismaClient(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
    })
  }
  return globalForPrisma.prisma
}

/**
 * Proxy that defers PrismaClient creation until first property access.
 * This allows import { prisma } without crashing at module load.
 */
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrismaClient()
    const value = (client as unknown as Record<string | symbol, unknown>)[prop]
    if (typeof value === 'function') {
      return value.bind(client)
    }
    return value
  },
})

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = undefined
}

export async function ensureDbReady(): Promise<void> {
  if (!globalForPrisma.__dbReadyPromise) {
    globalForPrisma.__dbReadyPromise = (async () => {
      try {
        if (process.env.VERCEL && (process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_OIDC_TOKEN)) {
          if (!localDbExists()) {
            console.log('[PRISMA] DB file missing, downloading from Blob...')
            const downloaded = await downloadDbFromBlob()
            if (!downloaded) {
              console.warn('[PRISMA] No DB in Blob — creating empty DB as fallback')
              createEmptyDb()
            }
          } else {
            console.log('[PRISMA] DB file already present')
          }
        } else if (process.env.VERCEL) {
          if (!localDbExists()) {
            console.warn('[PRISMA] No Blob token and no local DB — creating empty DB')
            createEmptyDb()
          }
        }
      } catch (error) {
        console.error('[PRISMA] ensureDbReady error (non-fatal):', error)
        if (!localDbExists()) {
          createEmptyDb()
        }
      }
    })()
  }
  return globalForPrisma.__dbReadyPromise
}

export async function syncDbToBlob(): Promise<void> {
  if (process.env.VERCEL && (process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_OIDC_TOKEN)) {
    await uploadDbToBlob()
  }
}
