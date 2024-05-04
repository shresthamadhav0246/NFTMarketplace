import React, { useState } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
import styles from "./Follower.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";

import img1 from "../../img/collection-img1.jpg";
import img2 from "../../img/collection-img2.jpg";
import img3 from "../../img/collection-img3.jpg";
import img4 from "../../img/collection-img4.jpg";

const Follower = () => {
  const dummyData = {
    popular: [
      {
        id: 1,
        imageUrl: img1,
        title: "Abstract Art #1",
        price: "0.3",
        creatorName: "Alice",
        isFollowing: true,
      },
      {
        id: 2,
        imageUrl: img2,
        title: "Landscape #5",
        price: "0.5",
        creatorName: "Bob",
        isFollowing: false,
      },
      {
        id: 3,
        imageUrl: img1,
        title: "Digital Avatar",
        price: "1.2",
        creatorName: "Carol",
        isFollowing: false,
      },
      {
        id: 4,
        imageUrl: img4,
        title: "Virtual World",
        price: "0.8",
        creatorName: "Dave",
        isFollowing: true,
      },
      {
        id: 5,
        imageUrl: img3,
        title: "Sculpture Series",
        price: "0.45",
        creatorName: "Eve",
        isFollowing: true,
      },
      {
        id: 6,
        imageUrl: img3,
        title: "Mystic Animals",
        price: "1.1",
        creatorName: "Fay",
        isFollowing: false,
      },
    ],
    following: [
      {
        id: 1,
        imageUrl: img1,
        title: "Space Odyssey",
        price: "2.3",
        creatorName: "Gina",
        isFollowing: true,
      },
      {
        id: 2,
        imageUrl: img4,
        title: "Ocean Depths",
        price: "0.9",
        creatorName: "Harry",
        isFollowing: true,
      },
      {
        id: 3,
        imageUrl: img2,
        title: "Modern Abstract",
        price: "1.5",
        creatorName: "Ivy",
        isFollowing: true,
      },
      {
        id: 4,
        imageUrl: img4,
        title: "Digital Graffiti",
        price: "0.7",
        creatorName: "John",
        isFollowing: true,
      },
    ],
    news: [
      {
        id: 1,
        imageUrl: img1,
        title: "Cyberpunk City",
        price: "3.0",
        creatorName: "Kara",
        isFollowing: false,
      },
      {
        id: 2,
        imageUrl: img2,
        title: "Robotics Art",
        price: "2.5",
        creatorName: "Leo",
        isFollowing: false,
      },
      {
        id: 3,
        imageUrl: img4,
        title: "Future Tech",
        price: "4.1",
        creatorName: "Mia",
        isFollowing: false,
      },
      {
        id: 4,
        imageUrl: img1,
        title: "Alien Landscape",
        price: "1.9",
        creatorName: "Nick",
        isFollowing: false,
      },
      {
        id: 5,
        imageUrl: img3,
        title: "Dystopian Visions",
        price: "1.3",
        creatorName: "Olivia",
        isFollowing: false,
      },
    ],
  };

  const [tab, setTab] = useState("popular");
  const popularArray = [1, 2, 3, 4, 5, 6];
  const followingArray = [1, 2, 3, 4];
  const newsArray = [1, 2, 3, 4, 5];

  return (
    <div className={styles.follower}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === "popular" ? styles.active : ""}`}
          onClick={() => setTab("popular")}
        >
          <RiUserFollowFill /> Popular
        </button>
        <button
          className={`${styles.tab} ${
            tab === "following" ? styles.active : ""
          }`}
          onClick={() => setTab("following")}
        >
          <RiUserUnfollowFill /> Following
        </button>
        <button
          className={`${styles.tab} ${tab === "news" ? styles.active : ""}`}
          onClick={() => setTab("news")}
        >
          <RiAwardLine /> News
        </button>
      </div>
      <div className={styles.content}>
        {dummyData[tab].map((item) => (
          <FollowerTabCard key={item.id} nft={item} />
        ))}
      </div>
    </div>
  );
};

export default Follower;
