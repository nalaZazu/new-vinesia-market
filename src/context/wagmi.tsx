import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { goerli, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const walletConnectProjectId = "b339ed4d7a45e8a5c350e565f9ac1c51";
const magicLinkApiKey = "pk_live_36148059370BB25E";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === "development" ? [goerli] : [])],
  [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  connectors: [
    // new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     projectId: walletConnectProjectId,
    //   },
    // }),
  ],
  publicClient,
  webSocketPublicClient,
});

export function WagmiProvider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
