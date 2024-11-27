"use client";

import { usePathname } from "next/navigation";

export function CustomerTempPage() {
  const pathname = usePathname();

  const id = pathname?.split("/").pop();

  return <p>Customer ID: {id}</p>;
}
