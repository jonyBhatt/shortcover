import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "../../lib/FormValidation/AuthForms";
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
import { useNavigate } from "react-router-dom";
export const LoginForm = () => {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    // console.log(values);
    await fetch("https://shortcover-server.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(async (res) => {
      if (!res.ok) {
        const error = await res.json();
        toast.error(error.message);
        return;
      }
      if (res.ok) navigate("/")
    });
   
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit" size={"lg"} className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};
