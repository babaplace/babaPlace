import Image from "next/image";
import React from "react";
import checkmark from "@/assets/images/icon-checkmark.svg";
const Successful = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-4">
      <Image
        src={checkmark}
        alt="checkmark"
        width={100}
        height={100}
        className="h-16 w-16"
      />
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-black text-2xl font-bold"> Merci!</h1>
        <p className="text-gray-500text-xs text-center">
          Merci pour la confiance . Nous allons verifier et valider le produit
          le plus vite possible
        </p>
      </div>
    </div>
  );
};

export default Successful;
