import { AddTaskForm } from '@/features/todo-list/components/add-task-form'
import { addTaskFormConfig, addTaskFormSchema } from '@/features/todo-list/schemas/add-task-form-schema'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent as user, waitFor, within } from '@storybook/test'

const meta: Meta<typeof AddTaskForm> = {
  component: AddTaskForm,
  args: {
    formData: {
      taskTitle: 'Task Title',
    },
    handleSubmit: action('submit'),
    handleParsedValuesChange: () => {},
    addTaskFormSchema,
    addTaskFormConfig,
  },
}
export default meta

type Story = StoryObj<typeof AddTaskForm>
export const Default: Story = {}

export const SucceedAddTask: Story = {
  args: {
    formData: {
      taskTitle: '',
    },
    handleSubmit: fn(),
    handleParsedValuesChange: () => {},
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await user.type(canvas.getByRole('textbox', { name: 'taskTitle' }), 'x'.repeat(60))
    await user.click(canvas.getByRole('button', { name: 'Add' }))
    await expect(args.handleSubmit).toHaveBeenCalled()
  },
}

export const FailedAddTask: Story = {
  args: {
    formData: {
      taskTitle: '',
    },
    handleSubmit: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await user.type(canvas.getByRole('textbox', { name: 'taskTitle' }), 'x'.repeat(100))
    waitFor(async () => await user.click(canvas.getByRole('button', { name: 'Add' })))
    await expect(args.handleSubmit).not.toHaveBeenCalled()
    waitFor(async () => {
      await expect(canvas.getByText('Please input 60 characters or less')).toBeInTheDocument()
    })
  },
}
