import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import { PageHero, Eyebrow, ApproachSection, CtaBanner } from "@/components/shared"
import { audiences } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About",
  description:
    "Mukesh Dhoot brings 20+ years of banking leadership at Citibank, ICICI Bank and YES BANK, with deep expertise in FEMA, RBI regulations, FDI, ODI, M&A, ECB and cross-border structuring.",
}

const expertise = [
  "FEMA & RBI regulations",
  "FDI (Inbound Investment)",
  "ODI (Outbound Investment)",
  "Cross-Border M&A",
  "External Commercial Borrowings",
  "Trade Finance",
  "",
  "International Payments",
  "Cross-Border Structuring",
]

const values = [
  {
    title: "Strategic, not just compliant",
    body: "We start from your commercial objective and design the regulatory path to support it — never the other way around.",
  },
  {
    title: "Execution-led",
    body: "Decades of hands-on transaction experience mean our advice is built to be executed, not just filed.",
  },
  {
    title: "Senior engagement",
    body: "You work directly with senior advisors who have sat on the bank side of these transactions.",
  },
  {
    title: "Discreet & trusted",
    body: "We operate as a long-term trusted advisor, with the confidentiality that sensitive matters demand.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Firm"
        title="Enabling businesses to expand globally with confidence"
        description="Mukesh Dhoot & Associates is a boutique advisory firm combining deep regulatory command with real banking and transaction experience across cross-border business."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border lg:sticky lg:top-28">
            <Image
              src="/images/mukesh-dhoot.png"
              alt="Mukesh Dhoot, Founder of Mukesh Dhoot & Associates"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <Eyebrow>Mukesh Dhoot</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Two decades on the bank side of cross-border business
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Mukesh Dhoot has more than 20 years of experience in banking and cross-border
                business, including former leadership roles with Citibank, ICICI Bank and YES BANK.
                Across these institutions he led and structured complex international transactions —
                the same transactions the firm now advises clients on.
              </p>
              <p>
                That background gives the firm a rare combination: fluency in FEMA and RBI
                regulation, alongside a practitioner&apos;s understanding of how banks, treasury
                desks and trade teams actually operate. The result is advice that is both compliant
                and commercially executable.
              </p>
              <p>
                The firm is positioned as a strategic advisor rather than only a compliance
                consultant — helping clients execute international business confidently, not merely
                satisfy a filing requirement.
              </p>
            </div>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Areas of expertise
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>What Guides Us</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              A boutique firm with a global standard
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-card p-7">
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Who We Serve</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Trusted across the cross-border ecosystem
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <span
                key={a}
                className="rounded-sm border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ApproachSection />
      <CtaBanner />
    </>
  )
}
