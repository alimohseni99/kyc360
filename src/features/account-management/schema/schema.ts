import { sql } from "drizzle-orm";
import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const accountTable = pgTable("account", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  created_at: timestamp()
    .notNull()
    .default(sql`now()`),
});

export const enterpriseAccountTable = pgTable("enterprise_account", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: varchar({ length: 255 }).notNull().unique(),
  status: varchar({ length: 255 }).notNull().default("unverified"), // pending, approved, unverified
});
