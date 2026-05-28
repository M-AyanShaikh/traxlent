'use client'

import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { ValueProps } from "@/components/value-props";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ValueProps />
      <Contact />
      <Footer />
      <Leva hidden />
    </>
  );
}
