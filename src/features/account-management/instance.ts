import { db } from "@/db";
import { createService } from "./service";

export const customerService = createService(db);
