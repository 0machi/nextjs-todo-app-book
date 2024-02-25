import { users } from '@/libs/drizzle/schema'
import type { InferInsertModel } from 'drizzle-orm'
export type InsertUser = InferInsertModel<typeof users>
