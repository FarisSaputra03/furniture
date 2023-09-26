import Image from 'next/image'
import Hero from '@/components/hero'
import Select from '@/components/select'
import Produk from '@/components/produk'
export default function Home() {
  return (
   <>
    <Hero />
    <Select/>
    <Produk/>
   </>
  )
}
