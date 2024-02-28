import React from "react";

type Props = {};

const services = [
  { title: "Rent", description: "Lorem ipsum dolor sit amet..." },
  {
    title: "Colocation facilitée ",
    description:
      "Si vous cherchez des colocataires ou des chambres disponibles dans des logements partagés, notre service de colocation vous mettra en relation avec d'autres étudiants partageant vos intérêts et vos préférences de mode de vie.",
  },
  {
    title: "Mise en relation facilitée",
    description:
      "Notre plateforme offre des outils de communication sécurisés et simplifie le processus de recherche et de réservation, vous permettant de trouver rapidement des locataires idéaux pour votre appartement en facilitant la mise en relation entre bailleurs et étudiants sérieux et qualifiés.",
  },
];

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="px-6 py-8 bg-white rounded-md shadow-md  text-center">
      <h2 className="text-xl font-medium text-gray-800">{title}</h2>
      <p className="max-w-md mx-auto mt-4 text-gray-400">{description}</p>
    </div>
  );
};

const Services = (props: Props) => {
  return (
    <section className="bg-white">
      <div className=" py-16 mx-auto max-w-screen-xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center text-primary lg:text-4xl">
            Nos Services
          </h1>
          <div className="flex justify-center">
            <div className="w-40 h-1 bg-primary rounded"></div>
          </div>
        </div>

        <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
