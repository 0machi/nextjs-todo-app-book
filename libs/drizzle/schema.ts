import { relations, sql } from 'drizzle-orm'
import { boolean, index, integer, pgTable, primaryKey, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import type { AdapterAccount } from 'next-auth/adapters'

export const tasks = pgTable(
  'task',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title', { length: 256 }).notNull(),
    isCompleted: boolean('isCompleted').default(false).notNull(),
    createdById: varchar('createdById', { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (task) => ({
    createdByIdIdx: index('createdById_idx').on(task.createdById),
    titleIndex: index('title_idx').on(task.title),
  }),
)

export const tasksRelations = relations(tasks, ({ one }) => ({
  user: one(users, { fields: [tasks.createdById], references: [users.id] }),
}))

export const users = pgTable('user', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  emailVerified: timestamp('emailVerified', {
    mode: 'date',
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar('image', { length: 255 }),
})

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
  tasks: many(tasks),
}))

export const accounts = pgTable(
  'account',
  {
    userId: varchar('userId', { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: varchar('type', { length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: text('id_token'),
    session_state: varchar('session_state', { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index('account_userId_idx').on(account.userId),
  }),
)

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}))

export const sessions = pgTable(
  'session',
  {
    sessionToken: varchar('sessionToken', { length: 255 }).notNull().primaryKey(),
    userId: varchar('userId', { length: 255 })
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (session) => ({
    userIdIdx: index('session_userId_idx').on(session.userId),
  }),
)

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}))

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
)
