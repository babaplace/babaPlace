"use client";

import Image from "next/image";
import { PropertyQueryType } from "../../db/query/biens.query";
import Link from "next/link";

export function ImagePropertyCard({
  property,
}: {
  property: PropertyQueryType;
}) {
  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden  bg-gray-50 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <Link href={`/biens/${property.id}`}>
          <Image
            height={300}
            width={500}
            src={property.baseimageUrl}
            alt={property.address}
            className="h-full w-full object-cover object-center"
          />
        </Link>
      </div>
      <div>
        <h3 className="mt-6 text-base text-gray-900">
          <Link href={`/biens/${property.id}`}>
            <span className="absolute inset-0"></span>
            {property.address}
          </Link>
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-xs font-extrabold text-gray-900">
            {property.city}
          </p>
          <p className="text-lg font-bold text-primary">MAD {property.prix}</p>
        </div>
      </div>
    </div>
  );
}
