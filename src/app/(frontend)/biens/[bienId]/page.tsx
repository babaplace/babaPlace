import { prisma } from "@/db/prisma";
import { ContactForm } from "@/ui/components/FormContact";
import OptionProduct from "@/ui/components/OptionProduct";
import { Bed, Building2, Home, Landmark, LocateFixed } from "lucide-react";
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
    <div>
      <section className="bg-gradient-to-b from-gray-900 to-neutral-800 text-white text-center py-12">
        <h1 className="text-3xl md:text-6xl font-bold">Appartement</h1>
      </section>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Images */}
          <div className="flex flex-col">
            <div className="relative h-96">
              <Image
                src={property.baseimageUrl}
                alt="Product"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Additional images */}
              {property.medias.map((media) => (
                <div key={media.id} className="relative h-48">
                  <Image
                    src={media.url}
                    alt={`image de ${property.balcon}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Property Details */}
          <div className="flex flex-col">
            {/* Property Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {property.address}
            </h1>

            {/* Price */}
            <div className="flex items-center mb-4">
              <span className="text-gray-700 text-lg font-bold mr-2">
                Prix:
              </span>
              <span className="text-primary text-xl font-bold">
                {property.prix} MAD
              </span>
            </div>

            {/* Caution */}
            <div className="flex items-center mb-4">
              <span className="text-gray-700 text-lg font-bold mr-2">
                Caution:
              </span>
              <span className="text-sm">{property.caution} MAD</span>
            </div>

            {/* Surface */}
            <div className="flex items-center mb-4">
              <span className="text-gray-700 text-lg font-bold mr-2">
                Surface:
              </span>
              <span className="text-sm">{property.surface} m²</span>
            </div>

            {/* Contact Form */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Nous contacter pour ce bien
              </h3>
              <ContactForm propertyId={property.id} />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-sm text-gray-700">{property?.details}</p>
            </div>

            {/* More Details */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Plus de détails
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <OptionProduct
                  title="Ville"
                  value={`${property.city}`}
                  Icon={Building2}
                />
                <OptionProduct
                  title="Quartier"
                  value={property.address}
                  Icon={Landmark}
                />
                <OptionProduct
                  title="Chambres"
                  value={property.chambres ?? 0}
                  Icon={Bed}
                />
                <OptionProduct
                  title="Ville"
                  value={property.city}
                  Icon={LocateFixed}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBienPage;
