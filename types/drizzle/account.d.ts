import { accounts } from '@/libs/drizzle/schema'
import type { InferInsertModel } from 'drizzle-orm'
export type InsertAccount = InferInsertModel<typeof accounts>
