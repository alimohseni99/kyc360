import { sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const verifiedAccountTable = pgTable("verified_account", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  status_id: uuid()
    .notNull()
    .references(() => accountStatusTable.id),
  email: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  address: varchar({ length: 500 }).notNull(),
  id_document_url: varchar({ length: 500 }).notNull(),
  verified_by: varchar({ length: 255 }).notNull().default("admin"),
});

export const accountStatusTable = pgTable("account_status", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: varchar({ length: 255 }).notNull().unique(),
  name: varchar({ length: 255 }).notNull(),
  status: varchar({ length: 50 }).notNull().default("unverified"),
});
