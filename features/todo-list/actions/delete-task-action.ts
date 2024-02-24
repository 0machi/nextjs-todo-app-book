'use server'
import { checkAuthenticatedUser } from '@/libs/next-auth/auth'

import type { ActionResult } from '@/types/actions/actions'

export const deleteTaskAction = async (id: string): Promise<ActionResult> => {
  const userId = await checkAuthenticatedUser()
  if (userId === undefined) {
    return {
      success: false,
      error: 'You must be logged in.',
    }
  }

  // TODO: タスクを削除する
  console.log(id)

  return {
    success: true,
  }
}
