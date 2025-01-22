"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-5xl w-full"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            <span className="glitch-text" data-text="SOLBrain AI">
              SOLBrain AI
            </span>
          </h1>
          <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
            Your AI-powered companion for all things Solana. Get instant answers, analyze smart contracts, and stay ahead of the curve.
          </p>
          <Link
            href="/chat"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-foreground rounded-xl transition-colors font-medium shadow-glow text-lg"
          >
            Start Chatting
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              title: "Smart Contract Analysis",
              description: "Get instant insights into any Solana smart contract with our AI-powered analysis.",
            },
            {
              title: "Real-time Data",
              description: "Access and analyze blockchain data in real-time with natural language queries.",
            },
            {
              title: "Market Intelligence",
              description: "Stay informed with AI-driven market analysis and trend predictions.",
            },
            {
              title: "Developer Tools",
              description: "Powerful tools to help you build and debug Solana applications faster.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 hover:bg-background-light/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">{feature.title}</h3>
              <p className="text-foreground-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center glass-panel p-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Ready to get started?</h2>
          <p className="text-foreground-muted mb-6">
            Join the future of blockchain intelligence with SOLBrain AI.
          </p>
          <Link
            href="/chat"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-foreground rounded-xl transition-colors font-medium shadow-glow text-lg"
          >
            Try it Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
