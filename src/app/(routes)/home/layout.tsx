import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SOLBrain AI | Your Solana Super Brain",
  description: "Harness the power of AI to analyze Solana smart contracts, track real-time blockchain data, and get instant insights. Your ultimate companion for all things Solana.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 