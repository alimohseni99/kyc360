import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DeleteIcon, EditIcon, EyeIcon } from "lucide-react";

// Färger för statusindikatorn
const statusColors: Record<string, string> = {
  pending: "bg-orange-500",
  verified: "bg-green-500",
  rejected: "bg-red-500",
};

type Props = {
  id: string;
  name: string;
  email: string;
  status: "pending" | "verified" | "rejected";
};

export function GetAllCard({ id, name, email, status }: Props) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          <div className="flex items-center flex-wrap justify-between">
            <span>{name}</span>
            <div className="flex-shrink-0">
              <Popover>
                <PopoverTrigger className="">...</PopoverTrigger>
                <PopoverContent>
                  <div className="flex flex-col gap-3">
                    <Button
                      variant="ghost"
                      className="flex items-center max-w-sm"
                    >
                      <EyeIcon className="mr-2" /> View
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center w-full"
                    >
                      <EditIcon className="mr-2" /> Edit
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center w-full"
                    >
                      <DeleteIcon className="mr-2" /> Delete
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardTitle>
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
