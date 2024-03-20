import { useFormStore } from "@/store/useFormStore";
import React from "react";
import ButtonNext from "../ButtonNext";
import ButtonBack from "../ButtonBack";

const InfosPartnerForm = () => {
  const { partner, setPartnerEmail, setPartnerPhone, setPartnerName } =
    useFormStore();

  return (
    <div className="w-full  px-4">
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-black text-2xl font-bold">Bailleur</h1>
          <p className="text-gray-500 text-sm">Vos Informations</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col  gap-1 w-full">
            <label
              htmlFor="nom"
              className="text-black font-medium text-sm flex-1"
            >
              Nom
            </label>
            <input
              type="text"
              placeholder="Nom"
              id="nom"
              defaultValue={partner.name}
              onChange={(e) => setPartnerName(e.target.value)}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary"
              required
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label
              htmlFor="email"
              className="text-black font-medium text-sm flex-1"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              defaultValue={partner.email}
              onChange={(e) => setPartnerEmail(e.target.value)}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary "
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-black font-medium text-sm">
              Telephone
            </label>
            <input
              type="tel"
              placeholder="Votre telephone"
              id="phone"
              defaultValue={partner.phone}
              onChange={(e) => setPartnerPhone(e.target.value)}
              className="text-sm text-gray-500 border border-gray-300 rounded-lg px-3 py-2.5 outline-none focus:border-primary w-full"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center my-8">
        <ButtonBack step={1} />
        <ButtonNext step={1} />
      </div>
    </div>
  );
};

export default InfosPartnerForm;
