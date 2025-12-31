"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Building2,
  Wallet,
  Briefcase,
  ShieldCheck,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    label: "Individual PIT Threshold",
    value: "₦800k",
    sub: "Annual Income",
    icon: Users,
    color: "text-blue-500",
    trend: "up",
  },
  {
    label: "SME Revenue Cap",
    value: "₦100M",
    sub: "For Tax Exemption",
    icon: Briefcase,
    color: "text-emerald-500",
    trend: "up",
  },
  {
    label: "Development Levy",
    value: "4%",
    sub: "Replaces 5 Levies",
    icon: Building2,
    color: "text-orange-500",
    trend: "down",
  },
  {
    label: "VAT Sharing (States)",
    value: "55%",
    sub: "Up from previous",
    icon: Wallet,
    color: "text-purple-500",
    trend: "up",
  },
]

export function VisualDashboard() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                2026 Data Insights
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight">Tax Impact at a Glance</h2>
              <p className="text-muted-foreground mt-2 text-lg">
                Visualizing the most significant changes for the Nigerian economy.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-background rounded-full border shadow-sm">
                <BarChart3 className="h-4 w-4 text-primary" />
                Live Market Sync
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="p-6 border-none shadow-sm hover:shadow-md transition-shadow bg-background">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-2xl bg-muted`}>
                        <Icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      {stat.trend === "up" ? (
                        <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10 border-none">
                          <ArrowUpRight className="h-3 w-3 mr-1" /> Benefit
                        </Badge>
                      ) : (
                        <Badge className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/10 border-none">
                          <ArrowDownRight className="h-3 w-3 mr-1" /> Unified
                        </Badge>
                      )}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold tracking-tight mb-1">{stat.value}</h3>
                      <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                      <p className="text-xs text-muted-foreground">{stat.sub}</p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-none shadow-sm bg-background overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PieChart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">VAT Distribution Shift</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>State Governments</span>
                      <span className="text-primary">55%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "55%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Local Governments</span>
                      <span className="text-primary">35%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "35%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-primary/60"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Federal Government</span>
                      <span className="text-primary">10%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "10%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-primary/30"
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-sm text-muted-foreground leading-relaxed italic">
                  *The new revenue sharing formula aims to empower sub-national governments, providing more localized
                  funds for development.
                </p>
              </div>
            </Card>

            <Card className="p-8 border-none shadow-sm bg-primary text-primary-foreground overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">SME Tax Holiday</h3>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  The 2026 reform creates a massive "Green Zone" for small businesses. If you qualify, your effective
                  tax rate is slashed to zero.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-xs opacity-70 mb-1 uppercase tracking-wider font-bold">Revenue Cap</p>
                    <p className="text-xl font-bold">₦100M</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-xs opacity-70 mb-1 uppercase tracking-wider font-bold">Asset Cap</p>
                    <p className="text-xl font-bold">₦250M</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-emerald-400/20 rounded-2xl border border-emerald-400/30 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-400 text-emerald-950 rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-100">Exemption Verified</p>
                    <p className="text-xs text-emerald-100/70">Applies to CIT, CGT, and Dev. Levy</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
