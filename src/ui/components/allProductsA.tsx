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
      <div className="">
        <h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Les plus recents
        </h1>
      </div>
      <div className="mt-4 space-x-0  max-w-screen-xl mx-auto space-y-2 lg:flex lg:flex-nowrap lg:space-x-4 lg:space-y-0 lg:mt-20">
        {biens.map((property) => (
          <ProductCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default AllProductsA;
