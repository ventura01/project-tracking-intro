import Link from "next/link";
import React from "react";
import ActionBtn from "./ActionBtn";
import { Barlow_Condensed, Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export type LinkProps = {
  name: string;
  route: string;
};

export const links: LinkProps[] = [
  { name: "product", route: "#product" },
  { name: "features", route: "#features" },
  { name: "pricing", route: "#pricing" },
];

const Navbar = (props: LinkProps) => {
  return (
    <nav className="z-50 pl-44 pt-16 relative hidden md:block">
      <div className="flex items-center gap-x-8">
        {links.map((link) => (
          <Link href={`${link.route}`} key={link.name}>
            <p
              className={`${barlowCondensed.className} text-veryDarkBlue font-semibold text-sm uppercase hover:text-grayishBlue`}
            >
              {link.name}
            </p>
          </Link>
        ))}
        <div className="bg-grayishBlue h-2 w-2 ml-10 rounded-full"></div>
        <ActionBtn
          text="login"
          className={`${barlowCondensed.className} uppercase text-grayishBlue font-semibold text-sm bg-transparent ml-10 hover:text-red `}
        />
      </div>
    </nav>
  );
};

export default Navbar;
