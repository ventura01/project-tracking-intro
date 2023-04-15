import React from 'react'
import { Barlow_Condensed,Barlow } from "next/font/google";
import Link from 'next/link';
import ActionBtn from './ActionBtn';

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
  const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["400", "700"],
  });

export type DropdownProps = {
  name: string;
  route: string;
  
};

export const links: DropdownProps[] = [
  { name: "product", route: "#product" },
  { name: "features", route: "#features" },
  { name: "pricing", route: "#pricing" },
];

type Props = {}

const DropDownMenu = (props: DropdownProps) => {
  return (
    <nav className="z-50 pt-16 absolute bg-white w-3/4 shadow-xl right-10 top-20 justify-center flex md:hidden">
      <div className="flex flex-col text-center gap-y-4">
        {links.map((link) => (
          <Link href={`${link.route}`} key={link.name}>
            <p
              className={`${barlowCondensed.className} text-veryDarkBlue font-semibold uppercase`}
            >
              {link.name}
            </p>
          </Link>
        ))}
        <hr />
        <ActionBtn
          text="login"
          className={`${barlowCondensed.className} uppercase text-grayishBlue font-semibold self-center text-center bg-transparent hover:text-red mb-10`}
        />
      </div>
    </nav>
  )
}

export default DropDownMenu