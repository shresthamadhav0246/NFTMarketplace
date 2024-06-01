import axios from "axios";

const API_URL =
  "https://backend-jgwh3x2q9-madhab-shresthas-projects.vercel.app/api";

// User APIs
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/user`, userData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUser = async (walletAddress) => {
  try {
    const response = await axios.get(`${API_URL}/users/${walletAddress}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// NFT APIs
export const createNFT = async (nftData) => {
  try {
    const response = await axios.post(`${API_URL}/nfts`, nftData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getNFT = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/nfts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Like APIs
export const likeNFT = async (likeData) => {
  try {
    const response = await axios.post(`${API_URL}/likes`, likeData);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Function to get total likes for a specific NFT
export const getTotalLikes = async (tokenId) => {
  try {
    const response = await axios.get(`${API_URL}/likes/${tokenId}/total`);
    return response.data.totalLikes;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const followNFT = async (followerAddress, tokenId) => {
  try {
    const response = await axios.post(`${API_URL}/follows/follow`, {
      followerAddress,
      tokenId,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const unfollowNFT = async (followerAddress, tokenId) => {
  try {
    const response = await axios.post(`${API_URL}/follows/unfollow`, {
      followerAddress,
      tokenId,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Function to get followed NFTs for a specific user
export const getFollowedNFTs = async (followerAddress) => {
  try {
    const response = await axios.get(
      `${API_URL}/follows/follow/${followerAddress}`
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Chat APIs
export const createChatMessage = async (tokenId, chatData) => {
  try {
    const response = await axios.post(
      `${API_URL}/chats/chat/${tokenId}`,
      chatData
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getChatMessages = async (tokenId) => {
  try {
    const response = await axios.get(`${API_URL}/chats/chat/${tokenId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
