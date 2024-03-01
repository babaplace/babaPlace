import { ContactForm } from "@/ui/components/FormContact";
import { Button } from "@/ui/modules/shad-cn/ui/button";
import React from "react";
import FormContactPage from "./FormContactPage";

const ContactPage = () => {
  return (
    <div>
      <section className="p-8 text-center bg-contact lg:p-20">
        <h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-500 py-4">
          Nous Contactez pour plus d&apos;informations
        </h1>
      </section>

      <section className="px-4 py-4 bg-gray-100 lg:px-20 lg:py-20">
        <div className="flex items-center justify-center bg-gray-100">
          <div className="w-full px-6 py-16 bg-white rounded-lg shadow-2xl lg:w-2/5">
            <h2 className="mb-4 text-xl antialiased font-semibold text-center text-gray-800">
              À la recherche d&apos;un appartement dans un endroit précis ?
              <br />
              Contactez-nous !
            </h2>

            <FormContactPage />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
