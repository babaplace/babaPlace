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
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const formContactSchema = z.object({
  name: z.string().min(2, {
    message: "le nom est obligatoire avec min 2 caractere.",
  }),
  email: z.string().email("l'email est obligatoire et doit etre valide."),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type formContactSchema = z.infer<typeof formContactSchema>;

export function ContactForm({ propertyId }: { propertyId?: string }) {
  const form = useForm<formContactSchema>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  const mutationContact = useMutation({
    mutationFn: async (values: formContactSchema) => {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...values, propertyId }),
      });
    },
    onSuccess: () => {
      toast.success("Votre contact a été pris en compte ", {
        description:
          "On va vous contacter sous peu de temps. Merci pour votre confiance !",
      });
    },
    onError: () => {
      toast.error("Il y'a eu une erreur", {
        description: "Veuillez ressayer Plus Tard",
      });
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: formContactSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    mutationContact.mutate(values);
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
              disabled={mutationContact.isPending}
              className="w-full rounded-none mt-4 px-4 py-3 text-white font-bold "
              type="submit"
            >
              {mutationContact.isPending ? "En cours..." : " Envoyer"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
