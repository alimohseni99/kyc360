"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { bankUsersLogin } from "../action";

export function Login() {
  const form = useForm();
  const email = form.getValues("email");
  const password = form.getValues("password");

  console.log({ email, password });
  const onSubmit = () => {
    bankUsersLogin(email, password);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[350px] border border-gray-200 p-5 rounded-md"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <FormItem>
          <FormLabel className="text-sm font-medium">Email:</FormLabel>
          <FormControl>
            <Input
              {...form.register("email")}
              placeholder="Enter Election title"
              className="mt-1 block w-full rounded-md border shadow-sm"
            />
          </FormControl>
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
        </FormItem>

        <div className="flex justify-end">
          <Button className="mt-5"> Login</Button>
        </div>
      </form>
    </Form>
  );
}
