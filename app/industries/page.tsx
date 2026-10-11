import type { Metadata } from "next"
import { PageHero, Eyebrow, CtaBanner } from "@/components/shared"
import { industries } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Cross-border advisory across Manufacturing, Technology, SaaS, FinTech, Healthcare, Pharmaceuticals, Renewable Energy, Infrastructure, Financial Services, Private Equity, Venture Capital and Family Offices.",
}

const industryNotes: Record<string, string> = {
  Manufacturing: "Capex funding, import of capital goods and outbound plant investment.",
  Technology: "Cross-border IP structures, ESOPs and inbound investment.",
  SaaS: "Global revenue collection, holding structures and foreign funding.",
  FinTech: "Regulatory-sensitive structuring and cross-border payment flows.",
  Healthcare: "Inbound investment, JV structuring and trade of medical goods.",
  Pharmaceuticals: "Export proceeds, API imports and overseas acquisitions.",
  "Renewable Energy": "ECB funding, project structuring and foreign equity.",
  Infrastructure: "Long-tenor foreign debt and consortium structuring.",
  Automobile: "Component trade, JV structures and technology licensing.",
  Retail: "FDI policy navigation and import remittance frameworks.",
  Logistics: "Trade documentation, merchant trade and cross-border payments.",
  Chemicals: "Import-export compliance and trade risk management.",
  "Financial Services": "Regulatory structuring and cross-border transaction considerations.",
  "Private Equity": "Deal structuring, funding routes and exit planning.",
  "Venture Capital": "Foreign investment instruments and portfolio compliance.",
  "Family Offices": "Global asset structuring, LRS and repatriation.",
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector fluency across the global economy"
        description="Cross-border and regulatory considerations vary by industry and transaction."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Eyebrow>Industry contexts</Eyebrow>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind} className="bg-card p-7">
                <h3 className="text-lg font-semibold text-foreground">{ind}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {industryNotes[ind] ?? "Cross-border structuring and applicable regulatory considerations."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
