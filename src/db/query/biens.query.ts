import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

type formSearchType = {
  title?: string | undefined;
  price?: string | undefined;
  adresse?: string | undefined;
};

export const gellAllProperty = (values: formSearchType) => {
  console.log(values);

  if (values.adresse || values.price || values.title) {
    const properties = prisma.property.findMany({
      where: {
        title: {
          contains: values.title,
        },
        adresse: {
          contains: values.adresse,
        },
        price: {
          lte: values.price,
        },
      },
    });

    return properties;
  } else {
    return prisma.property.findMany();
  }
};

export type PropertyQueryType = Prisma.PromiseReturnType<
  typeof gellAllProperty
>[0];
