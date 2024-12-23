"use client";

import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { DeleteIcon, EyeIcon } from "lucide-react";
import { deleteAccount } from "../../action";
import { EditCustomerCard } from "./edit-card";

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
  const { toast } = useToast();
  const onClickDelete = () => {
    deleteAccount(id);
    try {
      deleteAccount(id);
      toast({
        title: "Account Created Successfully",
        description: (
          <>
            The account for <strong>{name}</strong> has been successfully
            deleted.
          </>
        ),
      });
    } catch (error) {
      toast({
        title: "Account Creation Failed",
        description: `There was an error creating the account. Please try again. ${error}`,
      });
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          <div className="flex items-center flex-wrap justify-between">
            <span>{name}</span>
            <div className="flex-shrink-1">
              <Popover>
                <PopoverTrigger className="p-1 text-xl text-gray-500 hover:text-gray-700">
                  ...
                </PopoverTrigger>
                <PopoverContent
                  className="w-40 p-2 shadow-lg rounded-lg bg-white"
                  align="end"
                >
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      className="flex items-center justify-start gap-2 text-sm"
                    >
                      <EyeIcon className="mr-2" /> View
                    </Button>
                    <EditCustomerCard />
                    <Button
                      variant="ghost"
                      className="flex items-center justify-start gap-2 text-sm"
                      onClick={onClickDelete}
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
