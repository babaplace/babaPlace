"use client";
import React, { useEffect } from "react";
import { useFormSteps, useFormStore } from "@/store/useFormStore";
import BasicForm from "./LocalisationStep/BasicForm";
import SummaryForm from "./SummaryForm/SummaryForm";
import SelectCategorieForm from "./CategoryStep/SelectCategorieForm";
import DetailsForm from "./DetailsStep/DetailsForm";
import OptionsForm from "./OptionsStep/OptionsForm";
import ImagesForm from "./ImagesStep/ImagesForm";
import PricingForm from "./PricingStep/PricingForm";
import InfosPartnerForm from "./InfosPartnerStep/InfosPartnerForm";

const FormLayout = () => {
  const { currentStep } = useFormSteps();
  const { address, city } = useFormStore();

  useEffect(() => {
    const formData = localStorage.getItem("formData");
    if (formData) {
      const { city, phone, address } = JSON.parse(formData);
      useFormStore.setState((prevState) => ({
        ...prevState,
        city,
        phone,
        address,
      }));
    }
  }, []);

  useEffect(() => {
    // local storage
    localStorage.setItem("formData", JSON.stringify({ city, address }));
  }, [city, address]);

  return (
    <section className="basis-2/3 px-16 pt-8 pb-4">
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

export default FormLayout;
