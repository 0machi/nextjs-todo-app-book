import { Toaster } from '@/components/elements/shadcn-ui/toaster'
import { RootLayout } from '@/components/layouts/root-layout'
import { getServerAuthSession } from '@/libs/next-auth/auth'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs-Todo-App',
  description: 'Nextjs-Todo-App',
}

export default async function Layout(props: { todo: React.ReactNode; login: React.ReactNode }) {
  const session = await getServerAuthSession()
  return (
    <html lang="ja">
      <body className={inter.className}>
        <RootLayout>
          {session ? props.todo : props.login}
          <Toaster />
        </RootLayout>
      </body>
    </html>
  )
}
