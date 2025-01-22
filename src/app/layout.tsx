import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { PrivyProvider } from "@/components/PrivyProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "SOLBrain AI",
  description:
    "Your Solana Super Brain - AI-powered assistant for all things Solana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <PrivyProvider>
          <main className="min-h-screen flex flex-col">
            <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
              <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold gradient-text">
                  SOLBrain AI
                </Link>
                <div className="flex items-center space-x-6">
                  <Link
                    href="/chat"
                    className="text-foreground-muted hover:text-foreground transition-colors"
                  >
                    Chat
                  </Link>
                  <Link
                    href="/about"
                    className="text-foreground-muted hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/roadmap"
                    className="text-foreground-muted hover:text-foreground transition-colors"
                  >
                    Roadmap
                  </Link>
                  <a
                    href="https://x.com/SOLBrainAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me/+pK_LKZ6gs6FiMzUx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <FontAwesomeIcon icon={faTelegram} className="w-5 h-5" />
                  </a>
                </div>
              </nav>
            </header>
            <div className="flex-1 container mx-auto px-4 py-8">{children}</div>
          </main>
          <Analytics />
        </PrivyProvider>
      </body>
    </html>
  );
}
