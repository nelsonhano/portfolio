"use client";

import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { contactFormSchema, ContactFormType } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import { Input } from "./input";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/button";

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      title: "",
      message: "",
      email: "",
    },
  });

  function onSubmit(values: ContactFormType) {
    console.log(values);
  }
  return (
    <BackgroundGradient className="rounded-[22px] gap-4 p-4 bg-black dark:bg-zinc-900">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-white items-start "
        >
          <div className="w-full gap-5 flex flex-col">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="text-gray-400 font-bold"
                      placeholder="Enter the title"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Textarea
                      className="text-gray-400 font-bold"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Send</Button>
        </form>
      </Form>
    </BackgroundGradient>
  );
}
