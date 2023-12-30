import React, { useState } from "react";
import { useAddress, useContract, useMintNFT } from "@thirdweb-dev/react";
import Container from "../components/Container/Container";
import { Box } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../util/toastConfig";

export default function Component() {
  const { contract } = useContract("0x107E64D41044eAf1bBC181c47ddA0Fb60F577071");
  const { mutate: mintNft, isLoading, error } = useMintNFT(contract);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [gameTitle, setGameTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [rarity, setRarity] = useState("");
  const [level, setLevel] = useState("");
  const [experiencePoints, setExperiencePoints] = useState("");
  

  const address = useAddress();

  if (error) {
    console.error("failed to mint NFT", error);
  }

  const handleMint = () => {
    const metadata = {
      name,
      description,
      image,
      attributes: [
        { trait_type: "Game Title", value: gameTitle },
        { trait_type: "Genre", value: genre },
        { trait_type: "Platform", value: platform },
        { trait_type: "Rarity", value: rarity },
        { trait_type: "Level", value: level },
        { trait_type: "Experience Points", value: experiencePoints },
      ],
    };

    mintNft({
      metadata,
      // @ts-ignore
      to: address,
    });

    toast(`NFT Minted Successfully`, {
      icon: "✅",
      style: toastStyle,
      position: "bottom-center",
    });

  };

  return (
    <Container maxWidth="lg">
      <Toaster position="bottom-center" reverseOrder={false} />
      <h1>Tokenize your Gaming Asset as an NFT</h1>
      <form className="space-y-4 my-4">
        <div className="mb-4">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Image URL:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Game Title:
            <input
              type="text"
              value={gameTitle}
              onChange={(e) => setGameTitle(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Genre:
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Platform:
            <input
              type="text"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Rarity:
            <input
              type="text"
              value={rarity}
              onChange={(e) => setRarity(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Level:
            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Experience Points:
            <input
              type="text"
              value={experiencePoints}
              onChange={(e) => setExperiencePoints(e.target.value)}
              className="w-full border border-gray-400 rounded px-2 py-1"
            />
          </label>
        </div>

      </form>
      <div className="flex justify-center">
        <button disabled={isLoading} onClick={handleMint} className="text-center border-4 border-sky-500 p-2">
          Mint!
        </button>
      </div>
    </Container>
  );
}
