"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Ready for 2026 Tax Reforms
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            Tax education for{" "}
            <span className="text-primary">every Nigerian.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty max-w-2xl"
          >
            Understand, calculate, and manage your taxes with ease. No jargon,
            just clear guidance for freelancers, SMEs, and salary earners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 h-14 text-base font-semibold"
              onClick={() => (window.location.href = "/education-hub")}
            >
              Education Hub
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base font-semibold bg-transparent"
            >
              <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
            </Button> */}
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="rounded-2xl border bg-card shadow-2xl overflow-hidden aspect-video max-w-5xl mx-auto border-primary/20">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b bg-muted/50">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 h-5 w-48 rounded bg-muted animate-pulse" />
            </div>
            <div className="p-8 h-full flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6 w-full max-w-3xl">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-32 rounded-xl bg-muted/50 border border-dashed border-muted-foreground/20"
                  />
                ))}
                <div className="col-span-3 h-48 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-medium">Dashboard Preview</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
