import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  NavBar,
  Footer,
  HeroSection,
  ServiceSection,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
} from "../component/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by category"
        paragraph="It's a category paragraph. user can get products by category"
      />
      <Category />
      <Subscribe />
      <Footer />
    </>
  );
}
