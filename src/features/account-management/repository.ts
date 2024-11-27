import { Db } from "@/db";
import { eq } from "drizzle-orm";
import { accountStatusTable } from "./schema/schema";
import { Accounts } from "./type";

export function createRepository(db: Db) {
  return {
    async getAllAccounts() {
      return await db.select().from(accountStatusTable).execute();
    },
    async createAccount(account: Accounts) {
      return await db
        .insert(accountStatusTable)
        .values(account)
        .returning({ customerId: accountStatusTable.id })
        .execute();
    },
    async deleteAccount(id: string) {
      return await db
        .delete(accountStatusTable)
        .where(eq(accountStatusTable.id, id))
        .execute();
    },
  };
}
