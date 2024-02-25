import { LogoutButton } from '@/features/auth/components/logout-button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LogoutButton> = {
  component: LogoutButton,
  args: {
    label: 'Logout',
  },
}
export default meta

type Story = StoryObj<typeof LogoutButton>
export const Default: Story = {}
