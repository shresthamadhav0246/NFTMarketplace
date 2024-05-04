import React, { useState } from "react";
import styles from "../styles/collection.module.css";
import { Collection, Filter, TopBar } from "@/collection";

function CollectionPage({ onFilterChange, onSearch, onSort, onViewChange }) {
  const [filter, setFilter] = useState("popular");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className={styles.collectionPage}>
      <div className={styles.sideBar}>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className={styles.mainContent}>
        <TopBar
          onSearch={onSearch}
          onSort={onSort}
          onViewChange={onViewChange}
        />
        <Collection currentFilter={filter} />
      </div>
    </div>
  );
}

export default CollectionPage;
