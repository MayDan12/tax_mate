"use client"

import { motion } from "framer-motion"
import { BookMarked, Sparkles, ShieldCheck, LayoutDashboard, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatePresence } from "framer-motion"

const REFORM_DATA = [
  {
    title: "Small Business Exemption",
    category: "SMEs",
    content:
      "Businesses making ₦100m or less per year with assets under ₦250m are exempt from Company Income Tax, Capital Gains Tax, and Development Levy.",
    icon: LayoutDashboard,
    color: "text-blue-500",
  },
  {
    title: "Capital Gains Tax",
    category: "Investment",
    content:
      "Companies now pay 30% tax on profits from selling assets (land, shares). This is an increase from the previous 10%.",
    icon: ShieldCheck,
    color: "text-orange-500",
  },
  {
    title: "Development Levy",
    category: "Corporate",
    content:
      "A new 4% levy on profits replaces Education tax, IT levy, NASENI, and Police trust fund levies. Small businesses are exempt.",
    icon: Sparkles,
    color: "text-purple-500",
  },
  {
    title: "Personal Income Tax",
    category: "Individuals",
    content:
      "Individuals earning ₦800,000 or less per year pay zero tax. Higher earners pay graduated rates up to 25%.",
    icon: BookMarked,
    color: "text-primary",
  },
  {
    title: "VAT Exemptions",
    category: "Essentials",
    content:
      "Zero VAT on basic food, medicine, medical services, school books, electricity generation, and education services.",
    icon: ShieldCheck,
    color: "text-green-500",
  },
  {
    title: "Tax Ombudsman",
    category: "Rights",
    content:
      "A new independent office to help taxpayers resolve disputes and handle complaints against tax authorities.",
    icon: ShieldCheck,
    color: "text-red-500",
  },
]

export function EducationHub() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredReforms = REFORM_DATA.filter((reform) => {
    const matchesSearch =
      reform.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reform.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || reform.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(REFORM_DATA.map((r) => r.category)))

  return (
    <section id="hub" className="py-24 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold">
            <Sparkles className="h-3 w-3" />
            2026 Reform Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Nigerian Tax Reforms <br />
            <span className="text-primary underline decoration-primary/30 underline-offset-8">Simplified for You.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Search and explore the major changes coming in 2026. We've translated complex legal text into clear,
            actionable insights.
          </p>

          <div className="relative max-w-xl mx-auto pt-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search reforms (e.g., 'SME', 'VAT', 'Salary')"
              className="pl-12 h-14 rounded-full border-primary/20 bg-white shadow-lg text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Badge
              variant={!selectedCategory ? "default" : "outline"}
              className="cursor-pointer px-4 py-1.5 rounded-full text-sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Topics
            </Badge>
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className="cursor-pointer px-4 py-1.5 rounded-full text-sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReforms.map((reform) => (
              <motion.div
                key={reform.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 h-full flex flex-col border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl bg-primary/5 ${reform.color}`}>
                      <reform.icon className="h-6 w-6" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-primary/5 text-primary-foreground/70 text-[10px] uppercase"
                    >
                      {reform.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reform.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{reform.content}</p>
                  <Button
                    variant="ghost"
                    className="w-full mt-6 justify-between text-primary hover:text-primary hover:bg-primary/5 px-2"
                  >
                    Learn More <BookMarked className="h-4 w-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredReforms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No reforms found matching your search.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory(null)
              }}
              className="text-primary mt-2"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
