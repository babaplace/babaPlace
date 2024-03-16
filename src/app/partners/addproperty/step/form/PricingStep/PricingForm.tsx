"use client";
import { useFormStore } from "@/store/useFormStore";
import React from "react";
import ButtonNext from "../ButtonNext";
import ButtonBack from "../ButtonBack";

const PricingForm = () => {
  const { prix, caution, setCaution, setPrix } = useFormStore();

  return (
    <div className="h-full w-full px-4 flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-bold">Prix</h1>
          <p className="text-gray-500text-sm">Saisir le prix et la caution</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-black font-medium text-sm">
              Prix
            </label>
            <input
              type="number"
              placeholder="prix"
              id="city"
              name="city"
              defaultValue={prix}
              onChange={(e) => setPrix(Number(e.target.value))}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="text-black font-medium text-sm">
              Caution
            </label>
            <input
              type="text"
              placeholder="Rue hollande Mt Fleurie 2"
              id="address"
              name="caution"
              defaultValue={caution}
              onChange={(e) => setCaution(Number(e.target.value))}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary"
              required
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center my-8">
        <ButtonBack step={2} />
        <ButtonNext step={2} />
      </div>
    </div>
  );
};

export default PricingForm;
