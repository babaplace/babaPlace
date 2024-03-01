import Hero from "@/ui/components/Hero";
import AllProductsA from "@/ui/components/allProductsA";
import SearchSection from "@/ui/components/SearchSection";
import Services from "@/ui/components/Services";
import { prisma } from "@/db/prisma";
import { ImagePropertyCard } from "@/ui/components/ImageProductCard";
import LessCostProperties from "@/ui/components/LessCostProperty";
import { AvisSection } from "@/ui/components/Avis";

export default async function Home() {
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
