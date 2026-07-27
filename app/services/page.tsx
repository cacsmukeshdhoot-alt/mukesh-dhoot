import type { Metadata } from "next"
import { PageHero, ApproachSection, CtaBanner } from "@/components/shared"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Services",
  description:
    "FEMA Advisory, Cross-Border M&A, International Trade, Treasury & FX, Cross-Border Payments, RBI Compliance, NRI, Startup & Investor, GCC and Banking advisory.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Services"
        title="Ten focused practices for global business"
        description="From FEMA structuring and cross-border M&A to treasury, payments and RBI compliance — a complete advisory toolkit for international expansion."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ApproachSection />
      <CtaBanner />
    </>
  )
}
