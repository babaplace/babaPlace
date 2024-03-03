import { SITECONFIG } from "@/config/site/siteConfig";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mt-16 bg-gray-100">
      <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <Image
            width={100}
            height={50}
            className="h-10 w-auto"
            src={SITECONFIG.logo}
            alt={SITECONFIG.seo.name}
          />
        </div>

        <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500">
          Découvrez votre nouveau chez-vous : confort, communauté et économies
          pour une expérience étudiante inoubliable.
        </p>

        <ul className="flex flex-wrap justify-center gap-6 mt-10 md:gap-8 lg:gap-12">
          <li className="flex items-center justify-center gap-2 text-gray-700 transition hover:text-gray-700/75">
            <Phone className="text-green-500" absoluteStrokeWidth />
            <div className="flex flex-col">
              <a href="tel:+212684499227">+212 68 44 99 227</a>
              <a href="tel:+212684024990">+212 68 40 24 990</a>
            </div>
          </li>

          <li className="flex items-center justify-center gap-2 text-primary transition hover:text-primary">
            <Mail className="text-red-500" absoluteStrokeWidth />

            <div className="flex flex-col text-black">
              <a href="mailto:babaplace9@gmail.com">babaplace9@gmail.com</a>
              <a href="mailto:babaplace@proton.me">babaplace@proton.me</a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
