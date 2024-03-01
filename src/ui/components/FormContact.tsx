"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../modules/shad-cn/ui/form";
import { Button } from "../modules/shad-cn/ui/button";
import { Input } from "../modules/shad-cn/ui/input";
import { Card, CardContent } from "../modules/shad-cn/ui/card";
import { Textarea } from "../modules/shad-cn/ui/textarea";

export const formContactSchema = z.object({
  name: z.string().min(2, {
    message: "le nom est obligatoire avec min 2 caractere.",
  }),
  email: z.string().email("l'email est obligatoire et doit etre valide."),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export function ContactForm({ propertyId }: { propertyId?: string }) {
  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formContactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ ...values, propertyId }),
    });
  }

  return (
    <Card className="p-4 shadow-none rounded-none">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4 lg:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="salma essrrhir" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="salma@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telephone</FormLabel>
                  <FormControl>
                    <Input placeholder="+212 00 00 00 000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (optionnel)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="salma@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full rounded-none mt-4 px-4 py-3 text-white font-bold rounded"
              type="submit"
            >
              Envoyer
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
