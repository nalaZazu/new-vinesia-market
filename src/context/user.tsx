"use client";
import { createContext, useContext, useState } from "react";
import {
  Connector,
  WagmiConfig,
  configureChains,
  createConfig,
  useAccount,
  useConnect,
  useDisconnect,
} from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";
import { LoginType, MagicCustomConnector } from "./connectors/MagicConnector";

export interface ProvideUser {
  status: string;
  address: `0x${string}` | undefined;
  isConnected: boolean;
  isConnecting: boolean;
  isReconnecting: boolean;
  isDisconnected: boolean;
  isLoading: boolean;
  connectors: Connector<any, any>[];

  currency: string;
  language: string;

  getText: (text: string) => string;
  getPriceText: (price: number) => string;
  getPriceDifference: (release: number, current: number) => string;

  // connectAsync: (args?: Partial<ConnectArgs>) => Promise<ConnectResult<_wagmi_core.PublicClient>>;
  disconnectAsync: () => Promise<any>;
}

export function useProvideUser(): ProvideUser {
  const {
    status,
    address,
    isConnected,
    isConnecting,
    isReconnecting,
    isDisconnected,
  } = useAccount();
  const { connectAsync, connectors, data, isLoading } = useConnect();
  const { disconnectAsync } = useDisconnect();

  const [currency, setCurrency] = useState("EUR");
  const [language, setLanguage] = useState("en");

  function getText(text: string): string {
    return "";
  }

  function getPriceText(price: number): string {
    const priceDec = price / 100;

    return priceDec.toLocaleString("en-US", {
      style: "currency",
      currency: "EUR",
    });
  }

  function getPriceDifference(release: number, current: number) {
    {
      /* +
              {`  ${(
                ((release?.highPrice - release?.releasePrice) /
                  release?.releasePrice) *
                100
              ).toFixed(3)} % ↑`} */
    }
    //   + 66.6%

    const diff = ((current - release) / release) * 100;

    return diff.toFixed(1) + "%";
  }

  return {
    currency,
    language,

    getText,

    getPriceText,
    getPriceDifference,

    status,
    address,
    isConnected,
    isConnecting,
    isReconnecting,
    isDisconnected,
    isLoading,
    connectors,
    // connectAsync,
    disconnectAsync,
  };
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === "development" ? [goerli] : [])],
  [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.NEXT_PUBLIC_API_WALLET_CONNECT,
      },
    }),

    new MagicCustomConnector(
      {
        options: {
          apiKey: process.env.NEXT_PUBLIC_API_MAGIC_LINK, //required
        },
      },
      LoginType.Social,
      "google"
    ),
    new MagicCustomConnector(
      {
        options: {
          apiKey: process.env.NEXT_PUBLIC_API_MAGIC_LINK, //required
        },
      },
      LoginType.Social,
      "twitter"
    ),
    new MagicCustomConnector(
      {
        options: {
          apiKey: process.env.NEXT_PUBLIC_API_MAGIC_LINK, //required
        },
      },
      LoginType.Social,
      "apple"
    ),
    new MagicCustomConnector(
      {
        options: {
          apiKey: process.env.NEXT_PUBLIC_API_MAGIC_LINK, //required
        },
      },
      LoginType.Social,
      "facebook"
    ),

    // new DedicatedWalletConnector({
    //   options: {
    //     apiKey: magicLinkApiKey, //required
    //     oauthOptions : {
    //       providers: ['google', 'twitter', 'apple'],
    //     },
    //     enableSMSLogin: true,
    //     enableEmailLogin: true,
    //     customHeaderText: 'Vinesia Login'
    //     //...Other options
    //   },
    // })
  ],
  publicClient,
  webSocketPublicClient,
});

const userContext = createContext<ProvideUser | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  return (
    <userContext.Provider value={useProvideUser()}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext(): ProvideUser {
  const context = useContext(userContext);
  if (context === null) throw new Error("User provider is not set");
  return context;
}
