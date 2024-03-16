import { useEdgeStore } from "@/lib/edgestore/edgestore";
import { useFormSteps, useFormStore } from "@/store/useFormStore";
import { Button } from "@/ui/modules/shad-cn/ui/button";
import React from "react";
import { z } from "zod";
import { createBiens } from "../../../property.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  successful: boolean;
  setSuccessful: (state: boolean) => void;
}

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

type propertyScheme = z.infer<typeof propertyScheme>;

const SummaryButton: React.FC<Props> = ({ successful, setSuccessful }) => {
  const router = useRouter();
  const {
    Images,
    address,
    category,
    caution,
    prix,
    nbreEtages,
    city,
    niveau,
    toilettes,
    terasse,
    balcon,
    chambres,
    surface,
    details,
    cuisine,
    salons,
    resetForm,
  } = useFormStore();
  const { currentStep, setCurrentStep } = useFormSteps();
  const { edgestore } = useEdgeStore();

  console.log({
    Images,
    address,
    category,
    caution,
    prix,
    nbreEtages,
    city,
    niveau,
    chambres,
    surface,
  });

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (true) {
      Images.map(async (image) => {
        await edgestore.publicFiles.confirmUpload({
          url: image.url,
        });
      });
      const res = await createBiens({
        Images,
        address,
        category,
        caution,
        prix,
        nbreEtages,
        city,
        niveau,
        toilettes,
        terasse,
        balcon,
        chambres,
        surface,
        cuisine,
      } satisfies propertyScheme).then(() => {
        toast.success("Soumission Reussi ! ", {
          description: "Nous allons vous contacter le plus vite possible",
        });
        router.push("/");
      });

      console.log(res);

      setSuccessful(true);
      setTimeout(() => {
        setSuccessful(false);
        resetForm();
        setCurrentStep(0);
      }, 5000);
    }
  };

  return (
    <Button size={"sm"} onClick={handleSubmit}>
      Confirmer
    </Button>
  );
};

export default SummaryButton;
