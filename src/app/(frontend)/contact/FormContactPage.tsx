"use client";
import { Button } from "@/ui/modules/shad-cn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/modules/shad-cn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};

const formContactPageSchema = z.object({
  name: z.string().min(2, {
    message: "le nom est obligatoire avec min 2 caractere.",
  }),
  email: z.string().email("l'email est obligatoire et doit etre valide."),
  message: z.string().optional(),
});

const FormContactPage = ({}: Props) => {
  const form = useForm<z.infer<typeof formContactPageSchema>>({
    resolver: zodResolver(formContactPageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formContactPageSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ ...values }),
    });
  }

  return (
    <div>
      <Form {...form}>
        <form className="mx-8 space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-primary"
                      placeholder="john Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre Email</FormLabel>
                  <FormControl>
                    <input
                      className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-primary"
                      placeholder="Jonh@doe.ma"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-primary"
                      placeholder="un message"
                      {...field}
                    ></textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full mt-2">
            Envoyer
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormContactPage;
