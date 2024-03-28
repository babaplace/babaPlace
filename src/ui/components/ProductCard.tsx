import { PropertyQueryType } from "@/db/query/biens.query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  property: PropertyQueryType;
};

const ProductCard = ({ property }: Props) => {
  console.log(property);

  return (
    <div className="md:max-w-xl max-h-lvh bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`/biens/${property.id}`}>
        <Image
          className="w-full lg:h-96 lg:w-[30rem]"
          width={600}
          height={200}
          src={property.baseimageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {property.city}
          </h5>
        </a>
        <p className="text-xs text-gray-500 italic">{property.address}</p>

        <div className="flex justify-between items-center">
          <p>{property.surface ?? 0} m2</p>
          <p className="text-lg font-bold">{property.prix} MAD</p>
        </div>
        <div className="flex justify-end my-2">
          <Link
            href={`/biens/${property.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
          >
            Voir plus
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
