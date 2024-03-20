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
import InfosPartnerForm from "./InfosPartnerStep/InfosPartnerForm";

const FormLayoutMobile = () => {
  const { currentStep } = useFormSteps();
  return (
    <section className="flex items-center justify-center bg-neutro-white rounded-lg z-20 w-full   px-8  drop-shadow-soft">
      {currentStep === 0 && <BasicForm />}
      {currentStep === 1 && <InfosPartnerForm />}
      {currentStep === 2 && <SelectCategorieForm />}
      {currentStep === 3 && <PricingForm />}
      {currentStep === 4 && <DetailsForm />}
      {currentStep === 5 && <OptionsForm />}
      {currentStep === 6 && <ImagesForm />}
      {currentStep === 7 && <SummaryForm />}
    </section>
  );
};

export default FormLayoutMobile;
