import { useFormStore } from "@/store/useFormStore";
import { CategorieType } from "@/types/types";
import React from "react";

interface Props {
  category: CategorieType;
  handleAddOns: (category: CategorieType) => void;
}
const CategorySelectCard: React.FC<Props> = ({ category, handleAddOns }) => {
  const { label, description, id } = category;
  const { category: CategoryStore } = useFormStore();

  const isChecked = CategoryStore.id === category.id;

  return (
    <article
      onClick={() => handleAddOns(category)}
      className={`flex items-center justify-between px-4 py-4 border  ${
        isChecked ? "bg-gray-300r border-primary" : "bg-none border-gray-300"
      }  hover:border-primary rounded-lg cursor-pointer`}
    >
      <div className="flex items-center gap-4">
        <input
          title="try"
          checked={isChecked}
          type="checkbox"
          value={id}
          className="w-4 h-4 rounded-sm border border-gray-300 checked:text-primary focus:ring-0"
        />
        <div className="flex flex-col ">
          <h4 className="text-black font-medium text-sm">{label}</h4>
          <p className="text-gray-500text-xs">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default CategorySelectCard;
