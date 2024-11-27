"use server";

import { revalidatePath } from "next/cache";
import { customerService } from "./instance";
import { sendWelcomeEmail } from "./send-mail-logic";
import { Accounts } from "./type";

export async function createAccount(email: string, name: string) {
  // handle error when email is not valid or already exist in DB

  const account: Accounts = {
    name,
    email,
  };
  try {
    // Create the account in the database
    await customerService.createAccount(account);

    // Send confirmation email
    await sendWelcomeEmail(email, name);
  } catch (error) {
    console.error("Error during account creation:", error);
    throw new Error("Error creating account. Please try again.");
  }
}
export async function deleteAccount(id: string) {
  await customerService.deleteAccount(id);
  revalidatePath("/view-all-accounts");
}
