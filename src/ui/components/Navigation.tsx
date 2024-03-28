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
      {/* <div className="w-full h-10 bg-black">
        <div className="max-w-screen-2xl px-6  mx-auto flex justify-between items-center text-xs text-white h-full">
          <Link
            href={"mailto:babaplace9@gmail.com"}
            className="flex gap-2 items-center"
          >
            <Mail className="text-red-500" absoluteStrokeWidth />
            babaplace9@gmail.com
          </Link>
          <Link href={"tel:"} className="flex gap-2 items-center">
            <Phone className="text-green-500" absoluteStrokeWidth />
            +212 -- -- -- ---
          </Link>
        </div>
      </div> */}

      <div className="bg-slate-600">
        <div className="flex justify-between max-w-screen-2xl px-6  mx-auto py-2">
          <div className="flex items-center gap-10 text-xs text-slate-100">
            <a
              href="mailto:babaplace9@gmail.com"
              className="flex items-center gap-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <span>babaplace9@gmail.com</span>
            </a>
          </div>
          <div className="text-white">
            <a href="" className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
              <span>+212 68 44 12</span>
            </a>
          </div>
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
