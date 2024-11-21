import { Db } from "@/db";
import { createRepository } from "./repository";
import { Accounts } from "./type";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    async getAllAccounts() {
      const accounts = await repository.getAllAccounts();
      return accounts;
    },
    async createAccount(account: Accounts) {
      return await repository.createAccount(account);
    },
  };
}
