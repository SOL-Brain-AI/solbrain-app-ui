"use client";

import { PrivyProvider as Provider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";
import { useRouter } from "next/navigation";

const solanaConnectors = toSolanaWalletConnectors({
  shouldAutoConnect: false,
});

export function PrivyProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Provider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ["wallet"],
        appearance: {
          theme: "dark",
          accentColor: "#8B5CF6",
          showWalletLoginFirst: true,
        },
        externalWallets: {
          solana: { 
            connectors: solanaConnectors
          },
        },
        solanaClusters: [
          {
            name: "mainnet-beta",
            rpcUrl: `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIUS_API_KEY}`,
          },
        ],
      }}
    >
      {children}
    </Provider>
  );
}
