export async function getSolanaPrice() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch Solana price: ${response.statusText}`);
    }

    const data = await response.json();
    return data.solana.usd;
  } catch (error) {
    console.error("Error fetching Solana price:", error);
    throw error;
  }
}

export async function getTokenPrice(tokenAddress: string) {
  try {
    console.log("Fetching token price for:", tokenAddress);
    const response = await fetch(
      `https://price.jup.ag/v4/price?ids=${tokenAddress}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch token price: ${response.statusText}`);
    }

    const data = await response.json();
    const price = data.data[tokenAddress]?.price;

    if (!price) {
      throw new Error(`No price data found for token: ${tokenAddress}`);
    }

    return price;
  } catch (error) {
    console.error("Error fetching token price:", error);
    throw error;
  }
}
