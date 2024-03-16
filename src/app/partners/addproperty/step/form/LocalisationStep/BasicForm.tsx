"use client";
import { useFormStore } from "@/store/useFormStore";
import React from "react";
import ButtonNext from "../ButtonNext";

const BasicForm = () => {
  const { address, city, setCity, setAddress } = useFormStore();

  return (
    <div className="h-full w-full px-4 flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-bold">Localisation</h1>
          <p className="text-gray-500text-sm">
            Assurez-vous de donnez la bonne location
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-black font-medium text-sm">
              Ville
            </label>
            <input
              type="text"
              placeholder="Ville"
              id="city"
              name="city"
              defaultValue={city}
              onChange={(e) => setCity(e.target.value)}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="address" className="text-black font-medium text-sm">
              Adresse
            </label>
            <input
              type="text"
              placeholder="Rue hollande Mt Fleurie 2"
              id="address"
              name="address"
              defaultValue={address}
              onChange={(e) => setAddress(e.target.value)}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary"
              required
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-end">
        <ButtonNext step={0} />
      </div>
    </div>
  );
};

export default BasicForm;
