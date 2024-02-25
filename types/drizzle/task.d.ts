import { tasks } from '@/libs/drizzle/schema'
import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'
export type Task = InferSelectModel<typeof tasks>
export type InsertTask = InferInsertModel<typeof tasks>
