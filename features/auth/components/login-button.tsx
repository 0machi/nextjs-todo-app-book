'use client'

import { Button } from '@/components/elements/shadcn-ui/button'
import { signIn } from 'next-auth/react'

export const LoginButton = ({ label }: { label: string }) => {
  return (
    <Button className="w-full text-lg" onClick={() => signIn('line')}>
      {label}
    </Button>
  )
}
