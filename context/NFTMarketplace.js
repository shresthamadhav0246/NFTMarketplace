import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import axios from "axios";
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constant";
import Router from "next/router";

export const NFTMarketplaceContext = createContext();

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.error("Error during connecting wallet:", error);
  }
};

export const NFTMarketplaceProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [openError, setOpenError] = useState(false);
  const [error, setError] = useState("");

  const checkContract = async () => {
    try {
      const contract = await connectingWithSmartContract();
      if (contract) {
        console.log("Contract:", contract);
      } else {
        console.error("No contract instance found");
      }
    } catch (error) {
      console.error("Error checking contract:", error);
    }
  };

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        setOpenError(true);
        setError("Install Metamask");
        return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Account Found");
      }
    } catch (error) {
      console.error(
        "Something went wrong while checking wallet connection:",
        error
      );
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const disconnectWallet = async () => {
    try {
      setCurrentAccount(null);

      console.log("Wallet disconnected");
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        setOpenError(true);
        setError("Install Metamask");
        return;
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error("Something went wrong while connecting to wallet:", error);
    }
  };

  const uploadToPinata = async (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append("file", file);

    const metadata = JSON.stringify({
      name: file.name,
    });
    data.append("pinataMetadata", metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    data.append("pinataOptions", options);

    try {
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
        },
      });
      return res.data.IpfsHash; // Return the CID of the image file
    } catch (error) {
      console.error("Error uploading to Pinata:", error);
      throw error;
    }
  };

  const uploadMetadataToPinata = async (metadata) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    try {
      const res = await axios.post(url, metadata, {
        headers: {
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
        },
      });
      return res.data.IpfsHash; // Return the CID of the metadata JSON
    } catch (error) {
      console.error("Error uploading metadata to Pinata:", error);
      throw error;
    }
  };

  const createNFT = async (formInput, file, router) => {
    try {
      const { name, description, price, category, tags, editionSize } =
        formInput;

      if (!name || !description || !price || !file) {
        return console.log("Data is missing");
      }

      // Step 1: Upload image to Pinata
      const imageCID = await uploadToPinata(file);
      const imageUrl = `https://gateway.pinata.cloud/ipfs/${imageCID}`;

      // Step 2: Create metadata JSON
      const metadata = {
        name,
        description,
        category,
        tags,
        editionSize,
        image: imageUrl,
      };

      // Step 3: Upload metadata JSON to Pinata
      const metadataCID = await uploadMetadataToPinata(metadata);
      const metadataUrl = `https://gateway.pinata.cloud/ipfs/${metadataCID}`;

      // Step 4: Create sale with the metadata URL
      await createSale(metadataUrl, price);
      router.push("/");
    } catch (error) {
      console.error("Error creating NFT:", error);
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartContract();
      console.log(contract);
      const listingPrice = await contract.getListingPrice();
      const transaction = !isReselling
        ? await contract.mintToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellMarketItem(url, price, {
            value: listingPrice,
          });

      await transaction.wait();
    } catch (error) {
      console.error("Error while creating sale:", error);
    }
  };

  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/mtGVxU4A3WDQYt5Xqd-6aM7kfqN2lzK5"
      );
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItems();

      const items = await Promise.all(
        data.map(async (i) => {
          const tokenUri = await contract.tokenURI(i.tokenId);
          const gatewayUrl = tokenUri.replace(
            "https://black-impressed-mosquito-22.mypinata.cloud",
            "https://ipfs.io"
          );
          try {
            const meta = await axios.get(gatewayUrl);

            let price = ethers.utils.formatUnits(i.price.toString(), "ether");
            let item = {
              price,
              itemId: i.tokenId.toNumber(),
              seller: i.seller,
              owner: i.owner,
              image: meta.data.image,
              name: meta.data.name,
              description: meta.data.description,
            };
            return item;
          } catch (error) {
            console.error(`Error fetching metadata from ${tokenUri}`, error);
          }
        })
      );

      return items;
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  // Fetching my NFTs or listed NFTs
  // There are two types of NFTs: user-created and listed for sale (related to a single user)
  const fetchMyNFTs = async (type) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-sepolia.g.alchemy.com/v2/mtGVxU4A3WDQYt5Xqd-6aM7kfqN2lzK5"
      );
      const contract = fetchContract(provider);
      let data;

      if (type === "created") {
        // Fetch NFTs created by the user
        data = await contract.fetchItemsListed();
      } else if (type === "listed") {
        // Fetch NFTs listed by the user
        data = await contract.fetchMyNFTs();
      } else {
        throw new Error("Invalid type specified. Use 'created' or 'listed'.");
      }

      const items = await Promise.all(
        data.map(async (i) => {
          const tokenUri = await contract.tokenURI(i.tokenId);
          const gatewayUrl = tokenUri.replace(
            "https://black-impressed-mosquito-22.mypinata.cloud",
            "https://ipfs.io"
          );
          try {
            const meta = await axios.get(gatewayUrl);

            let price = ethers.utils.formatUnits(i.price.toString(), "ether");
            let item = {
              price,
              itemId: i.tokenId.toNumber(),
              seller: i.seller,
              owner: i.owner,
              image: meta.data.image,
              name: meta.data.name,
              description: meta.data.description,
            };
            return item;
          } catch (error) {
            console.error(`Error fetching metadata from ${tokenUri}`, error);
          }
        })
      );

      return items;
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  // BUY NFTs FUNCTION
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

      // Execute the purchase
      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      console.log("Transaction successful", transaction);
    } catch (error) {
      console.error("Error buying NFT:", error);
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        connectWallet,
        checkContract,
        createNFT,
        fetchNFTs,
        fetchMyNFTs,
        buyNFT,
        currentAccount,
        checkIfWalletConnected,
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};

export default NFTMarketplaceContext;
