import { sessionToken } from '@/libs/drizzle/seed'
import { test as setup } from '@playwright/test'

const authFile = 'e2e/.auth/user.json'

setup('authenticate', async ({ context }) => {
  context.addCookies([
    {
      name: 'next-auth.session-token',
      value: sessionToken,
      domain: '127.0.0.1',
      path: '/',
      httpOnly: true,
      sameSite: 'Lax',
      expires: Math.round((Date.now() + 24 * 60 * 60 * 1000) / 1000),
    },
  ])
  await context.storageState({ path: authFile })
})
