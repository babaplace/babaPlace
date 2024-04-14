import { prisma } from "@/db/prisma";
import { ContactForm } from "@/ui/components/FormContact";
import {
  Bed,
  Building,
  Building2,
  Home,
  LandPlot,
  Landmark,
  LocateFixed,
  LucideIcon,
  Ruler,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const SingleBienPage = async ({ params }: { params: { bienId: string } }) => {
  const property = await prisma.appartement.findUniqueOrThrow({
    where: { id: params.bienId },
    include: {
      medias: true,
    },
  });

  console.log(property);

  return (
    <div className="bg-gray-50">
      {/* <section className="bg-gradient-to-b from-gray-900 to-neutral-800 text-white text-center py-12">
        <h1 className="text-3xl md:text-6xl font-bold">Appartement</h1>
      </section> */}

      <div className="container mx-auto py-12 grid md:grid-cols-2 gap-4">
        {/* image sections */}
        <div>
          <div className="relative">
            <Image
              className="w-full max-h-96 object-cover rounded-xl shadow-lg shadow-gray-100"
              src={property.baseimageUrl}
              alt={property.address}
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-wrap   items-center my-2">
            {property.medias.map((media) => (
              <Image
                className="max-md:hidden w-56 h-56 object-cover border rounded-xl"
                src={media.url}
                alt={String(media.size) ?? property.address}
                width={200}
                height={200}
                key={media.id}
              />
            ))}
          </div>
        </div>

        <div className="md:relative ">
          <div className="bg-white my-6 shadow-lg md:top-0 max-md:fixed  max-md:rounded-lg max-md:w-full  rounded-lg md:max-w-xl min-w-[25rem] p-4">
            <h1 className="font-bold  text-2xl">
              A partir de{" "}
              <span className="text-primary">{property.prix} MAD</span>{" "}
            </h1>
            <p className="text-lg font-light max-md:mb-8">
              Caution : {property.caution} MAD
            </p>
          </div>
          {/* informations */}
          <div className="bg-white my-6 shadow-sm rounded-sm max-w-3xl p-6">
            <h1 className="font-bold  text-2xl">Informations </h1>
            {/* datails */}
            <div>
              <div className="my-4  gap-16  grid max-md:gap-4 md:flex items-center">
                <ItemInfos title="Ville" value={property.city} />
                <ItemInfos title="Adresse" value={property.address} />
                <ItemInfos title="Caution" value={`MAD  ${property.caution}`} />
                <ItemInfos title="Chambres" value={property.chambres} />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white my-6 shadow-sm rounded-sm max-w-3xl p-6">
            <h1 className="font-bold  text-2xl">Details </h1>
            <p className="text-lg font-light ">{property.details}</p>
            {/* datails */}
            <div>
              <div className="my-6  gap-10 grid grid-cols-2 md:grid-cols-4  items-center flex-wrap">
                <ItemInfosIcon
                  Icon={LandPlot}
                  title="Surface"
                  value={`${property.surface} m2`}
                />
                <ItemInfosIcon
                  Icon={Bed}
                  title="Chambres"
                  value={`${property.chambres ?? 0}`}
                />
                <ItemInfosIcon
                  Icon={UtensilsCrossed}
                  title="Cuisine"
                  value={`${property.cuisine ?? 0}`}
                />
                <ItemInfosIcon
                  Icon={Building2}
                  title="Etage"
                  value={`${property.niveau ?? 0}`}
                />
                <ItemInfosIcon
                  Icon={Building}
                  title="Nombre d'etages"
                  value={`${property.nbreEtages ?? 0}`}
                />
                <ItemInfosIcon
                  Icon={Waves}
                  title="Toilettes"
                  value={`${property.toilettes ?? 0}`}
                />
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div className="bg-white my-6 shadow-sm rounded-sm max-w-3xl p-6">
            <h1 className="font-bold  text-2xl mb-4">
              Je veux en savoir plus ou reservez ce bien ?{" "}
            </h1>
            {/* datails */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Autres infos  */}
          <div className="bg-white my-6 shadow-sm rounded-sm max-w-3xl p-6">
            <h1 className="font-bold  text-2xl mb-6">Autres Composants </h1>
            {/* datails */}
            <div>
              <div className="my-4 gap-4 flex-wrap  md:gap-16 flex items-center">
                <OptionsCard value="Terrasse" isShow={property.terasse} />
                <OptionsCard value="Balcon" isShow={property.balcon} />
                <OptionsCard value="Salon" isShow={property.salons} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBienPage;

const ItemInfos = ({
  title,
  value,
}: {
  title: string;
  value?: string | null | number;
}) => {
  return value ? (
    <div>
      <p className="font-extralight my-1 text-xs">{title}</p>
      <h4 className="my-1 text-lg font-semibold">{value}</h4>
    </div>
  ) : null;
};

const ItemInfosIcon = ({
  title,
  value,
  Icon,
}: {
  title: string;
  value?: string | null | number;
  Icon: LucideIcon;
}) => {
  return value ? (
    <div className="flex items-start gap-2">
      <Icon className="text-primary" />
      <div>
        <p className="font-extralight text-xs mb-1  ">{title}</p>
        <h4 className=" text-lg font-semibold">{value}</h4>
      </div>
    </div>
  ) : null;
};

const OptionsCard = ({
  value,
  isShow = false,
}: {
  value: string;
  isShow: boolean | null;
}) => {
  return isShow ? (
    <div className="flex flex-col gap-1 items-start ">
      <p
        className={`gap-4 md:flex-col md:justify-between items-start p-4 px-8 md:px-16 w-full block text-center shadow-sm border rounded-lg    border-gray-300   cursor-pointer  uppercase`}
      >
        {value}
      </p>
    </div>
  ) : null;
};
