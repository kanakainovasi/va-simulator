import { PrismaClient } from '@prisma/client'
import { downloadDbFromBlob, uploadDbToBlob, localDbExists } from './db-blob-sync'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
  __dbReadyPromise: Promise<void> | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function ensureDbReady(): Promise<void> {
  if (!globalForPrisma.__dbReadyPromise) {
    globalForPrisma.__dbReadyPromise = (async () => {
      if (process.env.VERCEL && (process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_OIDC_TOKEN)) {
        if (!localDbExists()) {
          console.log('[PRISMA] DB file missing, downloading from Blob...')
          const downloaded = await downloadDbFromBlob()
          if (!downloaded) {
            console.warn('[PRISMA] No DB in Blob — app may need seeding')
          }
        } else {
          console.log('[PRISMA] DB file already present')
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
