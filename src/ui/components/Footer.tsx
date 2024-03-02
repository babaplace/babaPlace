import { SITECONFIG } from "@/config/site/siteConfig";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-phone-call"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              <path d="M14.05 2a9 9 0 0 1 8 7.94" />
              <path d="M14.05 6A5 5 0 0 1 18 10" />
            </svg>
            <div className="flex flex-col">
              <a href="tel:+212684499227">+212 68 44 99 227</a>
              <a href="tel:+212684024990">+212 68 40 24 990</a>
            </div>
          </li>

          <li className="flex items-center justify-center gap-2 text-primary transition hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
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
