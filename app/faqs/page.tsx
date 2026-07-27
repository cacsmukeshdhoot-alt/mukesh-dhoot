import type { Metadata } from "next"
import { PageHero, CtaBanner } from "@/components/shared"
import { FaqsView } from "@/components/faqs-view"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions on FDI, ODI, ECB, FEMA, international trade, merchant trade, exports, imports, cross-border payments, treasury, NRI matters, RBI approvals, compounding and reporting.",
}

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Clear answers to cross-border questions"
        description="A practical reference covering FDI, ODI, ECB, FEMA, trade, treasury, NRI matters, RBI approvals, compounding and reporting — in plain language."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <FaqsView />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
