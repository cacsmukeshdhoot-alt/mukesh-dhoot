import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/home/hero"
import { ServiceCard } from "@/components/service-card"
import { Eyebrow, ApproachSection, CtaBanner } from "@/components/shared"
import { services, industries, whyChooseUs, insights } from "@/lib/site-data"

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About preview */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white">
              <Image
                src="/images/mukesh-dhoot.jpg"
                alt="Mukesh Dhoot, Founder of Mukesh Dhoot & Associates"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-4 max-w-[235px] rounded-2xl border border-border bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-5 sm:left-5 sm:p-5">
              <p className="font-serif text-3xl font-semibold leading-none text-foreground">20+ years</p>
              <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                Founder experience in banking and cross-border transactions
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>About the Firm</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Cross-border advisory
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Founder Mukesh Dhoot has more than 20 years of banking and cross-border transaction
              experience, including former leadership roles with Citibank, ICICI Bank and YES BANK.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The firm offers advice on FEMA, RBI regulations, FDI, ODI, M&amp;A, ECB, trade finance,
              international payments and cross-border structuring.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "FEMA and RBI matters",
                "FDI, ODI and ECB",
                "Cross-border M&A",
                "Trade and payments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link href="/about">
                About the firm <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Advisory Services</Eyebrow>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Advisory for cross-border expansion.
              </h2>
            </div>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Advice across FEMA, cross-border M&amp;A, trade, payments, RBI, NRI, startup and
              banking matters.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Experience and Services</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Founder experience and advisory services
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-serif text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApproachSection />

      {/* Industries */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Industries</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Cross-border considerations by industry
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Industry-specific considerations for cross-border business and investment.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-sm border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Insights</Eyebrow>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
                From our knowledge centre
              </h2>
            </div>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/insights">
                View all insights <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insights.slice(0, 3).map((post) => (
              <article
                key={post.title}
                className="flex flex-col rounded-lg border border-border bg-card p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {post.category}
                </span>
                <h3 className="mt-3 text-pretty font-serif text-lg font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span aria-hidden>•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
