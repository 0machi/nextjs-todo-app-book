import { db } from '@/libs/drizzle/db'
import { users } from '@/libs/drizzle/schema'
import type { InsertUser } from '@/types/drizzle/user'

export const insertUser = async (user: InsertUser) => {
  await db.insert(users).values(user)
}
