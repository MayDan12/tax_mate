"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            TaxMate<span className="text-primary">NG</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="#calculator"
            className="hover:text-primary transition-colors"
          >
            Calculator
          </Link>
          <Link
            href="/education-hub"
            className="hover:text-primary transition-colors"
          >
            Learn
          </Link>
          <Link
            href="#eligibility"
            className="hover:text-primary transition-colors"
          >
            Check Eligibility
          </Link>
        </nav>
        {/* <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm" className="rounded-full px-6">
            Get Started
          </Button>
        </div> */}
      </div>
    </motion.header>
  );
}
