"use server";

import { revalidatePath } from "next/cache";
import { customerService } from "./instance";
import { sendWelcomeEmail } from "./send-mail-logic";
import { Accounts } from "./type";

export async function createAccount(email: string, name: string) {
  const account: Accounts = {
    name,
    email,
  };
  try {
    // Create the account in the database
    const customer = await customerService.createAccount(account);

    // Send confirmation email
    sendWelcomeEmail(email, name, customer[0].customerId);
  } catch (error) {
    console.error("Error during account creation:", error);
    throw new Error("Error creating account. Please try again.");
  }
}
export async function deleteAccount(id: string) {
  await customerService.deleteAccount(id);
  revalidatePath("/view-all-accounts");
}
