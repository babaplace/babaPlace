import { useFormStore } from "@/store/useFormStore";
import React from "react";
import { CategorieType } from "@/types/types";

interface Props {
  category: CategorieType;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  const { label, name, id } = category;
  const { category: categoryStore, setCategory } = useFormStore();

  const handlePlan = () => {
    setCategory(category);
  };
  return (
    <article
      onClick={handlePlan}
      className={`flex gap-4 md:flex-col md:justify-between items-start p-3 ${
        categoryStore.id === id && "bg-red-100 border-primary font-extrabold"
      } border border-gray-300 rounded-lg cursor-pointer hover:border-primary`}
    >
      <div className="flex flex-col gap-1">
        <h4 className="text-black font-medium text-lg text-center">{label}</h4>
      </div>
    </article>
  );
};

export default CategoryCard;
