import { Db } from "@/db";
import { createRepository } from "./repository";
import { Account, AccountStatus } from "./type";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    async getAllAccounts() {
      return await repository.getAllAccounts();
    },
    async createAccount(accountStatus: AccountStatus) {
      return await repository.createAccount(accountStatus);
    },
    async deleteAccount(id: string) {
      return await repository.deleteAccount(id);
    },
    async submitAccountDetails(account: Account) {
      return await repository.submitAccountDetails(account);
    },
    async getAccountByStatus() {
      return await repository.getAccountsWithPendingStatus();
    },
  };
}
