"use client";
import { Button, buttonVariants } from "@/ui/modules/shad-cn/ui/button";
import { Card, CardContent } from "@/ui/modules/shad-cn/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/modules/shad-cn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import SuccesIcon from "./SuccesIcon";
import Link from "next/link";

type Props = {};

const formContactPageSchema = z.object({
  name: z.string().min(2, {
    message: "le nom est obligatoire avec min 2 caractere.",
  }),
  email: z.string().email("l'email est obligatoire et doit etre valide."),
  message: z.string().optional(),
});
type formContactPageSchema = z.infer<typeof formContactPageSchema>;

const FormContactPage = ({}: Props) => {
  const form = useForm<z.infer<typeof formContactPageSchema>>({
    resolver: zodResolver(formContactPageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutationContact = useMutation({
    mutationFn: async (values: formContactPageSchema) => {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ ...values }),
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
  async function onSubmit(values: z.infer<typeof formContactPageSchema>) {
    mutationContact.mutate(values);
    form.reset();
  }

  return (
    <div>
      {mutationContact.isSuccess ? (
        <div className="p-6">
          <div className="text-center justify-center items-center gap-4 flex flex-col">
            <SuccesIcon />
            <h2 className="font-extrabold text-xl">Message envoyé</h2>
            <Link href="/" className={buttonVariants({ variant: "outline" })}>
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form
            className="mx-8 space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
                        placeholder="votre message"
                        {...field}
                      ></textarea>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              disabled={mutationContact.isPending || mutationContact.isSuccess}
              type="submit"
              className="w-full mt-2"
            >
              {mutationContact.isPending ? "En cours..." : " Envoyer"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default FormContactPage;
