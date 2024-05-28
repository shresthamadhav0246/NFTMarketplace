// frontend/utils/api.js

const API_URL = "https://nft-marketplace-backend-inky.vercel.app/api";

// User APIs
export const createUser = async (userData) => {
  const response = await fetch(`${API_URL}/users/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export const getUser = async (walletAddress) => {
  const response = await fetch(`${API_URL}/users/${walletAddress}`);
  return response.json();
};

// NFT APIs
export const createNFT = async (nftData) => {
  const response = await fetch(`${API_URL}/nfts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nftData),
  });
  return response.json();
};

export const getNFT = async (id) => {
  const response = await fetch(`${API_URL}/nfts/${id}`);
  return response.json();
};

// Like APIs
export const likeNFT = async (likeData) => {
  const response = await fetch(`${API_URL}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(likeData),
  });
  return response.json();
};

// Function to get total likes for a specific NFT
export const getTotalLikes = async (tokenId) => {
  try {
    const response = await fetch(`${API_URL}/likes/${tokenId}/total`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch total likes");
    }
    const data = await response.json();
    return data.totalLikes;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const followNFT = async (followerAddress, tokenId) => {
  try {
    console.log("API Call: followNFT", { followerAddress, tokenId });
    const response = await fetch(`${API_URL}/follows/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ followerAddress, tokenId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to follow NFT: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in followNFT:", error);
    throw error;
  }
};

export const unfollowNFT = async (followerAddress, tokenId) => {
  try {
    const response = await fetch(`${API_URL}/follows/unfollow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ followerAddress, tokenId }),
    });
    if (!response.ok) {
      throw new Error("Failed to unfollow NFT");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Function to get followed NFTs for a specific user
export const getFollowedNFTs = async (followerAddress) => {
  try {
    const response = await fetch(
      `${API_URL}/follows/follow/${followerAddress}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch followed NFTs");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Chat APIs
export const createChatMessage = async (tokenId, chatData) => {
  const response = await fetch(`${API_URL}/chats/chat/${tokenId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(chatData),
  });
  return response.json();
};

export const getChatMessages = async (tokenId) => {
  const response = await fetch(`${API_URL}/chats/chat/${tokenId}`);
  return response.json();
};
