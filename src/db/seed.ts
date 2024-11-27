import { accountStatusTable } from "@/features/account-management/schema/schema";
import { faker } from "@faker-js/faker";
import { db } from "./index";

const main = async () => {
  const customer: (typeof accountStatusTable.$inferInsert)[] = [];

  for (let i = 0; i < 20; i++) {
    customer.push({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: faker.helpers.arrayElement(["pending", "verified", "rejected"]),
    });
  }
  console.log("Seed start");
  await db.insert(accountStatusTable).values(customer);
  console.log("Seed done");
};
main();
