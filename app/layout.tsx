import { RootLayout } from '@/components/layouts/root-layout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs-Todo-App',
  description: 'Nextjs-Todo-App',
}

export default async function Layout() {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <RootLayout>Nextjs-Todo-App</RootLayout>
      </body>
    </html>
  )
}
