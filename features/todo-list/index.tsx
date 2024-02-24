import { AddTaskFormContainer } from '@/features/todo-list/components/add-task-form-container'
import { TaskTableContainer } from '@/features/todo-list/components/task-table-container'

export const TodoListContainer = async () => {
  return (
    <>
      <AddTaskFormContainer />
      <TaskTableContainer />
    </>
  )
}
