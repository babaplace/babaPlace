"use client";
import {
  useFormSteps,
  useFormStore,
  useSuccessful,
} from "@/store/useFormStore";
import React from "react";
import Successful from "../Successful";
import ButtonBack from "../ButtonBack";
import SummaryButton from "./SummaryButton";
import Image from "next/image";

const SummaryForm = () => {
  const { setCurrentStep } = useFormSteps();
  const { successful, setSuccessful } = useSuccessful();
  const {
    Images,
    address,
    category,
    caution,
    prix,
    nbreEtages,
    city,
    niveau,
    toilettes,
    terasse,
    balcon,
    chambres,
    surface,
    details,
    cuisine,
    salons,
  } = useFormStore();

  if (successful) return <Successful />;

  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-black text-2xl font-bold">
            {category.name} informations finales
          </h1>
          <p className="text-gray-500text-sm">verifier les informations</p>
        </div>
        <div className="flex flex-col gap-4 bg-neutro-magnolia rounded-lg ">
          {/* etape1 Localistion */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-extrabold">Localisations</h1>
              <button
                onClick={() => setCurrentStep(0)}
                className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
              >
                Modifier
              </button>
            </div>
            <div className="divide-y-2 divide-dotted flex flex-col ">
              <ItemList label="Ville" value={city} />
              <ItemList label="Adresse" value={address} />
            </div>
          </div>

          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-extrabold">Prix</h1>
              <button
                onClick={() => setCurrentStep(2)}
                className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
              >
                Modifier
              </button>
            </div>
            <div className="divide-y-2 divide-dotted flex flex-col ">
              <ItemList label="Prix" value={prix} />
              <ItemList label="Caution" value={caution} />
            </div>
          </div>

          {/* etape 3 Detais  */}

          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-extrabold">Details sur le bien</h1>
              <button
                onClick={() => setCurrentStep(3)}
                className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
              >
                Modifier
              </button>
            </div>
            <div className="divide-y-2 divide-dotted flex flex-col ">
              <ItemList label="Surface" value={surface} />
              <ItemList label="Niveau" value={niveau} />
              <ItemList label="Nombre d'etages" value={nbreEtages} />
              <ItemList label="Nombre de chambres" value={chambres ?? 0} />
              <ItemList label="Nombre de salle de bain" value={toilettes} />
            </div>
          </div>

          {/* etape 4 Options */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-extrabold">Composants sur le bien</h1>
              <button
                onClick={() => setCurrentStep(4)}
                className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
              >
                Modifier
              </button>
            </div>
            <div className="grid md:grid-cols-3  grid-cols-2 gap-2">
              <OptionItem show={salons ?? false} label="Salons" />
              <OptionItem show={terasse ?? false} label="Terasses" />
              <OptionItem show={balcon ?? false} label="Balcons" />
            </div>
          </div>

          {/* etape 5 Images  show */}
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-extrabold">Photos</h1>
              <button
                onClick={() => setCurrentStep(5)}
                className="w-fit text-gray-500hover:text-primary text-sm underline justify-end"
              >
                Modifier
              </button>
            </div>
            <div className="grid  grid-cols-2 gap-3">
              {Images.map((image) => (
                <Image
                  key={image.url}
                  className="p-2  w-full font-semibold border border-spacing-1 text-center rounded-md"
                  alt={"images"}
                  width={100}
                  height={100}
                  src={image.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center">
        <ButtonBack step={6} />
        <SummaryButton successful={successful} setSuccessful={setSuccessful} />
      </div>
    </div>
  );
};

export default SummaryForm;

const ItemList = ({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <h4 className="text-black font-semibold">{label} </h4>
      <span className="text-black ">{value}</span>
    </div>
  );
};

const OptionItem = ({ show, label }: { show: boolean; label: string }) => {
  return show ? (
    <p className="p-2 my-4 bg-red-50 border-red-50 shadow-sm font-semibold border text-center rounded-md">
      {label}
    </p>
  ) : null;
};
