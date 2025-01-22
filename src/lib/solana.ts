import { Connection, PublicKey } from "@solana/web3.js";

// Initialize connection with Helius RPC (using env variable)
const connection = new Connection(
  `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIUS_API_KEY}`
);

interface TokenPrice {
  price: number | null;
  priceChange24h: number | null;
  volume24h: number | null;
  marketCap: number | null;
}

async function getTokenPrice(tokenMint: string): Promise<TokenPrice | null> {
  try {
    // Fetch price data from CoinGecko
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/token_price/solana?contract_addresses=${tokenMint}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
      {
        headers: {
          "x-cg-demo-api-key": process.env.CG_DEMO_API_KEY!,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch price: ${response.statusText}`);
    }

    const data = await response.json();
    console.log({ data });
    const tokenData = data[tokenMint];

    if (!tokenData) {
      return null;
    }

    return {
      price: tokenData.usd,
      priceChange24h: tokenData.usd_24h_change,
      volume24h: tokenData.usd_24h_vol,
      marketCap: tokenData.usd_market_cap,
    };
  } catch (error) {
    console.error("Error fetching token price:", error);
    return null;
  }
}

interface TokenInfo {
  address: string;
  decimals: number;
  supply: number;
  authority: string | null;
  freezeAuthority: string | null;
  price: number | null;
  priceChange24h: number | null;
  volume24h: number | null;
  marketCap: number | null;
}

export async function getTokenInfo(
  tokenMint: string
): Promise<TokenInfo | string> {
  try {
    const mint = new PublicKey(tokenMint);
    const accountInfo = await connection.getParsedAccountInfo(mint);

    if (!accountInfo.value) {
      return "Token not found";
    }

    const data = accountInfo.value.data;
    if (!data || typeof data !== "object" || !("parsed" in data)) {
      return "Not a valid token mint";
    }

    const parsedData = data.parsed;
    if (parsedData.type !== "mint") {
      return "Not a token mint account";
    }

    const info = parsedData.info;
    const priceInfo = await getTokenPrice(tokenMint);

    return {
      address: tokenMint,
      decimals: info.decimals,
      supply: Number(info.supply) / Math.pow(10, info.decimals),
      authority: info.mintAuthority ?? null,
      freezeAuthority: info.freezeAuthority ?? null,
      // Price and market data
      price: priceInfo?.price ?? null,
      priceChange24h: priceInfo?.priceChange24h ?? null,
      volume24h: priceInfo?.volume24h ?? null,
      marketCap: priceInfo?.marketCap ?? null,
    };
  } catch (error) {
    console.error("Error fetching token info:", error);
    return "Error fetching token info";
  }
}
