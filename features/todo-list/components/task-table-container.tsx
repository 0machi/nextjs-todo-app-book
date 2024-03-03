import { deleteTaskAction } from '@/features/todo-list/actions/delete-task-action'
import { updateTaskStatusAction } from '@/features/todo-list/actions/update-task-action'
import { TaskTable } from '@/features/todo-list/components/task-table'
import { checkAuthenticatedUser } from '@/libs/next-auth/auth'

export const TaskTableContainer = async () => {
  const userId = await checkAuthenticatedUser()
  if (userId === undefined) return <></>
  // TODO: タスク一覧を取得する

  return (
    <div className="container p-12">
      <TaskTable data={[]} updateTaskStatusAction={updateTaskStatusAction} deleteTaskAction={deleteTaskAction} />
    </div>
  )
}
