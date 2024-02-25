import { sessions } from '@/libs/drizzle/schema'
import type { InferInsertModel } from 'drizzle-orm'
export type InsertSession = InferInsertModel<typeof sessions>
