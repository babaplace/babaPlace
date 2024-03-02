"use client";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { SITECONFIG } from "@/config/site/siteConfig";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../modules/shad-cn/ui/button";

export default function Navigation() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="w-full h-10 bg-black">
        <div className="max-w-screen-2xl px-6  mx-auto flex justify-between items-center text-xs text-white h-full">
          <Link
            href={"mailto:babaplace9@gmail.com"}
            className="flex gap-2 items-center"
          >
            <Mail className="text-red-500" absoluteStrokeWidth />
            babaplace9@gmail.com
          </Link>
          <Link href={"tel:00224684499227"} className="flex gap-2 items-center">
            <Phone className="text-green-500" absoluteStrokeWidth />
            +212 68 44 99 227
          </Link>
        </div>
      </div>
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Roomz logo</span>
            <Image
              width={100}
              height={50}
              className="h-10 w-auto"
              src={SITECONFIG.logo}
              alt={SITECONFIG.seo.name}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary "
          >
            Accueil
          </Link>
          <Link
            href="/biens"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary"
          >
            Découvir
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary"
          >
            Nous Contactez <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed top-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={100}
                height={50}
                className="h-10 w-auto"
                src={SITECONFIG.logo}
                alt={SITECONFIG.seo.name}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col gap-4 mt-2 justify-start">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                    setMobileMenuOpen(false);
                  }}
                  className="bg-white text-black hover:text-white text-start flex justify-start"
                >
                  Accueil
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/biens");
                    setMobileMenuOpen(false);
                  }}
                  className="bg-white text-black hover:text-white text-start flex justify-start"
                >
                  Découvrir
                </Button>
              </div>
              <div className="py-6">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/contact");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-white text-black hover:text-white text-start flex justify-start"
                >
                  Nous Contactez
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
