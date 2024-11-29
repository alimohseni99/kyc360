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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { bankUsersLogin } from "../action";

export function Login() {
  const representativeSchema = z.object({
    email: z.string({ message: "Invalid email address" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters" }),
  });
  const form = useForm<z.infer<typeof representativeSchema>>({
    resolver: zodResolver(representativeSchema),
  });

  const onSubmit = (data: z.infer<typeof representativeSchema>) => {
    bankUsersLogin(data.email, data.password);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex-1 bg-neutral-900 text-white flex items-center justify-center flex-col p-10">
        <h1 className="text-4xl font-bold mb-6">KYC 360</h1>
        <p className="text-center text-lg italic">
          "In lines of code, our stories are told, From loops to functions, pure
          logic unfolds. Debugging the errors, we strive for the light, Building
          tomorrow, one commit per night."
        </p>
        <span className="mt-4 text-sm">- Unknown Developer</span>
      </div>

      {/* Right Section */}
      <div className="flex-[2] flex items-center justify-center bg-gray-50">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-[350px]">
            <div className="flex flex-col space-y-2 text-center mb-6">
              <h2 className="text-2xl font-semibold tracking-tight">Login</h2>
              <p className="text-sm text-muted-foreground ">
                Enter your email and password to login to your account
              </p>
            </div>
            <FormItem>
              <FormControl>
                <Input
                  {...form.register("email")}
                  placeholder="Enter your email"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>

            <FormItem className="mt-4">
              <FormControl>
                <Input
                  {...form.register("password")}
                  placeholder="Enter your password"
                  type="password"
                  className="mt-1 block w-full rounded-md border shadow-sm"
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.password?.message}
              </FormMessage>
            </FormItem>

            <Button className="mt-5 w-full">Sign In with Email</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
