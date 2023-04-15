import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { Barlow_Condensed, Barlow } from "next/font/google";
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero name={""} route={""} />
    </main>
  );
}
