"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { Separator } from "@/components/ui/separator";
import { CheckIcon, EyeIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { approveApplication, rejectApplication } from "../../action";

type ApprovalCardProps = {
  company_name: string;
  accountId: string;
  org_number: string;
  business_description: string;
  annual_revenue: number;
  contact_name: string;
  contact_email: string;
  company_address: string;
  company_type: string;
  owner_name: string;
  img_url: string;
};

export function ApprovalCard({
  company_name,
  accountId,
  org_number,
  business_description,
  annual_revenue,
  contact_name,
  contact_email,
  company_address,
  company_type,
  owner_name,
  img_url,
}: ApprovalCardProps) {
  const onClickApprove = async () => {
    await approveApplication(accountId, contact_email, contact_name);
  };
  const onClickReject = async () => {
    await rejectApplication(accountId, contact_email, contact_name);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          <div className="flex items-center flex-wrap justify-between">
            <span>{company_name}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">
          <strong>Business Description:</strong> {business_description}
        </p>
        <Separator className="my-4" />

        <p className="text-sm text-gray-700">
          <strong>Org Number:</strong> {org_number}
        </p>
        <Separator className="my-4" />

        <p className="text-sm text-gray-700">
          <strong>Annual Revenue:</strong> {annual_revenue} SEK
        </p>
        <Separator className="my-4" />

        <p className="text-sm text-gray-700">
          <strong>Contact:</strong> {contact_name}
        </p>
        <Separator className="my-4" />

        <p className="text-sm text-gray-700">
          <strong>Email:</strong> {contact_email}
        </p>
        <Separator className="my-4" />

        <p className="text-sm text-gray-700">
          <strong>Address:</strong> {company_address}, {company_type}
        </p>
        <Separator className="my-4" />

        <p className="text-sm text-gray-700">
          <strong>Owner:</strong> {owner_name}
        </p>
        <Separator className="my-4" />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="mt-4 flex items-center gap-2">
              <EyeIcon className="w-4 h-4" />
              View ID Document
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[650px] p-2 shadow-lg rounded-lg">
            <div className="flex justify-center">
              <Image
                src={img_url}
                alt="ID Document"
                width={800}
                height={800}
                className="max-w-full max-h-[600px] object-contain"
              />
            </div>
          </PopoverContent>
        </Popover>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex items-center mt-4">
              <button className="text-sm font-medium w-full capitalize flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
                <XIcon className="mr-2" />
                Reject
              </button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to reject?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Once rejected, the customer will
                be notified and the process will be halted.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onClickReject}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex items-center mt-4">
              <button className="text-sm font-medium w-full capitalize flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
                <CheckIcon className="mr-2" />
                Approve
              </button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Once approved, this will confirm
                the details and an account will be created!
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onClickApprove}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
