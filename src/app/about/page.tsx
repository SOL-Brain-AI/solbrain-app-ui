"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-12 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-4xl w-full"
      >
        <h1 className="text-5xl font-bold mb-8 text-center">
          <span className="glitch-text" data-text="About SOLBrain AI">
            About SOLBrain AI
          </span>
        </h1>

        <div className="glass-panel p-8 space-y-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold gradient-text">
              Your AI-Powered Solana Super Brain
            </h2>
            <p className="text-foreground-muted leading-relaxed text-lg">
              Welcome to the future of blockchain intelligence.
              {"\n\n"}
              SOLBrain AI isn{"'"}t just another AI assistant - it{"'"}s your
              direct neural link to the Solana blockchain, processing millions
              of data points in real-time to give you unparalleled insights and
              answers.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold gradient-text">
              Quantum-Speed Blockchain Integration
            </h2>
            <div className="glass-panel bg-background-light/10 p-6">
              <p className="text-foreground-muted leading-relaxed text-lg">
                While others talk to databases, we communicate directly with the
                blockchain.
                {"\n\n"}
                Experience real-time data processing that turns complex
                blockchain metrics into crystal-clear insights.
                {"\n\n"}
                From transaction analysis to smart contract interactions, we
                make the complex simple.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold gradient-text">
              Superhuman Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Real-time Analysis",
                  description:
                    "Process millions of blockchain data points instantly",
                },
                {
                  title: "Smart Contract Genius",
                  description:
                    "Debug and optimize your contracts with AI precision",
                },
                {
                  title: "DeFi Mastermind",
                  description:
                    "Maximize yields and discover optimal trading strategies",
                },
                {
                  title: "NFT Oracle",
                  description:
                    "Predict trends and analyze collection performance",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-4 hover:bg-background-light/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-muted">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold gradient-text">
              The Magic Behind
            </h2>
            <div className="relative glass-panel p-6 overflow-hidden">
              <div className="redacted">
                <p className="text-foreground-muted leading-relaxed text-lg">
                  Our neural networks are directly interfaced with Solana{"'"}s
                  RPC nodes, creating a symbiotic relationship between AI and
                  blockchain.
                  {"\n\n"}
                  This unique architecture allows us to process and analyze
                  blockchain data at unprecedented speeds, turning raw data into
                  actionable intelligence in milliseconds.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
