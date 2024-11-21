import { sql } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const accountTable = pgTable("account", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  account_type: varchar({ length: 50 }).notNull(),
  created_at: timestamp()
    .notNull()
    .default(sql`now()`),
});
