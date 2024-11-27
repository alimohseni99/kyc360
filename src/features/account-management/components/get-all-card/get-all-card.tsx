import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Färger för statusindikatorn
const statusColors: Record<string, string> = {
  pending: "bg-orange-500",
  verified: "bg-green-500",
  rejected: "bg-red-500",
};

type Props = {
  name: string;
  email: string;
  status: "pending" | "verified" | "rejected";
};

export function GetAllCard({ name, email, status }: Props) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Name:{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">Email: {email}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="flex items-center mt-4">
          <span
            className={`h-3 w-3 rounded-full ${statusColors[status]} mr-2`}
          ></span>
          <p className="text-sm font-medium capitalize">Status: {status}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
