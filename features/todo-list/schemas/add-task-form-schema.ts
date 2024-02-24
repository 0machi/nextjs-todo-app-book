import { z } from 'zod'

const maxTitleLen = 60
export const addTaskFormSchema = z.object({
  taskTitle: z
    .string()
    .min(1)
    .max(maxTitleLen, { message: `Please input ${maxTitleLen} characters or less` })
    .describe('Title')
    .default(''),
})

export const addTaskFormConfig = {
  taskTitle: {
    inputProps: {
      type: 'text',
      'aria-label': 'taskTitle',
    },
  },
}

export type AddTaskFormData = z.infer<typeof addTaskFormSchema>
export type AddTaskFormSchema = typeof addTaskFormSchema
export type AddTaskFormConfig = typeof addTaskFormConfig
