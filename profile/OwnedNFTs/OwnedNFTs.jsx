// components/OwnedNFTs.js
import React from "react";
import styles from "./OwnedNFTs.module.css";
import Image from "next/image";

const OwnedNFTs = ({ nfts }) => {
  console.log(nfts);
  if (!nfts.length) {
    return <div className={styles.empty}>No NFTs owned yet.</div>;
  }

  return (
    <div className={styles.nftsContainer}>
      {nfts.map((nft) => (
        <div key={nft.id} className={styles.nftCard}>
          <Image
            width={100}
            height={100}
            src={nft.image}
            alt={nft.title}
            className={styles.nftImage}
          />
          <div className={styles.nftDetails}>
            <h3 className={styles.nftTitle}>{nft.name}</h3>
            <p className={styles.nftPrice}>{`Price: ${nft.price} ETH`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OwnedNFTs;
