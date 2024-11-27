import React from "react";
import { customerService } from "../../instance";
import { GetAllCard } from "./get-all-card";
import Header from "../dashboard/header";

export async function CustomerCardList() {
  const customers = await customerService.getAllAccounts();

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
