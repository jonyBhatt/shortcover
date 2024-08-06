import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import toast from "react-hot-toast";
import { RegisterSchema } from "../../lib/FormValidation/AuthForms";
import { useNavigate } from "react-router-dom";
export const RegisterForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      country: "",
      dob: "",
      postCode: "",
      phoneNumber: "",
    },
  });


  // if (isPending) return toast.loading("Creating....");
  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    // console.log(values);
    await fetch("https://shortcover-server.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((data)=> data.json())
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-6 items-center w-full">
          {/** Fist Name  */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    required
                    placeholder="John Doe"
                    {...field}
                    className="border-r-0 border-t-0 border-l-0  border-b border-b-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/** Last Name  */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    required
                    placeholder="John Doe"
                    {...field}
                    className="border-r-0 border-t-0 border-l-0  border-b border-b-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** DOB  */}
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of birth</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    required
                    {...field}
                    className="border-r-0 border-t-0 border-l-0  border-b border-b-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Email  */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    required
                    placeholder="johndoe@gmail.com"
                    {...field}
                    className="border-r-0 border-t-0 border-l-0  border-b border-b-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Phone Number  */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    required
                    placeholder="+880123456789"
                    {...field}
                    className="border-r-0 border-t-0 border-l-0  border-b border-b-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Country  */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    required
                    placeholder="Country"
                    {...field}
                    className="border-r-0 border-t-0 border-l-0  border-b border-b-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/** Post Code  */}
          <FormField
            control={form.control}
            name="postCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Code</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    required
                    placeholder="Post code"
                    {...field}
                    className="border-r-0 border-t-0 border-l-0  border-b border-b-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/**  password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    {...field}
                    className="border-r-0 border-t-0 border-l-0  border-b border-b-gray-300 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" size={"lg"} className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
};
