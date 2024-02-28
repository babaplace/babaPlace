import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  Icon: LucideIcon;
  title: string;
  value: string;
};

const OptionProduct = ({ Icon, title, value }: Props) => {
  return (
    <div className="w-full mt-4 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded">
      <div className="flex w-full  gap-4 items-center h-full p-4  rounded">
        <Icon />
        <p className="flex gap-4 justify-start items-center">
          <span className="font-medium">{title} : </span>
          <span className="font-extrabold text-lg">{value}</span>
        </p>
      </div>
    </div>
  );
};

export default OptionProduct;
