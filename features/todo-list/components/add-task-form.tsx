'use client'

import { AutoForm } from '@/components/elements/auto-form/index'
import { Button } from '@/components/elements/shadcn-ui/button'
import type {
  AddTaskFormConfig,
  AddTaskFormData,
  AddTaskFormSchema,
} from '@/features/todo-list/schemas/add-task-form-schema'

type TodoFormProps = {
  formData: AddTaskFormData
  handleSubmit: (formData: AddTaskFormData) => Promise<void> | void
  handleParsedValuesChange: (values: Partial<AddTaskFormData>) => void
  addTaskFormSchema: AddTaskFormSchema
  addTaskFormConfig: AddTaskFormConfig
}

export const AddTaskForm = ({
  formData,
  handleSubmit,
  handleParsedValuesChange,
  addTaskFormSchema,
  addTaskFormConfig,
}: TodoFormProps) => {
  return (
    <AutoForm
      className="p-12"
      values={formData}
      onParsedValuesChange={(values) => handleParsedValuesChange(values)}
      onSubmit={() => handleSubmit(formData)}
      formSchema={addTaskFormSchema}
      fieldConfig={addTaskFormConfig}
    >
      <Button className="w-full">Add</Button>
    </AutoForm>
  )
}
