'use server'
import { db } from '@/libs/drizzle/db'
import { tasks } from '@/libs/drizzle/schema'
import { checkAuthenticatedUser } from '@/libs/next-auth/auth'
import type { ActionResult } from '@/types/actions/actions'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

export const updateTaskStatusAction = async (id: string, isCompleted: boolean): Promise<ActionResult> => {
  const userId = await checkAuthenticatedUser()
  if (userId === undefined) {
    return {
      success: false,
      error: 'You must be logged in.',
    }
  }

  try {
    await db.update(tasks).set({ updatedAt: new Date(), isCompleted }).where(eq(tasks.id, id))
  } catch (e) {
    console.error(e)
    return {
      success: false,
      error: 'Failed to update task.',
    }
  }

  revalidatePath('/')

  return {
    success: true,
  }
}
