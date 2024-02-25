import { insertAccount } from '@/libs/drizzle/crud/account'
import { insertSession } from '@/libs/drizzle/crud/session'
import { insertTask } from '@/libs/drizzle/crud/task'
import { insertUser } from '@/libs/drizzle/crud/user'

export const sessionToken = '4eb2aba9-b475-4002-b3fa-e4dafb1b68bd'

export const insertSeed = async () => {
  const userId = 'd2ff840a-d4ae-49cf-93b1-3afb3cd99f4c'
  const date = new Date()
  date.setMonth(date.getMonth() + 1)

  await insertUser({ id: userId, name: 'e2e' })
  await insertSession({ sessionToken, userId, expires: date })
  await insertAccount({
    userId,
    type: 'oauth',
    provider: 'line',
    providerAccountId: 'U9f337dd342be2e4095eb4f961fa6188e',
  })
  await insertTask({ title: 'e2e', createdById: userId })
}
