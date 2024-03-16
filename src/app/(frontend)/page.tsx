import Hero from "@/ui/components/Hero";
import AllProductsA from "@/ui/components/allProductsA";
import SearchSection from "@/ui/components/SearchSection";
import Services from "@/ui/components/Services";
import LessCostProperties from "@/ui/components/LessCostProperty";
import { AvisSection } from "@/ui/components/Avis";
import { prisma } from "@/db/prisma";

export default async function Home() {
  const appartements = await prisma.appartement.findMany();

  console.log(appartements);

  return (
    <main>
      <Hero />
      <SearchSection />
      <AllProductsA />
      <Services />
      <LessCostProperties />
      <AvisSection />
    </main>
  );
}
