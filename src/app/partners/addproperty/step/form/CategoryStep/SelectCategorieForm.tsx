import React from "react";
import { useFormStore } from "@/store/useFormStore";
import ButtonBack from "../ButtonBack";
import ButtonNext from "../ButtonNext";
import { categories } from "./CategoiresData";
import CategoryCard from "./CategorieCard";

const SelectCategorieForm: React.FC = () => {
  return (
    <div className="h-full flex flex-col  justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-bold">
            Selectionner une categorie
          </h1>
          <p className="text-gray-500text-sm">
            Choisir le type de bien que vous voulez renseignez
          </p>
        </div>
        <div className="min-h-[9rem] flex flex-col gap-6">
          {categories.map((category, idx) => {
            return <CategoryCard key={idx} category={category} />;
          })}
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center">
        <ButtonBack step={2} />
        <ButtonNext step={2} />
      </div>
    </div>
  );
};

export default SelectCategorieForm;
