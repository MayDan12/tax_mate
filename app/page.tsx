import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { TaxCalculator } from "@/components/tax-calculator";
import { VisualDashboard } from "@/components/visual-dashboard";
import { ReformKnowledgeBase } from "@/components/reform-knowledge-base";
import { EducationHub } from "@/components/education-hub";

export default function Home() {
  return (
    <main className="min-h-screen  bg-background">
      <Hero />
      <div id="calculator" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <TaxCalculator />
        </div>
      </div>
      <VisualDashboard />
      <ReformKnowledgeBase />
      <Features />
      <EducationHub />
    </main>
  );
}
