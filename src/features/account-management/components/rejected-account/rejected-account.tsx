import { ScrollArea } from "@/components/ui/scroll-area";
import { customerService } from "../../instance";
import Header from "../dashboard/header";
import { GetAllCard } from "./../customer-card";

export async function RejectedAccount() {
  const customers = await customerService.getAllAccounts();
  const pendingCustomers = customers.filter(
    (customer) => customer.status === "rejected"
  );
  if (!customers) {
    return <div>No customers found</div>;
  }

  return (
    <>
      <Header place="View All Accounts " />

      <ScrollArea className="h-[80vh] ">
        <div className="flex flex-row flex-wrap gap-2">
          {pendingCustomers.map((customer) => {
            return (
              <GetAllCard
                key={customer.status_id}
                id={customer.status_id}
                name={customer.name}
                email={customer.email}
                status={customer.status as "pending" | "verified" | "rejected"}
              />
            );
          })}
        </div>
      </ScrollArea>
    </>
  );
}
