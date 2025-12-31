"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShieldCheck, Briefcase, Users, Globe, Building2, Scale, Zap, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const reformCategories = [
  { id: "all", label: "All Changes" },
  { id: "business", label: "Business & SMEs" },
  { id: "individual", label: "Individual & Salary" },
  { id: "vat", label: "VAT & Consumption" },
  { id: "compliance", label: "Compliance & Digital" },
]

const reforms = [
  {
    id: 1,
    title: "Small Business Tax Exemption",
    category: "business",
    icon: <Briefcase className="h-5 w-5 text-emerald-500" />,
    summary: "Businesses with revenue ≤ ₦100m and assets ≤ ₦250m pay 0% CIT.",
    details:
      "If your business makes ₦100 million or less per year and owns assets worth ₦250 million or less, you do NOT pay Company Income Tax, Capital Gains Tax, or Development Levy.",
    benefit: "Helps small businesses grow without heavy tax pressure.",
  },
  {
    id: 2,
    title: "Capital Gains Tax (CGT) Update",
    category: "business",
    icon: <Scale className="h-5 w-5 text-amber-500" />,
    summary: "Companies now pay 30% tax on profit from asset sales.",
    details:
      "Companies now pay 30% tax on profits from selling assets (e.g., land, shares). Previously it was 10%. This is designed to reduce tax avoidance.",
  },
  {
    id: 4,
    title: "New Development Levy",
    category: "business",
    icon: <Building2 className="h-5 w-5 text-blue-500" />,
    summary: "One single 4% levy replaces multiple existing ones.",
    details:
      "Most companies (except small ones) must pay 4% of profits as a development levy. This replaces Education tax, IT levy, NASENI, and Police Trust Fund levies.",
  },
  {
    id: 11,
    title: "Personal Income Tax Threshold",
    category: "individual",
    icon: <Users className="h-5 w-5 text-purple-500" />,
    summary: "No tax for individuals earning ₦800,000 or less per year.",
    details:
      "Personal income tax is now fairer. If you earn ₦800,000 or less per year, you pay NO tax. Higher earners pay gradually up to 25%.",
  },
  {
    id: 14,
    title: "VAT Reclamation (Input VAT)",
    category: "vat",
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
    summary: "Businesses can now claim back VAT paid on services and assets.",
    details:
      "Businesses can now claim back VAT paid on services, equipment, and assets, as long as they sell VATable goods or services.",
  },
  {
    id: 15,
    title: "Zero VAT on Essentials",
    category: "vat",
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    summary: "No VAT on food, medicine, books, and electricity.",
    details:
      "No VAT on basic food items, medicine, medical services, school books/materials, electricity generation, and education services.",
  },
  {
    id: 16,
    title: "Mandatory E-Invoicing",
    category: "compliance",
    icon: <Search className="h-5 w-5 text-indigo-500" />,
    summary: "Digital receipts and automatic reporting are now required.",
    details:
      "Businesses must use government-approved digital invoicing systems and automatically report VAT transactions to reduce fraud.",
  },
  {
    id: 17,
    title: "VAT Revenue Sharing",
    category: "vat",
    icon: <Globe className="h-5 w-5 text-sky-500" />,
    summary: "States and LGAs now receive a larger share of VAT (90% combined).",
    details:
      "VAT revenue sharing: Federal Government (10%), States (55%), and Local Governments (35%). This helps local authorities get more funds.",
  },
]

export function ReformKnowledgeBase() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredReforms = reforms.filter((reform) => {
    const matchesSearch =
      reform.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reform.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || reform.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="reforms" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 border-emerald-500 text-emerald-600">
            2026 Tax Act
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reform Knowledge Base</h2>
          <p className="text-muted-foreground text-lg">
            Stay ahead of the 2026 Nigerian Tax reforms. We've simplified the complex legal language into
            easy-to-understand guides.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search reforms (e.g., 'SME', 'VAT', 'Salary')..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {reformCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-emerald-600 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReforms.map((reform) => (
              <motion.div
                key={reform.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow cursor-default group">
                  <CardHeader>
                    <div className="mb-4">{reform.icon}</div>
                    <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                      {reform.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{reform.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{reform.details}</p>
                      {reform.id === 1 && (
                        <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-lg flex gap-3 items-start border border-emerald-100 dark:border-emerald-900">
                          <Info className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                          <p className="text-xs text-emerald-800 dark:text-emerald-300 italic">{reform.benefit}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredReforms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No reforms found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
