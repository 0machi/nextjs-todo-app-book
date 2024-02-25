import { db } from '@/libs/drizzle/db'
import { sql } from 'drizzle-orm'

export const dropAllSchemas = async () => {
  await db.execute(sql`DROP SCHEMA IF EXISTS public CASCADE;`)
  await db.execute(sql`DROP SCHEMA IF EXISTS drizzle CASCADE;`)
  await db.execute(sql`CREATE SCHEMA IF NOT EXISTS public;`)
}
