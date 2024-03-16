import { prisma } from "@/db/prisma";
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

export async function POST(request: Request) {
  const data = await request.json();
  const validData = propertyScheme.parse(data);

  const partner = await prisma.partner.create({
    data: {
      name: "Salim",
      email: "a@gmail.com",
      phone: "684499226",
    },
  });

  const appartement = await prisma.appartement.create({
    data: {
      address: validData.address,
      caution: validData.caution,
      prix: validData.prix,
      city: validData.city,
      niveau: validData.niveau,
      toilettes: validData.toilettes,
      surface: validData.surface,
      nbreEtages: validData.nbreEtages,
      partnerId: partner.id,
    },
  });
  validData.Images.map(async (image) => {
    await prisma.media.create({
      data: {
        ...image,
        type: "image",
        appartementId: appartement.id,
      },
    });
  });

  return Response.json({ appartement, partner });
}
