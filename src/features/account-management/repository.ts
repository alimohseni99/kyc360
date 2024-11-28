import { Db } from "@/db";
import { eq } from "drizzle-orm";
import { accountStatusTable, accountTable } from "./schema/schema";
import { Account, AccountStatus } from "./type";

export function createRepository(db: Db) {
  return {
    async getAllAccounts() {
      return await db.select().from(accountStatusTable).execute();
    },
    async createAccount(account: AccountStatus) {
      return await db
        .insert(accountStatusTable)
        .values(account)
        .returning({ customerId: accountStatusTable.status_id })
        .execute();
    },
    async deleteAccount(id: string) {
      return await db
        .delete(accountStatusTable)
        .where(eq(accountStatusTable.status_id, id))
        .execute();
    },
    async submitAccountDetails(account: Account) {
      const statusExists = await db
        .select({ id: accountStatusTable.status_id })
        .from(accountStatusTable)
        .where(eq(accountStatusTable.status_id, account.status_id))
        .limit(1)
        .execute();

      if (statusExists.length === 0) {
        throw new Error(
          `Status ID ${account.status_id} does not exist in accountStatusTable.`
        );
      }

      return await db.insert(accountTable).values(account).execute();
    },
    async getAccountsWithPendingStatus() {
      return await db
        .select({
          accountId: accountTable.id,
          accountName: accountTable.contact_name,
          accountEmail: accountTable.contact_email,
          accountStatus: accountStatusTable.status,
        })
        .from(accountTable)
        .innerJoin(
          accountStatusTable,
          eq(accountTable.status_id, accountStatusTable.status_id)
        )
        .where(eq(accountStatusTable.status, "pending"))
        .execute();
    },
  };
}
