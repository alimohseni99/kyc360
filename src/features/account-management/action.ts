"use server";

import { revalidatePath } from "next/cache";
import { customerService } from "./instance";
import { sendWelcomeEmail } from "./send-mail-logic";
import { Account, AccountStatus } from "./type";

export async function createAccount(email: string, name: string) {
  const account: AccountStatus = {
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
export async function submitAccountDetails(
  company_name: string,
  org_number: string,
  business_description: string,
  annual_revenue: number,
  contact_name: string,
  contact_email: string,
  image_url: string,
  status_id: string
) {
  const account: Account = {
    company_name,
    org_number,
    business_description,
    annual_revenue,
    contact_name,
    contact_email,
    image_url,
    status_id,
  };
  console.log(status_id);
  await customerService.submitAccountDetails(account);
  revalidatePath("/view-all-accounts");
}
