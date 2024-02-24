import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    /** 環境 */
    NODE_ENV: z.nativeEnum(['development', 'production']),
    /** URL of your site */
    NEXTAUTH_URL: z.string().url(),
    /** Used to encrypt the NextAuth.js JWT, and to hash email verification tokens */
    NEXTAUTH_SECRET: z.string(),
    /** LINEログインのチャネルID */
    LINE_CLIENT_ID: z.string(),
    /** LINEログインのチャネルシークレット */
    LINE_CLIENT_SECRET: z.string(),
    /** SupabaseのDATABASEのURL */
    DATABASE_URL: z.string().url(),
  },
  experimental__runtimeEnv: {},
})
