import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import {
  HeroSection,
  ServiceSection,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  Follower,
  Footer,
} from "../component/index";
import NFTMarketplaceContext from "@/context/NFTMarketplace"; // Ensure correct path
import NFT from "@/component/NFTCardComponent/NFT";

export default function Home() {
  const { fetchNFTs, checkIfWalletConnected } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  useEffect(() => {
    const loadNFTs = async () => {
      try {
        const fetchedNFTs = await fetchNFTs();
        setNfts(fetchedNFTs);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNFTs();
  }, [fetchNFTs]);

  return (
    <>
      <Head>
        <title>My NFT Marketplace</title>
      </Head>
      <HeroSection />
      <ServiceSection />
      <Title
        heading="Filter by Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Follower nfts={nfts} />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />

      <Title
        heading="Browse by category"
        paragraph="It's a category paragraph. user can get products by category"
      />
      <Category />
      <Subscribe />
    </>
  );
}
