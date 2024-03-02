"use client"; // Error components must be Client Components

import { Button, buttonVariants } from "@/ui/modules/shad-cn/ui/button";
import { Card, CardContent } from "@/ui/modules/shad-cn/ui/card";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";
import ErrorIcon from "./ErrorIcon";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-4xl mx-auto mt-16">
      <Card className="p-6">
        <CardContent className="text-center justify-center items-center gap-4 flex flex-col">
          <ErrorIcon />
          <h2 className="font-extrabold text-xl">
            Oups ! Quelque chose s&apos;est mal passée
          </h2>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Retour à l&apos;accueil
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
