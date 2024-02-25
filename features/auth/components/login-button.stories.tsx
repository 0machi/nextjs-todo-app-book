import { LoginButton } from '@/features/auth/components/login-button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LoginButton> = {
  component: LoginButton,
  args: {
    label: 'Login',
  },
}
export default meta

type Story = StoryObj<typeof LoginButton>
export const Default: Story = {}
