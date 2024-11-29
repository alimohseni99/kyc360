"use client";

import { UploadButton } from "@/app/utils/uploadthing";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { submitAccountDetails } from "../../action";
import "./style.css";

export function CustomerTempPage() {
  const pathName = usePathname();
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState<string>("");

  const representativeSchema = z.object({
    companyName: z.string().nonempty({ message: "This is required" }),
    orgNumber: z.string().nonempty({ message: "This is required" }),
    businessDescription: z.string().nonempty({ message: "This is required" }),
    annualRevenue: z
      .string()
      .nonempty({ message: "This is required" })
      .transform((val) => parseFloat(val))
      .refine((val) => val >= 0, {
        message: "Revenue must be greater than or equal to 0",
      }),
    contactName: z.string().nonempty({ message: "This is required" }),
    contactEmail: z.string().nonempty({ message: "This is required" }),
    companyAddress: z.string().nonempty({ message: "This is required" }),
    companyType: z.object({
      value: z.string().nonempty({ message: "This is required" }),
    }),
    ownerName: z.string().nonempty({ message: "This is required" }),
  });
  const form = useForm<z.infer<typeof representativeSchema>>({
    resolver: zodResolver(representativeSchema),
  });

  const onSubmit = async (data: z.infer<typeof representativeSchema>) => {
    const userId = pathName.split("/").pop() || "";

    console.log(userId);

    submitAccountDetails(
      data.companyName,
      data.orgNumber,
      data.businessDescription,
      data.annualRevenue,
      data.contactName,
      data.contactEmail,
      imageUrl,
      userId,
      data.companyAddress,
      data.companyType.value,
      data.ownerName
    );

    try {
      toast({
        title: "Thank you for your application",
        description: (
          <>Your application has been successfully submitted. We will review</>
        ),
      });
    } catch (error) {
      toast({
        title: "It failed :(",
        description: `There was an error creating the account. Please try again later. ${error}`,
      });
    }
  };

  const onClientUploadComplete = (res) => {
    setImageUrl(res[0].url);
    toast({
      title: "Document Uploaded",
      description: "Your document uploaded successfully",
    });
  };
  const onUploadError = (error: Error) => {
    toast({
      title: "Document Upload Failed",
      description: `There was an error uploading the document. Please try again later. ${error}`,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[400px] border border-gray-200 p-5 rounded-md shadow-md"
        >
          <h2 className="text-xl font-semibold text-center mb-4">
            Open Business Account
          </h2>

          <FormItem>
            <FormLabel className="text-sm font-medium">
              Company Name:*
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("companyName")}
                placeholder="e.g., Tech Innovators AB"
                className="!mt-0 !mb-2 block w-full rounded-md border shadow-sm"
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.companyName?.message}
            </FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm font-medium">Org. Number:*</FormLabel>
            <FormControl>
              <Input
                {...form.register("orgNumber")}
                placeholder="e.g., 556123-4567"
                className="!mt-0 !mb-2 block w-full rounded-md border shadow-sm"
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.orgNumber?.message}
            </FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm font-medium">
              Business Description:*
            </FormLabel>
            <FormControl>
              <Textarea
                {...form.register("businessDescription")}
                placeholder="Briefly describe your business"
                className="!mt-0 !mb-2 block w-full rounded-md border shadow-sm"
                rows={3}
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.businessDescription?.message}
            </FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm font-medium">
              Annual Revenue (SEK):*
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("annualRevenue")}
                placeholder="e.g., 1500000"
                type="number"
                className="!mt-0 !mb-2 block w-full rounded-md border shadow-sm"
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.annualRevenue?.message}
            </FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm font-medium">
              Contact Name:*
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("contactName")}
                placeholder="e.g., Sofia Andersson"
                className="!mt-0 !mb-2 block w-full rounded-md border shadow-sm"
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.contactName?.message}
            </FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm font-medium">
              Contact Email:*
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("contactEmail")}
                placeholder="e.g., sofia.andersson@example.com"
                type="email"
                className="!mt-0 !mb-2 block w-full rounded-md border shadow-sm"
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.contactEmail?.message}
            </FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm font-medium">
              Company Address:*
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("companyAddress")}
                placeholder="e.g., Storgatan 12, 123 45 Stockholm"
                className="!mt-0 !mb-2 block w-full rounded-md border shadow-sm"
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.companyAddress?.message}
            </FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm font-medium">
              Company Type:*
            </FormLabel>
            <FormControl>
              <Select
                value={form.watch("companyType.value")}
                onValueChange={(value) =>
                  form.setValue("companyType.value", value)
                }
              >
                <SelectTrigger className="!mt-0 !mb-2 w-full">
                  <SelectValue placeholder="Select company type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="AB">AB</SelectItem>
                    <SelectItem value="HB">HB</SelectItem>
                    <SelectItem value="enskild">Enskild</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage>
              {form.formState.errors.companyType?.message}
            </FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm font-medium">
              Beneficial owner&apos;s Name:*
            </FormLabel>
            <FormControl>
              <Input
                {...form.register("ownerName")}
                placeholder="e.g., Ali Mohseni"
                className="!mt-0 !mb-2 block w-full rounded-md border shadow-sm"
              />
            </FormControl>
            <FormMessage>
              {form.formState.errors.ownerName?.message}
            </FormMessage>
          </FormItem>

          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={onClientUploadComplete}
            onUploadError={onUploadError}
            className="custom-class mt-5 w-full"
          />

          <Button className="mt-5 w-full">Submit Application</Button>
        </form>
      </Form>
    </div>
  );
}
