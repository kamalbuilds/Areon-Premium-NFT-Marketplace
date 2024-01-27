// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { AerochainTestnet} from "@thirdweb-dev/chains";

export const NETWORK = AerochainTestnet;

// 2. The address of the marketplace V3 smart contract.
export const MARKETPLACE_ADDRESS = "0x4720e2926c360250C6930174241fA2EB0fBaBC29";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x3e508632189D6b211F3c9b96B429B7B5d22704DA";

export const RENTNFT_COLLECTION_ADDRESS = "";

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://aeroscan.com/";
