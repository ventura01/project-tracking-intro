import Image from "next/image";
import React from "react";
import ActionBtn from "./ActionBtn";
import { Barlow_Condensed } from "next/font/google";
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <Image src="/images/logo.svg" width={40} height={40} alt="logo-img" />
      <div>
        <span
          className={`${barlowCondensed.className} py-1 px-3 rounded-full tracking-widest bg-veryDarkBlue text-white font-semibold`}
        >
          NEW
        </span>
        <span className="uppercase tracking-widest text-grayishBlue ml-5">Monograph Dashboard</span>
        <h1 className={`${barlowCondensed.className} text-7xl text-veryDarkBlue font-bold uppercase tracking-tight`}>Powerful insights<br/> into your team</h1>
        <p className="text-darkGrayishBlue">Project planning and time tracking<br/> for agile teams</p>
      </div>
      <div>
        <ActionBtn
          text="Schedule a demo"
          className="font-semibold text-sm rounded-md hover:bg-rose-300 px-4 py-3"
        />
        <span className="text-grayishBlue uppercase tracking-wider">
          to see a live preview
        </span>
      </div>
    </div>
  );
};

export default Hero;
