'use client'

import { Button } from '@/components/elements/shadcn-ui/button'
import { signOut } from 'next-auth/react'

export const LogoutButton = ({ label }: { label: string }) => {
  return <Button onClick={() => signOut()}>{label}</Button>
}
