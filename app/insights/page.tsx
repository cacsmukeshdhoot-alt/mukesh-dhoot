import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { PageHero, Eyebrow, CtaBanner } from "@/components/shared"
import { insights, insightCategories } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles, case studies and regulatory updates on FEMA, RBI circulars, FDI, ODI, ECB, international trade, treasury and cross-border M&A.",
}

export default function InsightsPage() {
  const [featured, ...rest] = insights

  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Insights on cross-border business and regulation"
        description="Practical perspectives on FEMA, RBI regulations, international trade, treasury and M&A — written in plain language for decision-makers."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex flex-wrap gap-2.5">
            {insightCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-sm border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured */}
          <article className="group mt-12 grid gap-8 rounded-lg border border-border bg-primary p-8 text-primary-foreground md:grid-cols-2 md:p-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Featured — {featured.category}
              </span>
              <h2 className="mt-4 text-balance font-serif text-2xl font-semibold leading-snug md:text-3xl">
                {featured.title}
              </h2>
            </div>
            <div className="flex flex-col justify-between">
              <p className="leading-relaxed text-primary-foreground/75">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-3 text-xs text-primary-foreground/60">
                <span>{featured.date}</span>
                <span aria-hidden>•</span>
                <span>{featured.readTime}</span>
                <ArrowUpRight className="ml-auto h-5 w-5 text-accent" />
              </div>
            </div>
          </article>

          {/* Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
                  {post.category}
                </span>
                <h3 className="mt-3 text-pretty font-serif text-lg font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span aria-hidden>•</span>
                  <span>{post.readTime}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-dashed border-border bg-muted/40 p-8 text-center">
            <Eyebrow>Stay Informed</Eyebrow>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              New articles, regulatory updates and RBI circular summaries are published regularly.
              Subscribe by writing to us and we&apos;ll keep you informed.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
