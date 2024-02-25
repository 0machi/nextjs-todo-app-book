import { db } from '@/libs/drizzle/db'
import { sessions } from '@/libs/drizzle/schema'
import type { InsertSession } from '@/types/drizzle/session'

export const insertSession = async (session: InsertSession) => {
  await db.insert(sessions).values(session)
}
