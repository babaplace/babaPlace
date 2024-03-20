import { useFormStore } from "@/store/useFormStore";
import React from "react";
import ButtonNext from "../ButtonNext";
import ButtonBack from "../ButtonBack";

const DetailsForm = () => {
  const {
    surface,
    niveau,
    nbreEtages,
    chambres,
    toilettes,
    setSurface,
    setNiveau,
    setNbreEtages,
    setChambres,
    setToilettes,
  } = useFormStore();

  return (
    <div className="w-full  px-4">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-black text-2xl font-bold">Details</h1>
          <p className="text-gray-500 text-sm">
            Toutes les informations sur le bien
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col  gap-1 w-full">
            <label
              htmlFor="surface"
              className="text-black font-medium text-sm flex-1"
            >
              Quelle est la Surface de votre appartement ?<span> (m2)</span>
            </label>
            <input
              type="number"
              placeholder="Surface"
              id="surface"
              defaultValue={surface}
              onChange={(e) => setSurface(Number(e.target.value))}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary"
              required
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label
              htmlFor="niveau"
              className="text-black font-medium text-sm flex-1"
            >
              Quelle est le niveau de votre appartement ? (Pour Ree-de-Chaussee
              mettre 0 )
            </label>
            <input
              type="number"
              placeholder="Niveau"
              id="niveau"
              defaultValue={niveau}
              onChange={(e) => setNiveau(Number(e.target.value))}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary "
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="nbreEtages"
              className="text-black font-medium text-sm"
            >
              Nombre d&apos;étages
            </label>
            <input
              type="number"
              placeholder="Nombre d'étages"
              id="nbreEtages"
              defaultValue={nbreEtages}
              onChange={(e) => setNbreEtages(Number(e.target.value))}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="chambres"
              className="text-black font-medium text-sm"
            >
              Nombre de chambres
            </label>
            <input
              type="number"
              placeholder="Nombre de chambres"
              id="chambres"
              defaultValue={chambres}
              onChange={(e) => setChambres(Number(e.target.value))}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="toilettes"
              className="text-black font-medium text-sm"
            >
              Nombre de toilettes
            </label>
            <input
              type="number"
              placeholder="Nombre de toilettes"
              id="toilettes"
              defaultValue={toilettes}
              onChange={(e) => setToilettes(Number(e.target.value))}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary w-full"
              required
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center my-8">
        <ButtonBack step={4} />
        <ButtonNext step={4} />
      </div>
    </div>
  );
};

export default DetailsForm;
