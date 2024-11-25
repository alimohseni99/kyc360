import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("bank_ussers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});
