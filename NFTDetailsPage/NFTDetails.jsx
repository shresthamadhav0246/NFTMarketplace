import React, { useContext } from "react";
import {
  ArtworkDisplay,
  ArtworkInfo,
  ArtistProfile,
  PriceAndAvailability,
  InteractiveFeatures,
  RelatedNFTs,
} from "./index";
import NFTMarketplaceContext from "@/context/NFTMarketplace";

import styles from "./NFTDetails.module.css";

const NFTDetails = ({ nft, artistDetails, buyNFT }) => {
  const artistSocialLinks = ["Facebook", "Twitter, Instragram"];
  const comments = ["It is good product", "I like it"];
  const shareOptions = ["It is good product", "I like it"];
  const { currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className={styles.nftDetailsContainer}>
      <div className={styles.leftColumn}>
        <ArtworkDisplay imageUrl={nft.image} altText={nft.name} />
        <p className={styles.artworkDescription}>{nft.description}</p>
      </div>
      <div className={styles.rightColumn}>
        <ArtworkInfo
          title={nft.name}
          artist={nft.seller}
          edition={nft.edition}
          creationDate={nft.creationDate}
        />
        <ArtistProfile
          name={artistDetails.username || "No Username"}
          email={artistDetails.email || "NO Email"}
          bio={artistDetails.bio || "No Bio"}
          // portfolioLink={nft.artistPortfolioLink}
          // socialLinks={artistSocialLinks}
        />
        <PriceAndAvailability
          nft={nft}
          price={nft.price}
          availability={nft.availability}
          buyNFT={buyNFT}
          currentAccount={currentAccount}
        />
        <InteractiveFeatures
          shareOptions={shareOptions}
          tokenId={nft.itemId}
          walletAddress={currentAccount}
        />
      </div>
      {/* <div className={styles.relatedNFTsContainer}>
        <RelatedNFTs relatedNFTs={nft.relatedNFTs} />
      </div> */}
    </div>
  );
};

export default NFTDetails;
