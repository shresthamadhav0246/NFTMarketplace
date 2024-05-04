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
  Collection,
  Follower,
  AudioPlayer,
} from "../component/index";
import user from "../img/user-1.png";
import bg from "../img/collection-img2.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const audioNFTs = [
  //   {
  //     id: 1,
  //     audioSrc: "/audio/track1.mp3",
  //     backgroundImage: bg,
  //     title: "Dreamy Vibes",
  //     artist: "Elena",
  //     artistImage: user,
  //     price: "0.3",
  //   },
  //   {
  //     id: 2,
  //     audioSrc: "/audio/track2.mp3",
  //     backgroundImage: bg,
  //     title: "Synthwave Nights",
  //     artist: "Max",
  //     artistImage: user,
  //     price: "0.5",
  //   },
  //   {
  //     id: 3,
  //     audioSrc: bg,
  //     backgroundImage: bg,
  //     title: "Retro Chill",
  //     artist: "Lily",
  //     artistImage: user,
  //     price: "0.25",
  //   },
  //   {
  //     id: 4,
  //     audioSrc: "/audio/track4.mp3",
  //     backgroundImage: bg,
  //     title: "Lo-fi Beats",
  //     artist: "Alex",
  //     artistImage: user,
  //     price: "0.4",
  //   },
  // ];

  return (
    <>
      <HeroSection />
      <ServiceSection />

      <Title
        heading="Filter by Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      {/* <div>
        {audioNFTs.map((nft) => (
          <AudioPlayer
            key={nft.id}
            audioSrc={nft.audioSrc}
            backgroundImage={nft.backgroundImage}
            title={nft.title}
            artist={nft.artist}
            artistImage={nft.artistImage}
            price={`${nft.price} ETH`}
          />
        ))}
      </div> */}

      <Follower />
      <Collection />
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
    </>
  );
}
