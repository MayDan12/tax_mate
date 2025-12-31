"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, ShieldCheck, Zap } from "lucide-react"

export function TaxCalculator() {
  const [income, setIncome] = useState("")
  const [assets, setAssets] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [activeTab, setActiveTab] = useState("salary")

  const calculateSalaryTax = () => {
    const annualIncome = Number.parseFloat(income) * 12 || 0
    if (annualIncome <= 800000) return 0 // 2026 Threshold: No tax under 800k

    // Simplified progressive rates (demo purposes, mapping to the "up to 25%" mention)
    const taxable = annualIncome - 800000
    if (taxable <= 1000000) return taxable * 0.1
    if (taxable <= 5000000) return 100000 + (taxable - 1000000) * 0.15
    return 100000 + 600000 + (taxable - 5000000) * 0.25
  }

  const checkSMEExemption = () => {
    const annualRevenue = Number.parseFloat(income) * 12 || 0
    const assetValue = Number.parseFloat(assets) || 0
    // 2026 Reform: Revenue <= 100M and Assets <= 250M = EXEMPT
    return annualRevenue <= 100000000 && assetValue <= 250000000
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Reform-Ready Tax Calculator</h2>
        <p className="text-muted-foreground">Updated for the 2026 Nigerian Tax Act changes.</p>
      </div>

      <Card className="border-none shadow-xl overflow-hidden bg-card/50 backdrop-blur-sm">
        <div className="grid md:grid-cols-5 h-full">
          <div className="md:col-span-3 p-8">
            <Tabs defaultValue="salary" className="mb-8" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 rounded-full h-12 p-1 bg-muted">
                <TabsTrigger
                  value="salary"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Individual / PAYE
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Small Business (SME)
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="income"
                  className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {activeTab === "salary" ? "Monthly Gross Salary" : "Expected Annual Revenue"} (₦)
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₦</span>
                  <Input
                    id="income"
                    type="number"
                    placeholder={activeTab === "salary" ? "e.g. 250,000" : "e.g. 50,000,000"}
                    className="pl-10 h-14 text-lg rounded-xl focus:ring-primary border-primary/20 bg-background"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </div>
              </div>

              {activeTab === "business" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2"
                >
                  <Label
                    htmlFor="assets"
                    className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Total Asset Value (₦)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      ₦
                    </span>
                    <Input
                      id="assets"
                      type="number"
                      placeholder="e.g. 150,000,000"
                      className="pl-10 h-14 text-lg rounded-xl focus:ring-primary border-primary/20 bg-background"
                      value={assets}
                      onChange={(e) => setAssets(e.target.value)}
                    />
                  </div>
                </motion.div>
              )}

              <div className="bg-primary/5 p-4 rounded-xl flex gap-3 items-start border border-primary/10">
                <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-primary/80">
                  {activeTab === "salary"
                    ? "2026 Rule: No tax on annual income below ₦800,000."
                    : "SME Alert: Businesses with <₦100M revenue and <₦250M assets are now 100% tax exempt."}
                </p>
              </div>

              <Button
                onClick={() => setShowResult(true)}
                className="w-full h-14 rounded-xl text-lg font-semibold shadow-lg shadow-primary/20"
                disabled={!income || (activeTab === "business" && !assets)}
              >
                Estimate 2026 Impact <Calculator className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 bg-primary text-primary-foreground p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Calculate Reform Impact</h3>
                  <p className="text-primary-foreground/70 text-sm">
                    See how the 2026 Nigerian Tax Act changes your financial outlook.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 space-y-6"
                >
                  {activeTab === "salary" ? (
                    <>
                      <div>
                        <p className="text-primary-foreground/60 text-sm uppercase tracking-wider font-semibold">
                          Estimated Monthly Tax
                        </p>
                        <p className="text-5xl font-bold tracking-tight">
                          ₦{(calculateSalaryTax() / 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                      </div>

                      <div className="space-y-3 pt-6 border-t border-white/10">
                        <div className="flex justify-between text-sm">
                          <span className="text-primary-foreground/70">Reform Threshold</span>
                          <span className="font-medium">₦800,000/yr</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-2">
                          <span>Take Home</span>
                          <span>
                            ₦
                            {(Number.parseFloat(income) - calculateSalaryTax() / 12).toLocaleString(undefined, {
                              maximumFractionDigits: 0,
                            })}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      {checkSMEExemption() ? (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="space-y-4">
                          <div className="w-20 h-20 bg-emerald-400 text-emerald-950 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-400/20">
                            <ShieldCheck className="h-10 w-10" />
                          </div>
                          <h3 className="text-2xl font-bold">100% Tax Exempt</h3>
                          <p className="text-primary-foreground/80">
                            Your business meets the new 2026 thresholds for complete exemption from CIT, CGT, and
                            Development Levy!
                          </p>
                        </motion.div>
                      ) : (
                        <div className="space-y-4 text-left">
                          <h3 className="text-xl font-bold mb-2">Standard Rates Apply</h3>
                          <p className="text-primary-foreground/80 text-sm">
                            Your business exceeds the SME threshold. A 4% Development Levy will apply to your profits.
                          </p>
                          <div className="pt-4 border-t border-white/10">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="opacity-70">Dev. Levy (Estimated)</span>
                              <span className="font-bold">4%</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <Button
                    variant="secondary"
                    className="w-full rounded-xl bg-white text-primary hover:bg-white/90 h-12 font-bold"
                    onClick={() => setShowResult(false)}
                  >
                    Reset Calculation
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </div>
  )
}
