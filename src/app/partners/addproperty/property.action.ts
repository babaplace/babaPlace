"use server";

import { prisma } from "@/db/prisma";
import { Authaction } from "@/lib/next-safe-action";
import { z } from "zod";

const CategorieSchema = z.object({
  id: z.string(),
  label: z.string(),
  name: z.enum(["Chambres", "Appartement"]),
});

const ImageUploadSchema = z.object({
  url: z.string(),
  size: z.number(),
});

const propertyScheme = z.object({
  city: z.string(),
  address: z.string(),
  category: CategorieSchema,
  chambres: z.number().optional(),
  Images: z.array(ImageUploadSchema),
  salons: z.boolean().optional(),
  toilettes: z.number(),
  surface: z.number(),
  nbreEtages: z.number(),
  terasse: z.boolean().optional(),
  niveau: z.number(),
  balcon: z.boolean().optional(),
  cuisine: z.number().optional(),
  details: z.string().optional(),
  prix: z.number(),
  caution: z.number(),
});

export const createBiens = Authaction(propertyScheme, async (data) => {
  const partner = await prisma.partner.create({
    data: {
      name: "Salim",
      email: "a@gmail.com",
      phone: "684499226",
    },
  });

  console.log("start...");
  const appartement = await prisma.appartement.create({
    data: {
      address: data.address,
      caution: data.caution,
      prix: data.prix,
      baseimageUrl: data.Images[0].url,
      city: data.city,
      niveau: data.niveau,
      balcon: data.balcon,
      salons: data.salons,
      terasse: data.terasse,
      toilettes: data.toilettes,
      surface: data.surface,
      nbreEtages: data.nbreEtages,
      partnerId: partner.id,
    },
  });

  console.log(data.Images);

  data.Images.map(async (image) => {
    await prisma.media.create({
      data: {
        ...image,
        type: "image",
        appartementId: appartement.id,
      },
    });
  });

  console.log("finish...");

  return { appartement };
});
