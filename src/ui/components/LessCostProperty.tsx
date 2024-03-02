import { prisma } from "@/db/prisma";
import React from "react";
import { ImagePropertyCard } from "./ImageProductCard";

type Props = {};

const LessCostProperties = async (props: Props) => {
  const lessCostProperties = await prisma.property.findMany({
    orderBy: {
      price: "desc",
    },
    take: 3,
  });
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl max-md:mx-6 px-4">
        <div className="lg:max-w-none py-16">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                  <span className="mb-2 block text-lg font-semibold text-primary">
                    Les Moins Chers
                  </span>
                  <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    Un appartement pour vous ?
                  </h2>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Appartements abordables à louer, convenant à tout budget,
                    offrant confort et commodités sans compromettre votre
                    portefeuille.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {lessCostProperties.map((property) => (
              <ImagePropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessCostProperties;
