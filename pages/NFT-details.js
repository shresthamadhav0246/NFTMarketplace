import React from "react";
import styles from "../styles/NFTDetails.module.css";
import NFTDetailsComponent from "@/NFTDetailsPage/NFTDetails";
import img from "../img/collection-img3.jpg";
const NFTDetails = () => {
  const nftData = {
    imageUrl: img,
    title: "Unique Digital Art",
    artist: "Artist Name",
    description: "Detailed description of the NFT artwork...",
    edition: "1 of 10",
    creationDate: "2021-09-01",
    artistName: "Artist Name",
    artistBio: "Brief biography of the artist...",
    artistPortfolioLink: "https://artistportfolio.com",
    artistSocialLinks: [
      {
        twitter: "https://twitter.com/artist",
        instagram: "https://instagram.com/artist",
      },
    ],
    price: "3 ETH",
    availability: "Available",
    comments: [
      { username: "user1", comment: "This is amazing!" },
      { username: "User 2", comment: "Great product" },
    ],
    shareOptions: [{ twitter: true, facebook: true }],
    relatedNFTs: [
      {
        id: 1,
        title: "Related Art #1",
        imageUrl: img,
      },
      {
        id: 2,
        title: "Related Art #2",
        imageUrl: img,
      },
    ],
  };

  return (
    <div>
      <NFTDetailsComponent nft={nftData} />
    </div>
  );
};

export default NFTDetails;
