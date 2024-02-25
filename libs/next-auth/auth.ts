import { db } from '@/libs/drizzle/db'
import { env } from '@/libs/t3-env/server.mjs'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { NextAuthOptions, getServerSession } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'
import LineProvider from 'next-auth/providers/line'

export const nextAuthOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    LineProvider({
      clientId: env.LINE_CLIENT_ID,
      clientSecret: env.LINE_CLIENT_SECRET,
    }),
  ],
  session: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      }
    },
  },
}

export const getServerAuthSession = () => getServerSession(nextAuthOptions)

export const checkAuthenticatedUser = async (): Promise<string | undefined> => {
  const session = await getServerAuthSession()
  const userId = session?.user?.id
  return userId
}
