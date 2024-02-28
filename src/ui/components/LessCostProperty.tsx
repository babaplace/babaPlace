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
      <div className="mx-auto max-w-screen-xl max-md:px-4">
        <div className="lg:max-w-none py-16">
          <h1 className="font-bold text-xl  md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Les Moins chers
          </h1>

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
