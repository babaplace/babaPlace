import { prisma } from "@/db/prisma";
import React from "react";
import { ImagePropertyCard } from "./ImageProductCard";

type Props = {};

const LessCostProperties = async (props: Props) => {
  // const lessCostProperties = await prisma.property.findMany({
  //   orderBy: {
  //     price: "desc",
  //   },
  //   take: 3,
  // });
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl max-md:mx-6 px-4">
        <div className="lg:max-w-none py-16">
          <div className="mx-auto mb-[60px] text-center">
            <h2 className="mb-3  text-5xl  lg:text-6xl text-dark dark:text-white">
              Un <span className="text-primary">appartement </span>pour vous ?
            </h2>
          </div>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {/* {lessCostProperties.map((property) => (
              <ImagePropertyCard key={property.id} property={property} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessCostProperties;
