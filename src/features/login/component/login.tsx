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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[350px] border border-gray-200 p-5 rounded-md shadow-md "
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

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
          <FormLabel className="text-sm font-medium">Password:</FormLabel>
          <FormControl>
            <Input
              {...form.register("password")}
              placeholder="Enter your password"
              type="password"
              className="mt-1 block w-full rounded-md border shadow-sm"
            />
          </FormControl>
          <FormMessage>{form.formState.errors.password?.message}</FormMessage>
        </FormItem>
        <Button className="mt-5 w-full"> Login</Button>
      </form>
    </Form>
  );
}
