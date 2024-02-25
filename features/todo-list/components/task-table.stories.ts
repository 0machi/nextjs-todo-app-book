import { TaskTable } from '@/features/todo-list/components/task-table'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent as user, within } from '@storybook/test'

const meta: Meta<typeof TaskTable> = {
  component: TaskTable,
  args: {
    data: [
      {
        id: '1',
        title: 'Task 1',
        isCompleted: false,
        createdById: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    updateTaskStatusAction: async () => {},
    deleteTaskAction: async () => {},
  },
}
export default meta

type Story = StoryObj<typeof TaskTable>
export const Default: Story = {}

export const NoTasks: Story = {
  args: {
    data: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('columnheader', { name: 'Title' })).toBeInTheDocument()
    await expect(canvas.getByRole('columnheader', { name: 'CreatedAt' })).toBeInTheDocument()
    await expect(canvas.getByRole('cell', { name: 'No tasks.' })).toBeInTheDocument()
  },
}

export const CompletedTask: Story = {
  args: {
    data: [
      {
        id: '1',
        title: 'Task 1',
        isCompleted: true,
        createdById: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: 'Task status' })
    await expect(checkbox).toBeChecked()
    await user.click(checkbox)
    await expect(checkbox).toBeChecked()
    const taskTitle = canvas.getByText('Task 1')
    await expect(taskTitle).toBeInTheDocument()
    await expect(taskTitle).toHaveClass('line-through')
    const actionButton = canvas.getByRole('button', { name: 'Task action' })
    await expect(actionButton).toBeInTheDocument()
    await user.click(actionButton)
  },
}
