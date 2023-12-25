import { ReactNode, createContext, useContext, useMemo } from "react";

import { configureChains, createConfig, useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

// const { Web3 } = require('web3');


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
                appName: 'wagmi',
            },
        }),
        new WalletConnectConnector({
            chains,
            options: {
                projectId: process.env.NEXT_PUBLIC_API_WALLET_CONNECT,
            },
        }),
    ],
    publicClient,
    webSocketPublicClient,
})

type WalletContextType = {

}


const WalletContext = createContext<WalletContextType>({
});

export const useMagic = () => useContext(WalletContext);

const WalletProvider = ({ children }: { children: ReactNode }) => {
    const wagmiAccount = useAccount()
    const wagmiConnect = useConnect()
    const wagmiDisconnect = useDisconnect()
    const wagmiSign = useSignMessage()

    const value = useMemo(() => {
        return {
        };
    }, []);

    return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export default WalletProvider;
