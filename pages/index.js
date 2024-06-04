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
  Loader,
} from "../component/index";

import NFTMarketplaceContext from "@/context/NFTMarketplace"; // Ensure correct path

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

  const handleFollow = () => {
    console.log("Follow button is clicked.");
  };

  return (
    <>
      <Head>
        <title>My NFT Marketplace</title>
      </Head>
      <HeroSection />
      <ServiceSection />

      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />

      {nfts.length == 0 ? <Loader /> : <NFTCard nfts={nfts} />}

      <Title
        heading="Filter by Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Follower nfts={nfts} />
      <Collection />

      <Title
        heading="Browse by category"
        paragraph="It's a category paragraph. user can get products by category"
      />
      <Category />
      <Subscribe />

      {/* <div>
        <h2>Owned NFTs</h2>
        {ownedNFTs.map((nft) => (
          <div key={nft.itemId}>
            <img src={nft.image} alt={nft.name} />
            <p>{nft.name}</p>
            <p>{nft.description}</p>
            <p>Price: {nft.price} ETH</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Created NFTs</h2>
        {createdNFTs.map((nft) => (
          <div key={nft.itemId}>
            <img src={nft.image} alt={nft.name} />
            <p>{nft.name}</p>
            <p>{nft.description}</p>
            <p>Price: {nft.price} ETH</p>
          </div>
        ))}
      </div> */}
    </>
  );
}
