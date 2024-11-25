import { usersTable } from "../features/login/schema/schema";
import { db } from "./index";
import { bank_ussers } from "@/features/login/type";

const main = async () => {
  const users: bank_ussers = {
    email: "admin@example.com",
    password: "admin",
  };

  console.log("Seed start");
  await db.insert(usersTable).values(users);
  console.log("Seed done");
};

main();
