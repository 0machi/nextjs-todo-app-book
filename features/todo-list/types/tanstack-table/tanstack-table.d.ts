import type { DeleteTaskAction, UpdateTaskStatusAction } from '@/features/todo-list/types/actions/actions'

export type DataTableProps<TData> = {
  data: TData[]
  updateTaskStatusAction: UpdateTaskStatusAction
  deleteTaskAction: DeleteTaskAction
}
