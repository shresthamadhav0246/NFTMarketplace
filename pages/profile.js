// pages/ProfilePage.js
import React, { useState, useEffect, useContext } from "react";
import UserProfile from "../profile/UserProfile/UserProfile";
import OwnedNFTs from "../profile/OwnedNFTs/OwnedNFTs";
// import { getUserData, getOwnedNFTs } from "../utils/api";
import user from "../img/user-1.png";
import img from "../img/collection-img3.jpg";
import { ProfileBar } from "@/profile";
import { useRouter } from "next/router";
import NFTMarketplaceContext from "@/context/NFTMarketplace";
import { getUser } from "@/utils/api";
import AddProfile from "@/profile/AddProfile/AddProfile";

function ProfilePage() {
  const { currentAccount, fetchMyNFTs, fetchMyNFT, fetchItemsListed } =
    useContext(NFTMarketplaceContext);
  const [ownedNFTs, setOwnedNFTs] = useState([]);
  const [createdNFTs, setCreatedNFTs] = useState([]);

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchMyNFTs("listed").then((items) => {
      console.log("Owned NFTs fetched:", items);
      setOwnedNFTs(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTs("created").then((items) => {
      console.log("Created NFTs fetched:", items);
      setCreatedNFTs(items);
    });
  }, []);

  console.log("Owned NFTs" + ownedNFTs);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUser(currentAccount);

        setUser(response);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (currentAccount) {
      fetchUserProfile();
    }
  }, [currentAccount]);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  // const ownedNFTs = [
  //   {
  //     id: 1,
  //     title: "Abstract Art #202",
  //     price: "0.8",
  //     image: img,
  //   },
  //   {
  //     id: 2,
  //     title: "Digital Landscape #119",
  //     price: "1.2",
  //     image: img,
  //   },
  //   {
  //     id: 3,
  //     title: "Virtual Reality Scene #12",
  //     price: "0.5",
  //     image: img,
  //   },
  //   {
  //     id: 4,
  //     title: "Cyberpunk Cityscape #401",
  //     price: "2.5",
  //     image: img,
  //   },
  // ];

  // const createdNFTs = [
  //   {
  //     id: 1,
  //     title: "NFT Art #1",
  //     price: "0.5",
  //     image: img,
  //     creationDate: "2022-01-01",
  //   },
  //   // more NFTs
  // ];

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

  // console.log(user);
  // const isProfileComplete =
  //   user.username && user.email && user.bio && user.profileImage;

  return (
    <div className="profile-page">
      <UserProfile user={user} />

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
