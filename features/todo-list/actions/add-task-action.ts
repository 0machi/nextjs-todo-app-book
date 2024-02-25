'use server'
import { insertTask } from '@/libs/drizzle/crud/task'
import { checkAuthenticatedUser } from '@/libs/next-auth/auth'
import { revalidatePath } from 'next/cache'

import type { AddTaskFormData } from '@/features/todo-list/schemas/add-task-form-schema'
import type { ActionResult } from '@/types/actions/actions'

export const addTaskAction = async (formData: AddTaskFormData): Promise<ActionResult> => {
  const userId = await checkAuthenticatedUser()
  if (userId === undefined) {
    return {
      success: false,
      error: 'You must be logged in.',
    }
  }

  try {
    await insertTask({
      createdById: userId,
      title: formData.taskTitle,
    })
  } catch (e) {
    console.error(e)
    return {
      success: false,
      error: 'Failed to create task.',
    }
  }

  revalidatePath('/')

  return {
    success: true,
  }
}
