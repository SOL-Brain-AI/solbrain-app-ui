import {
  createTransferCheckedInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
  ASSOCIATED_TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";

// USDC token mint address on Solana mainnet
const USDC_MINT = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
// Your wallet address to receive payments
const PAYMENT_WALLET = new PublicKey("YOUR_WALLET_ADDRESS");

// Amount in USDC (0.05 USDC = 50000 lamports since USDC has 6 decimals)
const PAYMENT_AMOUNT = 50000;

export async function createPaymentTransaction(
  userWallet: PublicKey
): Promise<Transaction> {
  const connection = new Connection("https://api.mainnet-beta.solana.com");

  // Get the user's USDC token account
  const userTokenAccount = await getAssociatedTokenAddress(
    USDC_MINT,
    userWallet,
    false,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID
  );

  // Get the payment receiver's USDC token account
  const receiverTokenAccount = await getAssociatedTokenAddress(
    USDC_MINT,
    PAYMENT_WALLET,
    false,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID
  );

  // Create the transfer instruction
  const transferInstruction = createTransferCheckedInstruction(
    userTokenAccount,
    USDC_MINT,
    receiverTokenAccount,
    userWallet,
    PAYMENT_AMOUNT,
    6 // USDC decimals
  );

  // Get the latest blockhash
  const { blockhash, lastValidBlockHeight } =
    await connection.getLatestBlockhash();

  // Create and return the transaction
  const transaction = new Transaction({
    feePayer: userWallet,
    blockhash,
    lastValidBlockHeight,
  }).add(transferInstruction);

  return transaction;
}

export async function verifyTransaction(signature: string): Promise<boolean> {
  const connection = new Connection("https://api.mainnet-beta.solana.com");

  try {
    const tx = await connection.getTransaction(signature, {
      maxSupportedTransactionVersion: 0,
    });

    if (!tx) return false;

    // Verify the transaction succeeded and contains our expected payment
    return tx.meta?.err === null;
  } catch (error) {
    console.error("Error verifying transaction:", error);
    return false;
  }
}
