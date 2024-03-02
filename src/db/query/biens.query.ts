import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

type formSearchType = {
  title?: string;
  price?: string;
  adresse?: string;
};

export const gellAllProperty = (values: formSearchType) =>
  prisma.property.findMany({
    where: {
      title: {
        contains: values?.title ?? "",
      },
      adresse: {
        contains: values?.adresse ?? "",
      },
      price: {
        lte: values?.price ?? "10000",
      },
    },
  });

export type PropertyQueryType = Prisma.PromiseReturnType<
  typeof gellAllProperty
>[0];
