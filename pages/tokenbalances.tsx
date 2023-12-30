// @ts-nocheck
import { ChainId, useAddress, ConnectWallet } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import NftCardContainer from "../components/NftCardContainer";
import styles from "../styles/FetchBalance.module.css";
import Container from "../components/Container/Container";

export default function Profile() {
  // Wallet connection hooks from React SDK
  const address = useAddress();

  // State to store the user's loaded tokens
  const [isLoading, setIsLoading] = useState(true);
  const [tokenData, setTokenData] = useState([]);
  const [chainId, setChainId] = useState(1);

  // Make a request to the get-wallet-data api endpoint (/api/get-wallet-data.js file)
  useEffect(() => {
    if (address) {
      // If there is a connected address, make the request.
      (async () => {
        try {
          setTokenData([]);
          setIsLoading(true);

          const req = await fetch("/api/get-wallet-data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              address: address,
              chainId: chainId,
            }),
          });

          // De-structure tokens out of the response JSON
          const { tokens } = await req.json();

          // Set the tokens in state.
          setTokenData(tokens.filter((t) => t.type === "nft"));
        } catch (error) {
          console.error("Error getting tokens", error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [address, chainId]);

  return (
    <Container maxWidth="lg">
      <>
        <div className={styles.container}>
          {address ? (
            <div className={styles.collectionContainer}>
              <h1>Your Wallet&apos;s NFTs</h1>

              <p>Select a supported chain below:</p>

              <div>
                {/* Dropdown  Menu of Chain IDs */}
                <select
                  onChange={(e) => setChainId(e.target.value)}
                  value={chainId}
                >
                  {Object.entries(ChainId)
                    .filter(([key]) => isNaN(Number(key)))
                    .filter(
                      ([key]) =>
                        key !== "Localhost" &&
                        key !== "Hardhat" &&
                        key !== "Rinkeby"
                    )
                    .map(([key, value], index) => (
                      <option
                        key={index}
                        value={value}
                        onSelect={(e) => setChainId(e.target.value)}
                      >
                        {key}
                      </option>
                    ))}
                </select>
              </div>

              <hr className={styles.divider} />

              {!isLoading ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {tokenData
                    ?.filter((t) => t.type === "nft")
                    ?.filter((t) => t.supports_erc?.includes("erc721"))
                    ?.map((nftCollection, i) => (
                      <NftCardContainer
                        nftCollection={nftCollection}
                        chainId={chainId}
                        key={i}
                      />
                    ))}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          ) : (
            <ConnectWallet colorMode="dark" accentColor="#5204BF" />
          )}
        </div>
      </>
    </Container>
  );
}
