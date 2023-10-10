import Image from "next/image";
import Hero from "@/components/hero";
import Select from "@/components/select";
import Produk from "@/components/produk";
import Best from "@/components/best";
import Colection from "@/components/colection";
import Sale from "@/components/sale";
import Furniture_Logo from "@/components/furniturelogo";
export default function Home() {
  return (
    <>
      <Hero />
      <Select />
      <Produk />
      <Best />
      <Colection />
      <Sale />
      <Furniture_Logo />
    </>
  );
}
