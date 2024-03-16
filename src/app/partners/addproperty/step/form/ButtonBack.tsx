import { useFormSteps } from "@/store/useFormStore";
import { Button } from "@/ui/modules/shad-cn/ui/button";
import { ChevronsLeft } from "lucide-react";
import React from "react";

interface Props {
  step: number;
}
const ButtonBack: React.FC<Props> = ({ step }) => {
  const { currentStep, setCurrentStep } = useFormSteps();
  return (
    <Button
      className="flex justify-center items-center"
      size={"sm"}
      variant={"outline"}
      onClick={() => {
        if (currentStep === step) {
          setCurrentStep(step - 1);
        } else {
          return;
        }
      }}
    >
      <ChevronsLeft size={10} />
      <span>Précedent</span>
    </Button>
  );
};

export default ButtonBack;
