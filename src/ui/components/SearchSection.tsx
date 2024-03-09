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
import { Card, CardContent } from "../modules/shad-cn/ui/card";
import { CaseUpper, DollarSign, Home, Locate, Search } from "lucide-react";

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
    <>
      <Card className="max-lg:hidden">
        <CardContent>
          <div className="py-10 bg-cover bg-no-repeat bg-right lg:px-16">
            <div className="text-center w-full">
              <Form {...form}>
                <form
                  action=""
                  className="lg:inline-block  w-auto bg-gray-50 shadow-lg bg-opacity-25 p-2 rounded"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="lg:flex items-center max-lg:flex max-lg:flex-col bg-gray-50 px-4 py-2 rounded">
                    <span className="flex p-3 items-center gap-2">
                      <CaseUpper />

                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl className="w-full">
                              <input
                                {...field}
                                type="text"
                                className="placeholder-gray-700 rounded-lg py-2 px-4 focus:outline-none  w-full lg:w-auto"
                                placeholder="Par title"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </span>

                    <span className="hidden lg:inline border-gray-500 border-r-2 mr-5">
                      {" "}
                      &nbsp;
                    </span>

                    <span className="flex p-3 items-center gap-2">
                      <Home />
                      <FormField
                        control={form.control}
                        name="adresse"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <input
                                {...field}
                                type="text"
                                className="placeholder-gray-700 rounded-lg py-2 px-4 focus:outline-none  w-full lg:w-auto"
                                placeholder="Par adresse"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </span>

                    <span className="hidden lg:inline border-gray-500 rounded-lg border-r-2 mr-5">
                      {" "}
                      &nbsp;
                    </span>
                    <span className="flex p-3 items-center  gap-2">
                      <DollarSign />
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <input
                                {...field}
                                type="text"
                                className="placeholder-gray-700 py-2 px-4 focus:outline-none  w-full lg:w-auto"
                                placeholder="Par Prix Max"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </span>
                    <span className="flex p-3">
                      <button
                        title="search"
                        type="submit"
                        className="bg-primary hover:bg-secondary  transition-all text-gray-50 rounded flex py-2 px-4 w-full lg:w-auto justify-center"
                      >
                        <Search />
                      </button>
                    </span>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* responsive */}
      <div className="m-4 lg:m-0 lg:hidden">
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
    </>
  );
};

export default SearchSection;
