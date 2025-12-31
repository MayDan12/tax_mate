"use client";

import { Sparkles, BookMarked } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AUDIENCE = [
  { who: "Small business", means: "You pay less or no tax" },
  { who: "Big company", means: "You pay more and must be transparent" },
  { who: "Salary earner", means: "Lower income = no tax" },
  { who: "Freelancer", means: "Must understand tax better" },
  { who: "Foreign company", means: "Nigeria can tax you easier" },
];

const CHANGES = [
  {
    title: "Small Businesses Now Pay Less (Or No Tax)",
    points: [
      "Revenue ≤ ₦100m and assets ≤ ₦250m qualify",
      "No Company Income Tax, Capital Gains Tax, Development Levy",
      "Designed to help SMEs grow",
    ],
    tag: "SMEs",
  },
  {
    title: "Capital Gains Tax Has Increased",
    points: [
      "Companies pay 30% on profits from asset sales",
      "Individuals pay based on income bands",
      "Raised from 10% to curb avoidance",
    ],
    tag: "Investment",
  },
  {
    title: "Selling Shares Abroad Still Attracts Nigerian Tax",
    points: [
      "Share sales of Nigerian companies via foreign entities taxed",
      "Exemption if total sales < ₦150m and profit < ₦10m in a year",
    ],
    tag: "Cross-border",
  },
  {
    title: "New Development Levy Introduced",
    points: [
      "Most companies pay 4% of profits",
      "Replaces education, IT, NASENI, police levies",
      "Small businesses exempt",
    ],
    tag: "Corporate",
  },
  {
    title: "Big Companies Must Pay Minimum Tax",
    points: [
      "Revenue ≥ ₦50bn or part of €750m+ group",
      "Minimum 15% effective tax regardless of planning",
    ],
    tag: "Large corporates",
  },
  {
    title: "Foreign Subsidiaries’ Profits Can Be Taxed",
    points: [
      "Undistributed foreign profits may be taxed",
      "Applies where arrangements look like avoidance",
    ],
    tag: "CFC rules",
  },
  {
    title: "Foreign Companies Taxed More Easily",
    points: [
      "No physical presence needed to create tax exposure",
      "Anti-fragmentation: splitting contracts to avoid tax is ignored",
    ],
    tag: "Permanent establishment",
  },
  {
    title: "Minimum Tax for Foreign Companies",
    points: [
      "At least 4% of income or normal withholding tax, whichever is higher",
      "Prevents zero-tax outcomes",
    ],
    tag: "Non-residents",
  },
  {
    title: "Free Trade Zone Companies Lose Some Benefits",
    points: [
      "Tax-free exports continue",
      "Local sales > 25% become taxable",
      "From 2028, any local sale = full tax",
    ],
    tag: "FTZ",
  },
  {
    title: "New Economic Development Incentive (EDI)",
    points: [
      "Replaces Pioneer Status",
      "5% tax credit per year for 5 years",
      "Based on qualifying spend on equipment or infrastructure",
      "Unused credits roll over for 5 more years",
    ],
    tag: "Incentives",
  },
  {
    title: "Personal Income Tax Is Now Fairer",
    points: [
      "Income ≤ ₦800,000 per year: no tax",
      "Progressive rates up to 25% for higher incomes",
      "Job loss/injury compensation tax-free up to ₦50m",
    ],
    tag: "Individuals",
  },
  {
    title: "Who Is a Tax Resident?",
    points: [
      "Residence based on living, economic, or family ties",
      "Global income may be taxed if resident in Nigeria",
    ],
    tag: "Residence",
  },
  {
    title: "Tax Ombudsman Introduced",
    points: [
      "Independent office for dispute resolution",
      "Handles complaints against tax authorities",
    ],
    tag: "Rights",
  },
  {
    title: "VAT Can Now Be Reclaimed",
    points: [
      "Input VAT on services, equipment, assets reclaimable",
      "If selling VATable goods or services",
    ],
    tag: "VAT",
  },
  {
    title: "Zero VAT on Essential Items",
    points: [
      "No VAT on basic food, medicine, medical services",
      "No VAT on school materials, electricity generation, education services",
      "Businesses can still recover input VAT",
    ],
    tag: "VAT relief",
  },
  {
    title: "Mandatory E‑Invoicing",
    points: [
      "Use government-approved digital invoicing systems",
      "Automatic reporting of VAT transactions",
    ],
    tag: "Digital",
  },
  {
    title: "VAT Sharing Has Changed",
    points: [
      "Federal 10%, States 55%, Local Governments 35%",
      "More funds flow to states and LGs",
    ],
    tag: "Revenue sharing",
  },
  {
    title: "Heavier Penalties for Breaking Tax Laws",
    points: [
      "Late filing: ₦100k first month, ₦50k thereafter",
      "Unregistered vendors: ₦5m fine",
      "Obstructing tax officers attracts penalties",
    ],
    tag: "Compliance",
  },
  {
    title: "Companies Must Declare Tax Planning",
    points: [
      "Disclose strategies for tax savings, delays, refunds",
      "Transparency is mandatory",
    ],
    tag: "Disclosure",
  },
  {
    title: "FIRS Is Now NRS",
    points: [
      "Federal Inland Revenue Service renamed Nigeria Revenue Service",
      "States gain more independence; stronger federal–state cooperation",
    ],
    tag: "Institutional",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 border-b border-primary/10 bg-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              2026 Nigerian Tax Changes
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            2026 Nigerian Tax Changes – Explained in Simple English
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            A practical, plain-language guide to what’s changing for
            individuals, small businesses, large companies, and foreign
            entities.
          </p>
          <div className="mt-8">
            <Tabs defaultValue="summary">
              <TabsList>
                <TabsTrigger value="summary">Quick Summary</TabsTrigger>
                <TabsTrigger value="changes">All Changes</TabsTrigger>
              </TabsList>
              <TabsContent value="summary" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {AUDIENCE.map((a) => (
                    <Card key={a.who} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-xl">{a.who}</CardTitle>
                        <CardDescription>{a.means}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="changes" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {CHANGES.map((item, idx) => (
                    <Card key={item.title} className="h-full">
                      <CardHeader className="border-b">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">
                            {idx + 1}. {item.title}
                          </CardTitle>
                          <Badge variant="secondary">{item.tag}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {item.points.map((p) => (
                            <li key={p} className="leading-relaxed">
                              {p}
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="ghost"
                          className="mt-4 w-full justify-between"
                        >
                          Learn More <BookMarked className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-muted-foreground">
              Need a simpler overview? Use the Quick Summary tab above.
            </p>
            <Button variant="link" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
