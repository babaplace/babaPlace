"use client";
import { useFormSteps } from "@/store/useFormStore";
import React from "react";

interface Props {
  label: string;
  step: number;
}
const StepItem: React.FC<Props> = ({ label, step }) => {
  const { currentStep } = useFormSteps();
  return (
    <div className="flex items-center gap-4">
      <div
        className={`grid place-content-center md:w-8 md:h-8 w-6 h-6 border  ${
          step === currentStep
            ? "text-white bg-primary border-primary"
            : "text-whtie bg-white border-gray-300"
        } text-sm rounded-full`}
      >
        {step + 1}
      </div>
      <div className="hidden md:flex flex-col">
        <span className="text-gray-300 text-sm">{step + 1}</span>
        <p className="text-white font-medium text-sm">{label.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default StepItem;
