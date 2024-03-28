import Hero from "@/ui/components/Hero";
import AllProductsA from "@/ui/components/allProductsA";
import LessCostProperties from "@/ui/components/LessCostProperty";
import { AvisSection } from "@/ui/components/Avis";
import { prisma } from "@/db/prisma";
import Services from "@/ui/components/Services";

export default async function Home() {
  return (
    <main>
      <Hero />
      {/* <SearchSection /> */}
      <AllProductsA />

      <Services />
      <LessCostProperties />
      {/* <AvisSection /> */}
    </main>
  );
}
