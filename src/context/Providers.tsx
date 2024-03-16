"use client";

import React, { PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { EdgeStoreProvider } from "@/lib/edgestore/edgestore";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" richColors duration={10000} />
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </QueryClientProvider>
  );
};
