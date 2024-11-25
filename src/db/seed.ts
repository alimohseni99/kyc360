import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "../features/login/schema/schema";
import { db } from "./index";
type Props = {
  email: string;
  password: string;
};

const main = async () => {
  const users: Props = {
    email: "admin@example.com",
    password: "admin",
  };

  console.log("Seed start");
  await db.insert(usersTable).values(users);
  console.log("Seed done");
};

main();
