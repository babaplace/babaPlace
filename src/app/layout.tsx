import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/ui/components/Footer";
import Navigation from "@/ui/components/Navigation";
import { SITECONFIG } from "@/config/site/siteConfig";
import { Providers } from "@/context/Providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import Script from "next/script";

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QK7YEQ2XV0"
        ></Script>

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QK7YEQ2XV0');
          `}
        </Script>
        <meta
          name="google-site-verification"
          content="CpJN4f0ZJPMkV2REOSzDHqmHfdtcLkyA7ZwDWn3wA2c"
        />
      </head>

      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />
        <Providers>
          <Navigation />
          <div className="mx-auto ">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
