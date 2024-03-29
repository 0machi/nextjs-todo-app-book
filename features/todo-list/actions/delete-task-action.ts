'use server'
import { db } from '@/libs/drizzle/db'
import { tasks } from '@/libs/drizzle/schema'
import { checkAuthenticatedUser } from '@/libs/next-auth/auth'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

import type { ActionResult } from '@/types/actions/actions'

export const deleteTaskAction = async (id: string): Promise<ActionResult> => {
  const userId = await checkAuthenticatedUser()
  if (userId === undefined) {
    return {
      success: false,
      error: 'You must be logged in.',
    }
  }

  try {
    await db.delete(tasks).where(eq(tasks.id, id))
  } catch (e) {
    console.error(e)
    return {
      success: false,
      error: 'Failed to delete task.',
    }
  }

  revalidatePath('/')

  return {
    success: true,
  }
}
