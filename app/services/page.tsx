import type { Metadata } from "next"
import { PageHero, ApproachSection, CtaBanner } from "@/components/shared"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cross-border advice covering FEMA, M&A, international trade, payments, RBI filings, NRI, startup and banking matters.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Services"
        title="Cross-border advisory services"
        description="Advice on FEMA, cross-border M&A, payments and other cross-border business matters, subject to the agreed scope."
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
