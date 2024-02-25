// https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/postgres-js/README.md
import config from '@/drizzle.config'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { env } from '@/libs/t3-env/server.mjs'

const migrationsClient = postgres(env.DATABASE_URL, { max: 1 })
const db = drizzle(migrationsClient)

export const migrateDb = async () => {
  await migrate(db, { migrationsFolder: config.out })
}
