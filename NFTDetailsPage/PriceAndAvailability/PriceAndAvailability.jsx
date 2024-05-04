import React from "react";
import styles from "./PriceAndAvailability.module.css";

const PriceAndAvailability = ({ price, availability }) => {
  return (
    <div className={styles.priceContainer}>
      <h2 className={styles.title}>Price & Availability</h2>
      <p className={styles.price}>Price: {price}</p>
      <p className={styles.availability}>Availability: {availability}</p>
      <div className={styles.actions}>
        <button className={styles.buyButton}>Buy Now</button>
        <button className={styles.cartButton}>Add to Cart</button>
      </div>
      {/* Additional pricing and availability details */}
    </div>
  );
};

export default PriceAndAvailability;
