"use server";
import { chatService } from "./instance";
import { Accounts } from "./type";

export async function createAccount(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const accountType = formData.get("accountType") as string;
  if (!name || !email || !accountType) {
    return;
  }

  const account: Accounts = {
    name,
    email,
    account_type: accountType,
    created_at: new Date(),
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
