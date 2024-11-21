import { chatService } from "../instance";

export async function Accounts() {
  const accounts = await chatService.getAllAccounts();
  return <div>{JSON.stringify(accounts, null, 2)}</div>;
}
