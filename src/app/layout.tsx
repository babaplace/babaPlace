import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/ui/components/Footer";
import Navigation from "@/ui/components/Navigation";
import { SITECONFIG } from "@/config/site/siteConfig";
import { Providers } from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITECONFIG.seo.name,
  description: SITECONFIG.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <div className="mx-auto ">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
