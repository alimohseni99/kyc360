import { sql } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const accountTable = pgTable("account", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  account_type: varchar({ length: 50 }).notNull(),
  role: varchar({ length: 255 }).notNull(),
  created_at: timestamp()
    .notNull()
    .default(sql`now()`),
});
