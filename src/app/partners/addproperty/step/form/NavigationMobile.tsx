"use client";
import { useFormSteps, useSuccessful } from "@/store/useFormStore";
import React from "react";
import ButtonBack from "./ButtonBack";
import SummaryButton from "./SummaryForm/SummaryButton";
import ButtonNext from "./ButtonNext";

const NavigationMobile = () => {
  const { currentStep } = useFormSteps();
  const { successful, setSuccessful } = useSuccessful();
  return (
    <div className=" w-full p-4 bg-neutro-white flex items-center md:hidden">
      {currentStep === 0 && (
        <div className="w-full flex items-center justify-end">
          <ButtonNext step={0} />
        </div>
      )}
      {currentStep === 1 && (
        <div className="w-full flex items-center justify-between">
          <ButtonBack step={1} />
          <ButtonNext step={1} />
        </div>
      )}

      {currentStep === 2 && (
        <div className="w-full flex items-center justify-between">
          <ButtonBack step={2} />
          <ButtonNext step={2} />
        </div>
      )}
      {currentStep === 3 && (
        <div className="w-full flex items-center justify-between">
          <ButtonBack step={3} />
          <ButtonNext step={3} />
        </div>
      )}
      {currentStep === 4 && (
        <div className="w-full flex items-center justify-between">
          <ButtonBack step={4} />
          <ButtonNext step={4} />
        </div>
      )}
      {currentStep === 5 && (
        <div className="w-full flex items-center justify-between">
          <ButtonBack step={5} />
          <ButtonNext step={5} />
        </div>
      )}
      {currentStep === 6 && (
        <div className="w-full flex items-center justify-between">
          <ButtonBack step={6} />
          <ButtonNext step={6} />
        </div>
      )}
      {currentStep === 7 && (
        <div className="w-full flex items-center justify-between">
          <ButtonBack step={7} />
          <SummaryButton
            successful={successful}
            setSuccessful={setSuccessful}
          />
        </div>
      )}
    </div>
  );
};

export default NavigationMobile;
