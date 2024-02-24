import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from '@/libs/drizzle/schema'
import { env } from '@/libs/t3-env/server.mjs'

const client = postgres(env.DATABASE_URL, { prepare: false })
export const db = drizzle(client, { schema })
