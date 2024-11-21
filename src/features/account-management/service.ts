import { Db } from "@/db";
import { createRepository } from "./repository";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    async getAllAccounts() {
      const accounts = await repository.getAllAccounts();

      console.log(accounts);
    },
  };
}
