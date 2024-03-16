"use client";
import React, { FormHTMLAttributes, useRef } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../modules/shad-cn/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../modules/shad-cn/ui/button";
import { useRouter } from "next/navigation";

type Props = {};

const formSearchSCheme = z.object({
  title: z.string().optional(),
  price: z.string().optional(),
  adresse: z.string().optional(),
});

export type formSearchSCheme = z.infer<typeof formSearchSCheme>;

const SearchSection = (props: Props) => {
  const router = useRouter();
  const form = useForm<formSearchSCheme>({
    resolver: zodResolver(formSearchSCheme),
    defaultValues: {
      title: "",
      adresse: "",
    },
  });

  async function onSubmit(values: formSearchSCheme) {
    console.log(values);

    router.push(
      `/biens?title=${values.title}&price=${values.price}&adresse=${values.adresse}`
    );
  }

  return (
    <div className="m-4 lg:m-0 ">
      <div className="p-8 bg-white lg:flex lg:items-center lg:justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4 lg:flex-nowrap"
          >
            <div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                        placeholder="title"
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
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="number"
                        className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                        placeholder="Par Prix Max"
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
                name="adresse"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        className="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2"
                        placeholder="Adresse"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="px-8 py-2 text-blue-100 bg-gray-600 rounded"
              >
                Recherche
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SearchSection;
