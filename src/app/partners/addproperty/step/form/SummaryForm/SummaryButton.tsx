import { useEdgeStore } from "@/lib/edgestore/edgestore";
import { useFormSteps, useFormStore } from "@/store/useFormStore";
import { Button } from "@/ui/modules/shad-cn/ui/button";
import React from "react";
import { z } from "zod";
import { createBiens } from "../../../property.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

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
  partner: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
  }),
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
    partner,
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

  const mutation = useMutation({
    mutationFn: (data: propertyScheme) => createBiens(data),
    onSuccess: () => {
      toast.success("Soumission Reussi ! ", {
        description: "Nous allons vous contacter le plus vite possible",
      });
      setSuccessful(true);
      setTimeout(() => {
        setSuccessful(false);
        resetForm();
        setCurrentStep(0);
      }, 5000);
      router.push("/");
    },
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
      const data = {
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
        partner,
      } satisfies propertyScheme;
      mutation.mutate(data);
    }
  };

  return (
    <Button size={"sm"} onClick={handleSubmit} disabled={mutation.isPending}>
      {mutation.isPending ? "loading.." : "Confirmer"}
    </Button>
  );
};

export default SummaryButton;
