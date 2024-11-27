import { customerService } from "../instance";

export async function Accounts() {
  const accounts = await customerService.getAllAccounts();
  return <div>{JSON.stringify(accounts, null, 2)}</div>;
}
