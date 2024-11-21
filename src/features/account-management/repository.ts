import { Db } from "@/db";
import { accountTable } from "./schema/schema";

export function createRepository(db: Db) {
  return {
    async getAllAccounts() {
      return await db.select().from(accountTable);
    },
  };
}
