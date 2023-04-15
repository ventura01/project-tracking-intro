"use client";

import Image from "next/image";
import React, { useState } from "react";
import ActionBtn from "./ActionBtn";
import { Barlow_Condensed,Barlow } from "next/font/google";
import Navbar from "./Navbar";
import CloseMenuBtn from "./CloseMenuBtn";
import OpenMenuBtn from "./OpenMenuBtn";
import DropDownMenu from "./DropDownMenu";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
  const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
export type HeroProps = { name: string; route: string };

const Hero = ({ name, route }: HeroProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 md:h-screen">
      <div className="pl-6 md:hidden">
        <div className="right-0 -z-10 h-2/3 bg-lightGrayishBlue absolute rounded-bl-[90px] md:hidden w-1/2"></div>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden absolute right-6 top-12"
        >
          {openMenu ? <CloseMenuBtn /> : <OpenMenuBtn />}
        </button>
        {openMenu ? <DropDownMenu name="" route=""/> : null}
        <Image
          src="/images/logo.svg"
          width={24}
          height={24}
          alt="logo-img"
          className="mt-12 mb-12 md:hidden"
        />
      </div>
      <div className="px-6 md:pl-40">
        <Image
          src="/images/logo.svg"
          width={36}
          height={36}
          alt="logo-img"
          className="hidden md:flex md:mt-16 md:mb-40"
        />
        <div>
          <span
            className={`${barlowCondensed.className} py-1 px-3 rounded-full tracking-widest bg-veryDarkBlue text-white font-semibold`}
          >
            NEW
          </span>
          <span className="uppercase tracking-widest text-grayishBlue ml-3">
            Monograph Dashboard
          </span>
          <h1
            className={`${barlowCondensed.className} hidden md:flex text-7xl my-6 text-veryDarkBlue font-bold uppercase tracking-tight`}
          >
            Powerful insights
            <br /> into your team
          </h1>
          <h1
            className={`${barlowCondensed.className} md:hidden text-4xl my-6 text-veryDarkBlue font-bold uppercase tracking-tight`}
          >
            Powerful insights
            <br /> into your team
          </h1>
          <p className="text-darkGrayishBlue mb-10">
            Project planning and time tracking
            <br /> for agile teams
          </p>
        </div>
        <div>
          <ActionBtn
            text="Schedule a demo"
            className="font-semibold text-sm rounded-md text-white hover:bg-rose-300 px-4 py-3"
          />
          <span className="text-grayishBlue text-xs md:text-sm ml-5 uppercase tracking-wider">
            to see a live preview
          </span>
        </div>
      </div>
      <div className="relative mb-20 md:mb-0 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 overflow-hidden">
        <div className="w-full h-2/5 bg-lightGrayishBlue absolute rounded-bl-[90px] hidden md:flex"></div>
        <Navbar name={name} route={route} />
        <Image
          src="/images/illustration-devices.svg"
          width={900}
          height={900}
          alt="hero-img"
          className="object-cover relative left-0 w-[400px] h-[300px] md:w-[1100px] md:h-[500px] md:left-44  object-left md:absolute md:top-56"
        />
      </div>
    </div>
  );
};

export default Hero;
