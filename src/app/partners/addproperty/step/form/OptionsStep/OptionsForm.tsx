import { useFormStore } from "@/store/useFormStore";
import React from "react";
import ButtonNext from "../ButtonNext";
import ButtonBack from "../ButtonBack";
import OptionCard from "./OptionCard";

const OptionsForm = () => {
  const { salons, terasse, balcon, setSalons, setTerasse, setBalcon } =
    useFormStore();

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-bold">
            Composition de votre bien
          </h1>
          <p className="text-gray-500text-sm">
            Selectionner les differentes elements se trouvant sur votre
            appartement
          </p>
        </div>
        <div className="grid  grid-cols-2 gap-4">
          <OptionCard
            key={1}
            value={salons}
            setValue={setSalons}
            label="Salons"
          />
          <OptionCard
            key={2}
            value={terasse}
            setValue={setTerasse}
            label="Terasses"
          />
          <OptionCard
            key={3}
            value={balcon}
            setValue={setBalcon}
            label="Balcon"
          />
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center">
        <ButtonBack step={5} />
        <ButtonNext step={5} />
      </div>
    </div>
  );
};

export default OptionsForm;
