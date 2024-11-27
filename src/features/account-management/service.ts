import { Db } from "@/db";
import { createRepository } from "./repository";
import { Accounts } from "./type";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    async getAllAccounts() {
      return await repository.getAllAccounts();
    },
    async createAccount(account: Accounts) {
      return await repository.createAccount(account);
    },
    async deleteAccount(id: string) {
      return await repository.deleteAccount(id);
    },
  };
}
