import { Db } from "@/db";
import { eq } from "drizzle-orm";
import { accountTable } from "./schema/schema";
import { Accounts } from "./type";

export function createRepository(db: Db) {
  return {
    async getAllAccounts() {
      return await db.select().from(accountTable);
    },
    async createAccount(account: Accounts) {
      return await db.insert(accountTable).values(account).execute();
    },
    async deleteAccount(id: string) {
      return await db
        .delete(accountTable)
        .where(eq(accountTable.id, id))
        .execute();
    },
  };
}
