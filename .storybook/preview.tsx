import { RootLayout } from '@/components/layouts/root-layout'
import type { Preview } from '@storybook/react'
import '../styles/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
}

export default preview
