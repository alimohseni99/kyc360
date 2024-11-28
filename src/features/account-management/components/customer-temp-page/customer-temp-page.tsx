"use client";

import { UploadButton } from "@/app/utils/uploadthing";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

export function CustomerTempPage() {
  const { toast } = useToast();
  const representativeSchema = z.object({
    companyName: z.string().nonempty({ message: "Name is required" }),
    orgNumber: z.string().nonempty({ message: "Name is required" }),
    businessDescription: z.string().nonempty({ message: "Name is required" }),
    annualRevenue: z.string().nonempty({ message: "Name is required" }),
    contactName: z.string().nonempty({ message: "Name is required" }),
    contactEmail: z.string().nonempty({ message: "Name is required" }),
  });
  const form = useForm<z.infer<typeof representativeSchema>>({
    resolver: zodResolver(representativeSchema),
  });

  const onClientUploadComplete = (res: any) => {
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

  const onSubmit = async (data: z.infer<typeof representativeSchema>) => {
    try {
      //kör POST här till DB
      toast({
        title: "Thank you for your application",
        description: (
          <>Your application has been successfully submitted. We will review</>
        ),
      });
    } catch (error) {
      toast({
        title: "It faild :(",
        description: `There was an error creating the account. Please try again later. ${error}`,
      });
    }

    form.reset();
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
              className="mt-5"
            ></UploadButton>

            <Button className="mt-5 w-full">Submit Application</Button>
          </form>
        </Form>
      </div>
    </>
  );
}
