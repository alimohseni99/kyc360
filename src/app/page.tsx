import CreateAccount from "@/features/account-management/components/create-account";
import { Accounts } from "@/features/account-management/components/page";

export default function Home() {
  return (
    <div>
      <Accounts />
      <CreateAccount />
    </div>
  );
}
