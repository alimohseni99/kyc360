import { ScrollArea } from "@/components/ui/scroll-area";
import { customerService } from "../../instance";
import Header from "../dashboard/header";
import { GetAllCard } from "./../customer-card";

export async function InProgress() {
  const customers = await customerService.getAllAccounts();
  const pendingCustomers = customers.filter(
    (customer) => customer.status === "pending"
  );
  if (!customers) {
    return <div>No customers found</div>;
  }

  return (
    <>
      <Header place="Pending" />

      <ScrollArea className="h-[80vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
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
