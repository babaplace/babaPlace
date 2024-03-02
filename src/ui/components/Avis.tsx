"use client";

import { InfiniteMovingCards } from "../modules/aceternityUi/InfinityCards";

export function AvisSection() {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Avis
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Nos clients disent
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Découvrez ce que nos clients disent de leur expérience avec nos
                locations d&apos;appartements. Leurs avis authentiques vous
                aident à choisir en toute confiance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "J'ai eu le plaisir de résider ici pendant 18 mois. L'emplacement était parfait pour mon travail et l'espace offrait tout le confort nécessaire.",
    name: "Mohammed El Amrani",
    title: "Partenaire",
  },
  {
    quote:
      "Mon expérience ici a été exceptionnelle. Pendant les deux années où j'y ai vécu, j'ai apprécié non seulement le confort mais aussi la proximité des commodités.",
    name: "Pierre Dubois",
    title: "Client",
  },

  {
    quote:
      "je suis extrêmement satisfait des services proposés par ce site de location d'appartements. La plateforme est conviviale, les outils de gestion des annonces sont efficaces et l'équipe de support est toujours disponible pour répondre à mes questions. Je recommande vivement cette plateforme à tous les propriétaires qui cherchent à louer leurs biens de manière transparente et efficace.",
    name: "Rachid Benhaddou",
    title: "Partenaire",
  },
  {
    quote:
      "Cette résidence a été ma maison pendant un an et demi. Je ne peux pas en dire assez sur la qualité de l'hébergement et la disponibilité de l'hôte.",
    name: "Mamadou diallo",
    title: "Client",
  },
  {
    quote:
      "Je suis resté ici pendant deux ans et je n'aurais pas pu demander mieux. L'endroit était spacieux, bien entretenu et l'emplacement était parfait pour mes besoins.",
    name: "Fatima Zahra Belkadi",
    title: "Client",
  },
  {
    quote:
      "j'ai essayé différentes plateformes de location d'appartements, mais celle-ci se distingue vraiment. La procédure de publication d'annonces est simple et rapide, et j'apprécie particulièrement la facilité avec laquelle je peux communiquer avec les locataires potentiels.",
    name: "Maria Garcia",
    title: "Partenaire",
  },
  {
    quote:
      "Mon séjour dans cette résidence a duré deux ans et je n'aurais pas pu être plus satisfait. L'espace était bien aménagé, l'hôte était attentionné et l'emplacement était idéal.",
    name: "Amina El Moussaoui",
    title: "Client",
  },
  {
    quote:
      "J'ai eu la chance de louer ce logement pendant 1 an et demi et ce fut une expérience fantastique. L'espace était moderne, bien équipé et l'emplacement était idéal.",
    name: "moussa camara",
    title: "Client",
  },
];
