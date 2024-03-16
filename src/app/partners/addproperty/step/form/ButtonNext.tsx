import { useFormSteps, useFormStore } from "@/store/useFormStore";
import { Button } from "@/ui/modules/shad-cn/ui/button";
import { ChevronsRight } from "lucide-react";
import React from "react";

interface Props {
  step: number;
}
const ButtonNext: React.FC<Props> = ({ step }) => {
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
  } = useFormStore();
  const { setCurrentStep } = useFormSteps();
  const handleNextStep = () => {
    if (step === 0 && address && city) {
      setCurrentStep(1);
    }
    if (step === 1 && category.id && category.name) {
      setCurrentStep(2);
    }

    if (step === 2) {
      setCurrentStep(3);
    }
    if (step === 3) {
      setCurrentStep(4);
    }
    if (step === 4) {
      setCurrentStep(5);
    }
    if (step === 5 && Images.length > 0) {
      setCurrentStep(6);
    }
  };
  return (
    <Button onClick={handleNextStep} size={"sm"}>
      Suivant <ChevronsRight size={10} />
    </Button>
  );
};

export default ButtonNext;
