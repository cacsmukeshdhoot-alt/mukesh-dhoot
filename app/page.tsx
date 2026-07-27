import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/home/hero"
import { ServiceCard } from "@/components/service-card"
import { Eyebrow, ApproachSection, CtaBanner } from "@/components/shared"
import { services, industries, whyChooseUs, audiences, insights } from "@/lib/site-data"

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Audiences strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by corporates, funds, banks and advisors across borders
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {audiences.slice(0, 8).map((a) => (
              <span key={a} className="text-sm font-medium text-foreground/70">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/mukesh-dhoot.png"
                alt="Mukesh Dhoot, Founder of Mukesh Dhoot & Associates"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-lg border border-border bg-card p-5 shadow-sm sm:block">
              <p className="font-serif text-3xl font-semibold text-accent-foreground">20+</p>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">
                years of banking and cross-border transaction leadership
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>About the Firm</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              A strategic advisor
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Mukesh Dhoot brings over two decades of experience, including former leadership roles
              with Citibank, ICICI Bank and YES BANK. The firm combines deep regulatory command with
              real transaction execution.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our expertise spans FEMA, RBI regulations, FDI, ODI, M&amp;A, ECB, trade finance,
              treasury, international payments and cross-border structuring — always applied with a
              commercial, business-first lens.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "FEMA & RBI regulatory expertise",
                "FDI, ODI & ECB structuring",
                "Cross-border M&A execution",
                " advisory",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 rounded-sm">
              <Link href="/about">
                More about the firm <ArrowRight className="ml-1.5 h-4 w-4" />
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
                Everything your business needs to expand globally
              </h2>
            </div>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Ten focused practices covering the full spectrum of cross-border business, regulation
              and treasury.
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
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Regulatory expertise meets commercial and banking experience
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className="border-t-2 border-accent/40 pt-5">
                <span className="font-serif text-sm font-semibold text-accent-foreground">
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
              Sector fluency across the global economy
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              We advise businesses and investors across a broad range of industries, tailoring
              structures to each sector&apos;s realities.
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

      {/* Testimonials placeholder */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <Quote className="mx-auto h-8 w-8 text-accent-foreground" />
          <p className="mx-auto mt-6 max-w-2xl text-balance font-serif text-2xl font-medium leading-snug text-foreground md:text-3xl">
            Client testimonials will be featured here as we continue to build long-term advisory
            relationships across borders.
          </p>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Testimonials — Coming Soon
          </p>
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
            <Button asChild variant="outline" className="rounded-sm bg-transparent">
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
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
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
