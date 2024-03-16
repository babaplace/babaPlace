import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

type formSearchType = {
  title?: string | undefined;
  price?: string | undefined;
  adresse?: string | undefined;
};

export const gellAllProperty = (values: formSearchType) => {
  const properties = prisma.appartement.findMany();

  console.log(properties);

  return properties;
};

export type PropertyQueryType = Prisma.PromiseReturnType<
  typeof gellAllProperty
>[0];
