import React, { useState } from "react";
import styles from "./NFTCard.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import img from "../../img/hero.jpg";
import Image from "next/image";

const NFTCard = () => {
  const NFTFeatures = [1, 2, 3, 4, 5, 6];
  const [like, setLike] = useState(true);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  return (
    <div className={styles.NFTCard}>
      {NFTFeatures.map((item, i) => (
        <div className={styles.NFTCard_box}>
          <div className={styles.NFTCard_box_img}>
            <Image
              src={img}
              alt="NFT Images"
              width={600}
              height={300}
              className={styles.NFTCard_box_img_img}
            />
          </div>
          <div className={styles.NFTCard_box_update_left}>
            <div
              className={styles.NFTCard_box_update_left_like}
              onClick={() => likeNFT()}
            >
              {like ? (
                <AiOutlineHeart />
              ) : (
                <AiFillHeart
                  className={styles.NFTCard_box_update_left_like_icon}
                />
              )}
              {""} 10
            </div>
          </div>
          <div className={styles.NFTCard_box_update_right}>
            <div className={styles.NFTCard_box_update_right_info}>
              <small>Remaining time</small>
              <p>6h : 50m : 10s</p>
            </div>
          </div>
          <div className={styles.NFTCard_box_update_details}>
            <div className={styles.NFTCard_box_update_details_price}>
              <div className={styles.NFTCard_box_update_details_price_box}>
                <h4>Clone #33456</h4>

                <div
                  className={styles.NFTCard_box_update_details_price_box_box}
                >
                  <div
                    className={styles.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>1.00ETH</p>
                  </div>
                  <div
                    className={
                      styles.NFTCard_box_update_details_price_box_stock
                    }
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
