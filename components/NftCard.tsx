// @ts-nocheck
import React, { useEffect, useState } from "react";
import { MediaRenderer } from "@thirdweb-dev/react";

export default function NftCard({ contractAddress, tokenId, chainId }) {
  const [nftData, setNftData] = useState(null);

  // Make a request to the get-wallet-data api endpoint (/api/get-wallet-data.js file)
  useEffect(() => {
    // If there is a connected address, make the request.
    (async () => {
      try {
        console.log("Attempting to load", tokenId, "from", contractAddress);
        const req = await fetch("/api/fetch-metadata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            contractAddress,
            chainId,
            tokenId,
          }),
        });

        // De-structure tokens out of the response JSON
        const { tokens } = await req.json();

        setNftData(tokens[0]);

        // Set the tokens in state.
      } catch (error) {
        console.error("Error getting tokens", error);
      } finally {
      }
    })();
  }, [chainId, contractAddress, tokenId]);

  if (!nftData || !nftData?.nft_data?.[0]?.external_data?.image) {
    return null;
  }

  return (
    <MediaRenderer
      style={{ width: 128, height: 128, borderRadius: 16, padding: 4 }}
      src={nftData?.nft_data?.[0].external_data?.image}
    />
  );
}
