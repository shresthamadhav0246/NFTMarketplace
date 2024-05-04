import React from "react";
import {
  ArtworkDisplay,
  ArtworkInfo,
  ArtistProfile,
  PriceAndAvailability,
  InteractiveFeatures,
  RelatedNFTs,
} from "./index";

import styles from "./NFTDetails.module.css";

const NFTDetails = ({ nft }) => {
  return (
    <div className={styles.nftDetailsContainer}>
      <div className={styles.leftColumn}>
        <ArtworkDisplay imageUrl={nft.imageUrl} altText={nft.title} />
        <p className={styles.artworkDescription}>{nft.description}</p>
      </div>
      <div className={styles.rightColumn}>
        <ArtworkInfo
          title={nft.title}
          artist={nft.artist}
          edition={nft.edition}
          creationDate={nft.creationDate}
        />
        <ArtistProfile
          name={nft.artistName}
          bio={nft.artistBio}
          portfolioLink={nft.artistPortfolioLink}
          socialLinks={nft.artistSocialLinks}
        />
        <PriceAndAvailability
          price={nft.price}
          availability={nft.availability}
        />
        <InteractiveFeatures
          comments={nft.comments}
          shareOptions={nft.shareOptions}
        />
      </div>
      <div className={styles.relatedNFTsContainer}>
        <RelatedNFTs relatedNFTs={nft.relatedNFTs} />
      </div>
    </div>
  );
};

export default NFTDetails;
