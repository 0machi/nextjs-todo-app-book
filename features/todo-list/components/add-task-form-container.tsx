'use client'
import { useToast } from '@/components/elements/shadcn-ui/use-toast'
import { addTaskAction } from '@/features/todo-list/actions/add-task-action'
import { AddTaskForm } from '@/features/todo-list/components/add-task-form'
import type { AddTaskFormData } from '@/features/todo-list/schemas/add-task-form-schema'
import { addTaskFormConfig, addTaskFormSchema } from '@/features/todo-list/schemas/add-task-form-schema'
import { useState } from 'react'

export const AddTaskFormContainer = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const { toast } = useToast()

  const handleParsedValuesChange = (values: Partial<AddTaskFormData>) => {
    if (values.taskTitle) setTaskTitle(values.taskTitle)
  }

  const handleSubmit = async (formData: AddTaskFormData) => {
    const result = await addTaskAction(formData)
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
