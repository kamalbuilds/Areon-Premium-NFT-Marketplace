import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import { AreonNetworkTestnet } from "@thirdweb-dev/chains";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      // activeChain={{
      //   // === Required information for connecting to the network === \\
      //   chainId: 462, // Chain ID of the network
      //   // Array of RPC URLs to use
      //   rpc: ["https://testnet-rpc5.areon.network"],

      //   // === Information for adding the network to your wallet (how it will appear for first time users) === \\
      //   // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
      //   nativeCurrency: {
      //     decimals: 18,
      //     name: "TAREA",
      //     symbol: "TAREA",
      //   },
      //   shortName: "areatestnet", // Display value shown in the wallet UI
      //   slug: "areatestnet", // Display value shown in the wallet UI
      //   testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
      //   chain: "AREAtestnet", // Name of the network
      //   name: "Area Testnet", // Name of the network
      // }}
      activeChain={AreonNetworkTestnet}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
