import { deleteTaskAction } from '@/features/todo-list/actions/delete-task-action'
import { updateTaskStatusAction } from '@/features/todo-list/actions/update-task-action'
import { TaskTable } from '@/features/todo-list/components/task-table'
import { db } from '@/libs/drizzle/db'
import { tasks } from '@/libs/drizzle/schema'
import { checkAuthenticatedUser } from '@/libs/next-auth/auth'
import { desc, eq } from 'drizzle-orm'

export const TaskTableContainer = async () => {
  const userId = await checkAuthenticatedUser()
  if (userId === undefined) return <></>
  const results = await db.select().from(tasks).where(eq(tasks.createdById, userId)).orderBy(desc(tasks.createdAt))

  return (
    <div className="container p-12">
      <TaskTable data={results} updateTaskStatusAction={updateTaskStatusAction} deleteTaskAction={deleteTaskAction} />
    </div>
  )
}
