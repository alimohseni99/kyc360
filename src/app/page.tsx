import CreateAccount from "@/features/account-management/components/create-account";
import DeleteAccount from "@/features/account-management/components/delete-account";
import { Accounts } from "@/features/account-management/components/page";

export default function Home() {
  return (
    <div>
      <Accounts />
      <CreateAccount />
      <DeleteAccount />
    </div>
  );
}
