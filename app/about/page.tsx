import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import { PageHero, Eyebrow, ApproachSection, CtaBanner } from "@/components/shared"
import { audiences } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder Mukesh Dhoot has more than 20 years of banking and cross-border transaction experience, including former leadership roles at Citibank, ICICI Bank and YES BANK.",
}

const expertise = [
  "FEMA & RBI regulations",
  "FDI (Inbound Investment)",
  "ODI (Outbound Investment)",
  "Cross-Border M&A",
  "External Commercial Borrowings",
  "Trade Finance",
  "International Payments",
  "Cross-Border Structuring",
]

const values = [
  {
    title: "Founder background",
    body: "More than 20 years of founder experience in banking and cross-border transactions, including roles at Citibank, ICICI Bank and YES BANK.",
  },
  {
    title: "Areas of advisory",
    body: "Advice on FEMA, RBI, FDI, ODI, M&A, ECB, international trade and cross-border structuring matters.",
  },
  {
    title: "Bank and transaction coordination",
    body: "Experience coordinating with banks and trade teams, where relevant.",
  },
]
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Firm"
        title="Founder experience in cross-border banking"
        description="Founder Mukesh Dhoot has more than 20 years of banking and cross-border transaction experience. The firm provides advice on FEMA, RBI and related cross-border matters."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-white lg:sticky lg:top-28">
            <Image
              src="/images/mukesh-dhoot.jpg"
              alt="Mukesh Dhoot, Founder of Mukesh Dhoot & Associates"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={100}
              className="object-contain"
            />
            <div className="absolute bottom-4 left-4 max-w-[235px] rounded-2xl border border-border bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-5 sm:left-5 sm:p-5">
              <p className="font-serif text-3xl font-semibold leading-none text-foreground">20+ years</p>
              <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                Founder experience in banking and cross-border transactions
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>Mukesh Dhoot</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              More than 20 years of founder experience
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Mukesh Dhoot has more than 20 years of experience in banking and cross-border
                business, including former leadership roles with Citibank, ICICI Bank and YES BANK.
                His experience includes leading and structuring international transactions.
              </p>
              <p>
                His background includes work involving FEMA and RBI regulations and familiarity with
                how banks and trade teams operate. The firm offers advice on related
                matters, with scope based on applicable requirements and the agreed engagement.
              </p>
              <p>
                The firm provides advisory services on cross-border transactions and related regulatory
                matters. Support for a particular matter depends on its requirements and the agreed
                engagement.
              </p>
            </div>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Areas of expertise
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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
            <Eyebrow>Areas of advisory</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Founder background and areas of advisory
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
            <Eyebrow>Common service contexts</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Cross-border business and investment matters
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
