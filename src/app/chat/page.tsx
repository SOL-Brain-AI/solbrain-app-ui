"use client";

import { useChat } from "ai/react";
import { useSendTransaction } from "@privy-io/react-auth";
import { AuthGuard } from "@/components/AuthGuard";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { createPaymentTransaction } from "@/lib/solana";
import { PublicKey } from "@solana/web3.js";
import { useState } from "react";

export default function ChatPage() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: originalHandleSubmit,
  } = useChat();
  const { authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <AuthGuard>
      <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-12">
        <div className="z-10 max-w-4xl w-full">
          <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
            SOLBrain Chat
          </h1>

          <div className="flex flex-col space-y-4 mb-8 glass-panel p-6 min-h-[400px]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start space-x-4 ${
                  m.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    m.role === "user"
                      ? "bg-primary/20 border border-primary/30 text-foreground"
                      : "bg-background-light/50 border border-white/5 text-foreground"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {messages.length === 0 && (
              <div className="text-center text-foreground-muted mt-8">
                Start a conversation by sending a message below! (0.05 USDC per
                message)
              </div>
            )}
          </div>

          <form onSubmit={() => {}} className="flex flex-col space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <div className="flex space-x-4">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about Solana or anything else..."
                className="flex-1 p-4 glass-panel bg-background-light/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isProcessing}
              />
              <button
                type="submit"
                disabled={isProcessing}
                className={`px-6 py-4 bg-primary hover:bg-primary/90 text-foreground rounded-xl transition-colors font-medium shadow-glow ${
                  isProcessing ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isProcessing ? "Processing..." : "Send (0.05 USDC)"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthGuard>
  );
}
