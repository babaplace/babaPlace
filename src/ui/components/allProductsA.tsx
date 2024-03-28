import { prisma } from "@/db/prisma";
import ProductCard from "./ProductCard";
import TitleSection from "./TitleSection";
type Props = {};

const AllProductsA = async (props: Props) => {
  const biens = await prisma.appartement.findMany({
    orderBy: {
      // createdAt: "desc",
    },
    take: 3,
  });
  return (
    <section className="px-4 py-4 bg-gray-100 lg:px-32 lg:py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-[60px] text-center">
          <h2 className="mb-3  text-5xl  lg:text-6xl text-dark dark:text-white">
            Appartement récemment{" "}
            <span className="text-primary">ajoutée !</span>
          </h2>
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
