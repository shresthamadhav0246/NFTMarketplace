import React, { useState } from "react";
import styles from "./Filter.module.css"; // Assuming CSS module usage

export default function Filter({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("popular");

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className={styles.filterContainer}>
      <button
        className={`${styles.filterButton} ${
          selectedFilter === "popular" ? styles.active : ""
        }`}
        onClick={() => handleFilterChange("popular")}
      >
        Popular
      </button>
      <button
        className={`${styles.filterButton} ${
          selectedFilter === "following" ? styles.active : ""
        }`}
        onClick={() => handleFilterChange("following")}
      >
        Following
      </button>
    </div>
  );
}
