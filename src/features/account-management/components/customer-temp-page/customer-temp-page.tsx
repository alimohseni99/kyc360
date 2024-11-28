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
      .refine((val) => val >= 0, { message: "This is required" }),
    contactName: z.string().nonempty({ message: "This is required" }),
    contactEmail: z.string().nonempty({ message: "This is required" }),
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
      userId
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
    <>
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
                Company Name:
              </FormLabel>
              <FormControl>
                <Input
                  {...form.register("companyName")}
                  placeholder="Enter company name"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.companyName?.message}
              </FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm font-medium">
                Org. Number:
              </FormLabel>
              <FormControl>
                <Input
                  {...form.register("orgNumber")}
                  placeholder="Enter organization number"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.orgNumber?.message}
              </FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm font-medium">
                Business Description:
              </FormLabel>
              <FormControl>
                <Textarea
                  {...form.register("businessDescription")}
                  placeholder="Briefly describe your business"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                  rows={3}
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.businessDescription?.message}
              </FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm font-medium">
                Annual Revenue (SEK):
              </FormLabel>
              <FormControl>
                <Input
                  {...form.register("annualRevenue")}
                  placeholder="Enter expected annual revenue"
                  type="number"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.annualRevenue?.message}
              </FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm font-medium">
                Contact Name:
              </FormLabel>
              <FormControl>
                <Input
                  {...form.register("contactName")}
                  placeholder="Enter contact person's name"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.contactName?.message}
              </FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm font-medium">
                Contact Email:
              </FormLabel>
              <FormControl>
                <Input
                  {...form.register("contactEmail")}
                  placeholder="Enter contact email"
                  type="email"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.contactEmail?.message}
              </FormMessage>
            </FormItem>

            {/* Uppladdning av dokument */}
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
    </>
  );
}
