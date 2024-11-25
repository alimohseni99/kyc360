"use client";

import { redirect } from "next/navigation";
import Router from "next/router";

export function bankUsersLogin(email: string, password: string) {
  if (email === "admin" && password === "admin") {
    redirect("/dashboard");
  }
}
