import React from "react";

type Props = {
  value?: boolean;
  label: string;
  setValue: (value: boolean) => void;
};

const OptionCard = ({ value, setValue, label }: Props) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label
        htmlFor={label}
        className={`gap-4 md:flex-col md:justify-between items-start p-8 w-full block text-center shadow-sm border rounded-lg  ${
          value === true && "bg-red-100 border-primary font-extrabold"
        } border border-gray-300  rounded-lg cursor-pointer hover:border-primary`}
      >
        {label}
      </label>
      <input
        type="checkbox"
        id={label}
        checked={value}
        onChange={(e) => setValue(e.target.checked ? true : false)}
        className="form-checkbox h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded hidden"
      />
    </div>
  );
};

export default OptionCard;
