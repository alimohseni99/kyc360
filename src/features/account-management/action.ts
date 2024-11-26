"use server";

import { chatService } from "./instance";
import { sendMail } from "./send-mail-logic";
import { Accounts } from "./type";

export async function createAccount(email: string, name: string) {
  // handle error when email is not valid or already exist in DB

  const account: Accounts = {
    name,
    email,
  };
  await chatService.createAccount(account);
  sendMail(email, name);
}

export async function deleteAccount(formData: FormData) {
  const accountId = formData.get("id") as string;
  if (!accountId) {
    return;
  }
  await chatService.deleteAccount(accountId);
}
