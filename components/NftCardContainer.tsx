// @ts-nocheck
import React from "react";
import NftCard from "./NftCard";

export default function NftCardContainer({ nftCollection, chainId }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ marginBottom: 8 }}>{nftCollection?.contract_name}</h2>
      <p>
        Balance: <b>{nftCollection?.nft_data?.length}</b>
      </p>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {nftCollection?.nft_data?.map((nft, key) => {
          return (
            <NftCard
              key={key}
              tokenId={nft.token_id}
              contractAddress={nftCollection.contract_address}
              chainId={chainId}
            />
          );
        })}
      </div>
    </div>
  );
}
