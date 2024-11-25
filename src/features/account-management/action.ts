"use server";

import { chatService } from "./instance";
import { Accounts } from "./type";

export async function createAccount(name: string, email: string) {
  // handle error when email is not valid or already exist in DB

  const account: Accounts = {
    name,
    email,
  };
  await chatService.createAccount(account);
}

export async function deleteAccount(formData: FormData) {
  const accountId = formData.get("id") as string;
  if (!accountId) {
    return;
  }
  await chatService.deleteAccount(accountId);
}
