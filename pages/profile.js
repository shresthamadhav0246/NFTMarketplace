// pages/ProfilePage.js
import React, { useState, useEffect } from "react";
import UserProfile from "../profile/UserProfile/UserProfile";
import OwnedNFTs from "../profile/OwnedNFTs/OwnedNFTs";
// import { getUserData, getOwnedNFTs } from "../utils/api";
import user from "../img/user-1.png";
import img from "../img/collection-img3.jpg";
import { ProfileBar } from "@/profile";

function ProfilePage() {
  //   const [userData, setUserData] = useState({});
  //   const [ownedNFTs, setOwnedNFTs] = useState([]);

  //   useEffect(() => {
  //     getUserData().then((data) => setUserData(data));
  //     getOwnedNFTs().then((data) => setOwnedNFTs(data));
  //   }, []);

  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    profileImage: user,
    isVerified: true,
    bio: "Digital Artist & NFT Enthusiast",
    twitter: "https://twitter.com/janedoe",
    facebook: "https://facebook.com/janedoe",
    instagram: "https://instagram.com/janedoe",
    linkedin: "https://linkedin.com/in/janedoe",
  };

  const ownedNFTs = [
    {
      id: 1,
      title: "Abstract Art #202",
      price: "0.8",
      image: img,
    },
    {
      id: 2,
      title: "Digital Landscape #119",
      price: "1.2",
      image: img,
    },
    {
      id: 3,
      title: "Virtual Reality Scene #12",
      price: "0.5",
      image: img,
    },
    {
      id: 4,
      title: "Cyberpunk Cityscape #401",
      price: "2.5",
      image: img,
    },
  ];

  const createdNFTs = [
    {
      id: 1,
      title: "NFT Art #1",
      price: "0.5",
      image: img,
      creationDate: "2022-01-01",
    },
    // more NFTs
  ];

  const [likedNFTs, setNfts] = useState([
    {
      id: 1,
      title: "NFT Art #1",
      price: "0.5",
      likes: 20,
      isLiked: true,
      image: img,
    },
  ]);
  const handleToggleLike = (id) => {
    setNfts(
      likedNFTs.map((nft) => {
        if (nft.id === id) {
          return {
            ...nft,
            isLiked: !nft.isLiked,
            likes: nft.isLiked ? nft.likes - 1 : nft.likes + 1,
          };
        }
        return nft;
      })
    );
  };

  const [followingNFTs, setFollowingNFTs] = useState([
    { id: 1, title: "NFT Art #1", price: "0.5", image: img },
    // more NFTs
  ]);

  const handleUnfollow = (id) => {
    setFollowingNFTs(nfts.filter((nft) => nft.id !== id));
  };

  return (
    <div className="profile-page">
      <UserProfile user={userData} />
      <ProfileBar
        ownedNFTs={ownedNFTs}
        createdNFTs={createdNFTs}
        likedNFTs={likedNFTs}
        onToggleLike={handleToggleLike}
        followingNFTs={followingNFTs}
        onUnfollow={handleUnfollow}
      />
    </div>
  );
}

export default ProfilePage;
