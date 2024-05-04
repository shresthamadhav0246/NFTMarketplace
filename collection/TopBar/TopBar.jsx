import React from "react";
import { IoMdGrid, IoMdList, IoIosApps } from "react-icons/io";
import styles from "./TopBar.module.css"; // Import the CSS module

export default function TopBar({ onSearch, onSort, onViewChange }) {
  return (
    <div className={styles.topBar}>
      <input
        type="text"
        placeholder="Search NFTs..."
        onChange={(e) => onSearch(e.target.value)}
        className={styles.input}
      />
      <select
        onChange={(e) => onSort(e.target.value)}
        className={styles.select}
      >
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>
      <div className={styles.viewOptions}>
        <button onClick={() => onViewChange("grid")}>
          <IoMdGrid size="1.5em" />
        </button>
        <button onClick={() => onViewChange("list")}>
          <IoMdList size="1.5em" />
        </button>
        <button onClick={() => onViewChange("small")}>
          <IoIosApps size="1.5em" />
        </button>
      </div>
    </div>
  );
}
