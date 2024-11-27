import React from "react";
import { customerService } from "../../instance";
import { GetAllCard } from "./get-all-card";

export async function CustomerCardList() {
  const customers = await customerService.getAllAccounts();

  return (
    <div>
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
  );
}
