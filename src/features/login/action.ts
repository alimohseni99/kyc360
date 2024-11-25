"use client";

import { redirect } from "next/navigation";

export function bankUsersLogin(email: string, password: string) {
  if (email === "admin" && password === "admin") {
    redirect("/dashboard");
  }
}
