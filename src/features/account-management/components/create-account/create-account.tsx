"use client";

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
import { createAccount } from "../../action";
import Header from "../dashboard/header";

export function CreateAccount() {
  const { toast } = useToast();
  const representativeSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().nonempty({ message: "Name is required" }),
  });
  const form = useForm<z.infer<typeof representativeSchema>>({
    resolver: zodResolver(representativeSchema),
  });

  const onSubmit = async (data: z.infer<typeof representativeSchema>) => {
    try {
      await createAccount(data.email, data.name);
      toast({
        title: "Account Created Successfully",
        description: (
          <>
            The account for <strong>{data.name}</strong> has been successfully
            created. You may proceed with the next steps in the verification
            process.
          </>
        ),
      });
    } catch (error) {
      toast({
        title: "Account Creation Failed",
        description: `There was an error creating the account. Please try again. ${error}`,
      });
    }

    form.reset();
  };

  return (
    <>
      <Header place="New Applications" />
      <div className="flex justify-center items-center min-h-screen h-[80vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[350px] border border-gray-200 p-5 rounded-md shadow-md "
          >
            <h2 className="text-xl font-semibold text-center">
              Create an account
            </h2>

            <FormItem>
              <FormLabel className="text-sm font-medium">Email:</FormLabel>
              <FormControl>
                <Input
                  {...form.register("email")}
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel className="text-sm font-medium">Name:</FormLabel>
              <FormControl>
                <Input
                  {...form.register("name")}
                  placeholder="Enter customers name"
                  type="text"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>

            <Button className="mt-5 w-full"> Create</Button>
          </form>
        </Form>
      </div>
    </>
  );
}
