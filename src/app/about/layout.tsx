import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SOLBrain AI | Next-Gen Solana Intelligence",
  description: "Discover how SOLBrain AI combines advanced artificial intelligence with Solana blockchain data to deliver unprecedented insights and analysis capabilities.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 