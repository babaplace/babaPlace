import { prisma } from "@/db/prisma";
import ProductCard from "./ProductCard";
type Props = {};

const AllProductsA = async (props: Props) => {
  const biens = await prisma.property.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });
  return (
    <section className="px-4 py-4 bg-gray-100 lg:px-32 lg:py-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Recents
              </span>
              <h2 className="mb-3 text-xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Appartement récemment ajoutée !
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Réservation rapide disponible. Fraîchement listée, moderne et
                prête à accueillir votre prochain chez-vous.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 space-x-0  max-w-screen-xl mx-auto space-y-2 lg:flex lg:flex-nowrap lg:space-x-4 lg:space-y-0 ">
        {biens.map((property) => (
          <ProductCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default AllProductsA;
