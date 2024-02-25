import { db } from '@/libs/drizzle/db'
import { tasks } from '@/libs/drizzle/schema'
import type { InsertTask } from '@/types/drizzle/task'

export const insertTask = async (task: InsertTask) => {
  await db.insert(tasks).values(task)
}
