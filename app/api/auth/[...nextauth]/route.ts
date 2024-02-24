import { nextAuthOptions } from '@/libs/next-auth/auth'
import NextAuth from 'next-auth/next'

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST }
