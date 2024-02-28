import { prisma } from "@/db/prisma";
import { ContactForm } from "@/ui/components/FormContact";
import OptionProduct from "@/ui/components/OptionProduct";
import { Bed, Building2, Home, Landmark, LocateFixed } from "lucide-react";
import Image from "next/image";
import React from "react";

const SingleBienPage = async ({ params }: { params: { bienId: string } }) => {
  const property = await prisma.property.findUniqueOrThrow({
    where: { id: params.bienId },
  });
  return (
    <div>
      <section className="p-8 text-center bg-[url('https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')] bg-cover 00 lg:p-20">
        <h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-neutral-800 py-4">
          Un bien pour votre confort
        </h1>
      </section>

      <div>
        <div className="p-6 max-w-screen-xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full lg:sticky top-0 sm:flex gap-2">
              <Image
                width={500}
                height={300}
                src={property.imageUrl}
                alt="Product"
                className="w-full rounded object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800">
                {property.title}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-800 text-xl font-bold">
                  <span className="text-primary">MAD</span> {property.price}
                </p>
                <p className="text-gray-600 text-sm">
                  <p>MAD {property.caution}</p>{" "}
                  <span className="text-sm ml-1">Caution</span>
                </p>
              </div>
              <div className="flex space-x-2 mt-2">
                <h2 className="text-lg text-gray-800">{property.quartier}</h2>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">
                  Nous contactez pour ce bien
                </h3>

                <ContactForm propertyId={property.id} />
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">Description</h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                  {property.description}
                </ul>
              </div>
              <div className="mt-8 ">
                <h3 className="text-lg font-bold text-gray-800">
                  Plus de details
                </h3>
                <OptionProduct
                  title="Ville"
                  value={`${property.city}`}
                  Icon={Building2}
                />
                <OptionProduct
                  title="Quartier"
                  value={property.quartier}
                  Icon={Landmark}
                />
                <OptionProduct
                  title="Chambres"
                  value={property.rooms}
                  Icon={Bed}
                />
                <OptionProduct
                  value={property.adresse}
                  title="Adresse"
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
