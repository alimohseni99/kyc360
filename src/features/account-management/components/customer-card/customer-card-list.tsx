import { customerService } from "../../instance";
import Header from "../dashboard/header";
import { GetAllCard } from "./customer-card";

export async function CustomerCardList() {
  const customers = await customerService.getAllAccounts();
  if (!customers) {
    return <div>No customers found</div>;
  }

  return (
    <>
      <Header place="View All Accounts " />

      <div className="flex gap-4">
        {customers.map((customer) => {
          return (
            <GetAllCard
              key={customer.id}
              id={customer.id}
              name={customer.name}
              email={customer.email}
              status={customer.status as "pending" | "verified" | "rejected"}
            />
          );
        })}
      </div>
    </>
  );
}
