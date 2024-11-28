import { sql } from "drizzle-orm";
import { integer, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const accountTable = pgTable("account", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),

  company_name: varchar({ length: 255 }).notNull(),
  org_number: varchar({ length: 50 }).notNull(),
  business_description: text().notNull(),
  annual_revenue: integer().notNull(),
  contact_name: varchar({ length: 255 }).notNull(),
  contact_email: varchar({ length: 255 }).notNull(),
  image_url: varchar({ length: 500 }).notNull(),

  company_address: varchar({ length: 500 }).notNull(),
  company_type: varchar({ length: 100 }).notNull(),
  owner_name: varchar({ length: 255 }).notNull(),

  status_id: uuid()
    .notNull()
    .references(() => accountStatusTable.status_id),

  verified_by: varchar({ length: 255 }).notNull().default("admin"),
});

export const accountStatusTable = pgTable("account_status", {
  status_id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: varchar({ length: 255 }).notNull().unique(),
  name: varchar({ length: 255 }).notNull(),
  status: varchar({ length: 50 }).notNull().default("pending"),
});
