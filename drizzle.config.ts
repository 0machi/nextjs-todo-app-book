import { env } from '@/libs/t3-env/server.mjs'
import type { Config } from 'drizzle-kit'

export default {
  schema: './libs/drizzle/schema.ts',
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config
