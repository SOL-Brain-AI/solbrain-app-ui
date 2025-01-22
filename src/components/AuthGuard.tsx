"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { ready, authenticated, login, getAccessToken, logout } = usePrivy();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (ready && !authenticated && !showLoginModal) {
      timeoutId = setTimeout(() => {
        setShowLoginModal(true);
        login();
      }, 500);
    }

    if (authenticated) {
      setShowLoginModal(false);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [ready, authenticated, login, showLoginModal]);

  // Verify token when authenticated
  useEffect(() => {
    async function verifyAuth() {
      if (authenticated) {
        try {
          const token = await getAccessToken();
          const response = await fetch("/api/auth/verify", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to verify token");
          }

          const data = await response.json();
          console.log("Verified user:", data.userId);
        } catch (error) {
          console.error("Verification error:", error);
          // Handle verification error (optional)
          logout();
        }
      }
    }

    verifyAuth();
  }, [authenticated, getAccessToken, logout]);

  if (!ready) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="text-foreground-muted">Loading...</div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="text-foreground-muted">
          Please connect your wallet to continue
        </div>
        <button
          onClick={() => {
            setShowLoginModal(true);
            login();
          }}
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-foreground rounded-xl transition-colors font-medium shadow-glow"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
