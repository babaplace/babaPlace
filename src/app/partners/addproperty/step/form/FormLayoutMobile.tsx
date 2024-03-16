"use client";
import { useFormSteps } from "@/store/useFormStore";
import React from "react";
import BasicForm from "./LocalisationStep/BasicForm";
import DetailsForm from "./DetailsStep/DetailsForm";
import SelectCategorieForm from "./CategoryStep/SelectCategorieForm";
import ImagesForm from "./ImagesStep/ImagesForm";
import SummaryForm from "./SummaryForm/SummaryForm";
import OptionsForm from "./OptionsStep/OptionsForm";
import PricingForm from "./PricingStep/PricingForm";

const FormLayoutMobile = () => {
  const { currentStep } = useFormSteps();
  return (
    <section className="flex items-center justify-center bg-neutro-white rounded-lg z-20 w-full   px-8  drop-shadow-soft">
      {currentStep === 0 && <BasicForm />}
      {currentStep === 1 && <SelectCategorieForm />}
      {currentStep === 2 && <PricingForm />}
      {currentStep === 3 && <DetailsForm />}
      {currentStep === 4 && <OptionsForm />}
      {currentStep === 5 && <ImagesForm />}
      {currentStep === 6 && <SummaryForm />}
    </section>
  );
};

export default FormLayoutMobile;
