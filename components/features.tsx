"use client";

import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, Bell, LayoutDashboard } from "lucide-react";

const features = [
  {
    title: "Reform Knowledge Base",
    description:
      "Deep-dive into 20+ key changes including VAT sharing, SME exemptions, and new levies.",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    title: "2026 Impact Calculator",
    description:
      "Instant estimates for PIT and SME exemptions based on the latest 2026 Act thresholds.",
    icon: ShieldCheck,
    color: "bg-primary",
  },
  {
    title: "Smart Reminders",
    description:
      "Never miss a deadline. Receive alerts for filing dates and policy updates.",
    icon: Bell,
    color: "bg-orange-500",
  },
  {
    title: "Compliance Dashboard",
    description:
      "One place to track your history, upcoming deadlines, and personalized insights.",
    icon: LayoutDashboard,
    color: "bg-purple-500",
  },
];

export function Features() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-card border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
