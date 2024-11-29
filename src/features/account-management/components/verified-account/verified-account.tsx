import { ScrollArea } from "@/components/ui/scroll-area";
import { customerService } from "../../instance";
import { GetAllCard } from "../customer-card";
import Header from "../dashboard/header";

export async function VerifiedAccount() {
  const customers = await customerService.getAllAccounts();
  const pendingCustomers = customers.filter(
    (customer) => customer.status === "verified"
  );
  if (!customers) {
    return (
      <div>
        <p>No customers found</p>
      </div>
    );
  }

  return (
    <>
      <Header place="Verified Applications" />

      <ScrollArea className="h-[80vh]  flex-1 rounded-xl bg-muted/50 md:min-h-min p-4 ">
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
