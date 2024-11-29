"use server";

import { revalidatePath } from "next/cache";
import { customerService } from "./instance";
import { sendApprovedEmail } from "./on-approv-mail";
import { sendWelcomeEmail } from "./on-create-mail";
import { sendRejectEmail } from "./on-reject-mail";
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
  status_id: string,
  company_address: string,
  company_type: string,
  owner_name: string
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
    company_address,
    company_type,
    owner_name,
  };
  console.log(status_id);
  await customerService.submitAccountDetails(account);
  revalidatePath("/view-all-accounts");
}

export async function approveApplication(
  accountId: string,
  email: string,
  name: string
) {
  await customerService.approveApplication(accountId);
  sendApprovedEmail(email, name);
  revalidatePath("/view-all-accounts");
}
export async function rejectApplication(
  accountId: string,
  email: string,
  name: string
) {
  await customerService.rejectApplication(accountId);
  sendRejectEmail(email, name);
  revalidatePath("/view-all-accounts");
}
