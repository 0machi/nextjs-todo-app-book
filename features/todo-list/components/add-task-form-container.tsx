'use client'
import { useToast } from '@/components/elements/shadcn-ui/use-toast'
import { useTaskTitle } from '@/features/todo-list/atoms/task-title-atom'
import { AddTaskForm } from '@/features/todo-list/components/add-task-form'
import type { AddTaskFormData } from '@/features/todo-list/schemas/add-task-form-schema'
import { addTaskFormConfig, addTaskFormSchema } from '@/features/todo-list/schemas/add-task-form-schema'

export const AddTaskFormContainer = () => {
  const { taskTitle, setTaskTitle } = useTaskTitle()
  const { toast } = useToast()

  const handleParsedValuesChange = (values: Partial<AddTaskFormData>) => {
    if (values.taskTitle) setTaskTitle(values.taskTitle)
  }

  const handleSubmit = async (formData: AddTaskFormData) => {
    const result = { success: true } // TODO: タスクの追加機能を呼び出す
    if (result.success) {
      setTaskTitle('')
      toast({
        description: `Task "${formData.taskTitle}" has been added.`,
      })
    } else {
      toast({
        variant: 'destructive',
        description: 'Failed to add the task.',
      })
    }
  }

  return (
    <AddTaskForm
      formData={{ taskTitle }}
      handleSubmit={handleSubmit}
      handleParsedValuesChange={handleParsedValuesChange}
      addTaskFormSchema={addTaskFormSchema}
      addTaskFormConfig={addTaskFormConfig}
    />
  )
}
