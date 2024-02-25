import { dropAllSchemas } from '@/libs/drizzle/drop-schema'
import { migrateDb } from '@/libs/drizzle/migrate'
import { insertSeed } from '@/libs/drizzle/seed'

export const setupDb = async () => {
  await dropAllSchemas()
  await migrateDb()
  await insertSeed()
}
