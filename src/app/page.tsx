"use client";
import Image from "next/image";
import Hero from "@/components/hero";
import Select from "@/components/select";
import Produk from "@/components/produk";
import Best from "@/components/best";
import Colection from "@/components/colection";
import Sale from "@/components/sale";
import Furniture_Logo from "@/components/furniturelogo";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Select />
      </Section>
      <Section>
        <Produk />
      </Section>
      <Section>
        <Best />
      </Section>
      <Section>
        <Colection />
      </Section>
      <Section>
        <Sale />
      </Section>
      <Section>
        <Furniture_Logo />
      </Section>
    </>
  );
}
