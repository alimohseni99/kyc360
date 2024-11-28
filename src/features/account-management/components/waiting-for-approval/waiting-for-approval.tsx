import { ScrollArea } from "@/components/ui/scroll-area";
import { customerService } from "../../instance";
import { GetAllCard } from "../customer-card";
import Header from "../dashboard/header";

export async function WaitingForApproval() {
  const customers = await customerService.getAccountByStatus();
  if (!customers) {
    return <div>No customers found</div>;
  }

  return (
    <>
      <Header place="View All Accounts " />

      <ScrollArea className="h-[80vh] ">
        <div className="flex flex-row flex-wrap gap-2">
          {customers.map((customer) => {
            return (
              <GetAllCard
                key={customer.accountId}
                id={customer.accountId}
                name={customer.accountName}
                email={customer.accountEmail}
                status={customer.accountStatus as "pending" | "verified" | "rejected"}
              />
            );
          })}
        </div>
      </ScrollArea>
    </>
  );
}
