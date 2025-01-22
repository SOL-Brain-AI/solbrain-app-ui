import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { PrivyProvider } from "@/components/PrivyProvider";
import { Navigation } from "@/components/Navigation";
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
            <Navigation />
            <div className="flex-1 container mx-auto px-4 py-8">{children}</div>
          </main>
          <Analytics />
        </PrivyProvider>
      </body>
    </html>
  );
}
