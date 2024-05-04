import React from "react";
import Image from "next/image";
import styles from "./FollowerTabCard.module.css"; // Ensure you have this CSS file

const FollowerTabCard = ({ nft }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={nft.imageUrl}
          alt={nft.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.info}>
        <h4>{nft.title}</h4>
        <p>{nft.price} ETH</p>
        <div className={styles.meta}>
          <span>Creator: {nft.creatorName}</span>
          {nft.isFollowing ? (
            <span className={styles.following}>Following</span>
          ) : (
            <span className={styles.follow}>Follow</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
