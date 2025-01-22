"use client";

import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start p-4 md:p-12 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-4xl w-full"
      >
        <h1 className="text-5xl font-bold mb-8 text-center">
          <span className="glitch-text" data-text="Roadmap">
            Roadmap
          </span>
        </h1>

        <div className="glass-panel p-8">
          <div className="space-y-12">
            {/* Phase 1: Launch */}
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  Phase 1: Core Integration
                </h2>
                <div className="space-y-2 text-foreground-muted">
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span>
                      Direct Solana RPC node integration for real-time data
                      access
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span>
                      Basic smart contract analysis and interaction capabilities
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span>
                      Launch of natural language query interface for blockchain
                      data
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2: Enhanced Features */}
            <div className="relative pl-8 border-l-2 border-primary/30 opacity-80">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  Phase 2: Advanced Analytics
                </h2>
                <div className="space-y-2 text-foreground-muted">
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      [CONFIDENTIAL] protocol integration for [REDACTED]
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      [DATA EXPUNGED] marketplace analysis and [CLASSIFIED]
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      Advanced [REDACTED] and anomaly [ACCESS RESTRICTED]
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3: Premium Features */}
            <div className="relative pl-8 border-l-2 border-primary/30 opacity-70">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  Phase 3: Developer Tools
                </h2>
                <div className="space-y-2 text-foreground-muted">
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      [LEVEL 3 CLEARANCE REQUIRED] [REDACTED] [CLASSIFIED]
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      [TOP SECRET] [DATA EXPUNGED] [RESTRICTED ACCESS]
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      [CLASSIFIED INFORMATION] [REDACTED] [CONFIDENTIAL]
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 4: Ecosystem */}
            <div className="relative pl-8 border-l-2 border-primary/30 opacity-50">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  Phase 4: [ENCRYPTED]
                </h2>
                <div className="space-y-2 text-foreground-muted">
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      [CLASSIFIED LEVEL 5] [REDACTED] [TOP SECRET]
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      [ACCESS DENIED] [DATA EXPUNGED] [CLASSIFIED]
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-secondary">•</span>
                    <span className="redacted">
                      [LEVEL 5 CLEARANCE REQUIRED] [REDACTED] [RESTRICTED]
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
