'use server'
import { checkAuthenticatedUser } from '@/libs/next-auth/auth'

import type { ActionResult } from '@/types/actions/actions'

export const updateTaskStatusAction = async (id: string, isCompleted: boolean): Promise<ActionResult> => {
  const userId = await checkAuthenticatedUser()
  if (userId === undefined) {
    return {
      success: false,
      error: 'You must be logged in.',
    }
  }

  // TODO: タスクのステータスを更新する
  console.log(id, isCompleted)

  return {
    success: true,
  }
}
