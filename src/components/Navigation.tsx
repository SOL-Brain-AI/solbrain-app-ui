"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold gradient-text">
          SOLBrain AI
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
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
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground-muted hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon
            icon={mobileMenuOpen ? faXmark : faBars}
            className="w-6 h-6"
          />
        </button>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 space-y-4 bg-background border-t border-white/10">
          <Link
            href="/chat"
            className="block text-foreground-muted hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Chat
          </Link>
          <Link
            href="/about"
            className="block text-foreground-muted hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/roadmap"
            className="block text-foreground-muted hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Roadmap
          </Link>
          <div className="flex space-x-4 py-2">
            <a
              href="https://x.com/SOLBrainAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/SOLBrainAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <FontAwesomeIcon icon={faTelegram} className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 