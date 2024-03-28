import { gellAllProperty } from "@/db/query/biens.query";
import ProductCard from "@/ui/components/ProductCard";
import SearchSection from "@/ui/components/SearchSection";
import React from "react";
import FormContactPage from "../contact/FormContactPage";
import { Card, CardContent } from "@/ui/modules/shad-cn/ui/card";
import { Handshake } from "lucide-react";

type Props = {
  searchParams: {
    title?: string | undefined;
    price?: string | undefined;
    adresse?: string | undefined;
  };
};

const BiensPage = async ({ searchParams }: Props) => {
  const biens = await gellAllProperty({
    ...searchParams,
  });

  return (
    <div>
      <section className="relative p-16 text-center bg-biens bg-cover lg:p-20">
        <div className="z-40 absolute top-0 right-0 left-0  bottom-0 flex justify-center items-center ">
          <h2 className=" text-5xl  lg:text-6xl text-white">
            Decouvrez votre futur
            <span className="text-primary"> logement !</span>
          </h2>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full bg-black bg-opacity-45"></div>
      </section>

      {/* <SearchSection /> */}

      {biens.length > 0 ? (
        <section className="px-4  max-w-screen-3xl mx-auto py-4  lg:px-20 lg:py-8">
          <div className="mt-4 space-y-2 lg:gap-4 justify-center lg:flex lg:items-center lg:flex-wrap lg:mt-20">
            {biens.map((bien) => (
              <ProductCard key={bien.id} property={bien} />
            ))}
          </div>
        </section>
      ) : (
        <div>
          <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary dark:text-white sm:text-4xl md:text-[40px]">
              Vide
            </h2>
            <p className="text-base flex justify-center items-center flex-col text-body-color dark:text-dark-6">
              <span>
                <Handshake size={50} />
              </span>
              <span> Nous Contactez pour des besoins spécifiques</span>
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="py-4 px-2">
              <CardContent>
                <FormContactPage />
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default BiensPage;
