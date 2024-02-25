import { db } from '@/libs/drizzle/db'
import { accounts } from '@/libs/drizzle/schema'
import type { InsertAccount } from '@/types/drizzle/account'

export const insertAccount = async (account: InsertAccount) => {
  await db.insert(accounts).values(account)
}
