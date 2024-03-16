import React from "react";
import Image from "next/image";

import Sidebar from "./step/sidebar/Sidebar";
import FormLayout from "./step/form/FormLayout";
import SidebarMobile from "./step/sidebar/SidebarMobile";
import FormLayoutMobile from "./step/form/FormLayoutMobile";
import NavigationMobile from "./step/form/NavigationMobile";
import bg from "@/assets/images/bg-sidebar-mobile.svg";

const AddPropertyPage = () => {
  return (
    <main className="relative flex flex-col justify-center items-center ">
      <div className="w-full  relative">
        <Image
          src={bg}
          width={100}
          height={100}
          alt="background aside mobile"
          className=" w-full md:hidden "
        />
        <div>
          <SidebarMobile />
        </div>
      </div>
      <section className="hidden md:flex bg-neutro-white min-h-[80vh] lg:w-3/5 rounded-lg drop-shadow-soft p-4 my-8">
        <Sidebar />
        <FormLayout />
      </section>
      <section className="flex flex-col items-center mx-4  md:hidden rounded-lg mt-5 w-full">
        <FormLayoutMobile />
      </section>
      <NavigationMobile />
    </main>
  );
};

export default AddPropertyPage;
