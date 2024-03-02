"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/ui/modules/aceternityUi/image-slider";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const images = [
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudCUyMGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1555962414-5c1a20592432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1430285561322-7808604715df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0dWRlbnQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
  ];
  return (
    <div>
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 max-md:mx-14 flex flex-col justify-center items-center"
        >
          <motion.h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Qu&apos;elle est votre prochain Chez vous?
          </motion.h1>
          <motion.p className="font-bold text-xs md:text-sm text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Des chambres modernes et confortables à deux pas de votre
            université, <br /> avec tous les équipements nécessaires pour
            simplifier votre vie étudiante.
          </motion.p>
          <div>
            <div className="flex items-center justify-center space-x-2">
              <Link
                href="/biens"
                className="px-2 py-2 max-md:text-xs text-gray-800 text-gray-900 bg-gray-300 border rounded rounded-lg lg:px-8 lg:py-3 hover:bg-gray-100 hover:shadow"
              >
                Voir les biens
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 max-md:text-xs text-white transition duration-300 bg-primary border border-gray-600 rounded-lg lg:px-8 lg:py-3 hover:bg-secondary hover:shadow-xl"
              >
                Nous Contactez
              </Link>
            </div>
          </div>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};

export default Hero;
