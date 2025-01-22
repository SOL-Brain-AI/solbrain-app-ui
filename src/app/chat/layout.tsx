import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with SOLBrain AI | Instant Solana Insights",
  description: "Get real-time answers about Solana blockchain, smart contracts, and market trends. Chat with our AI assistant for instant blockchain intelligence.",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 