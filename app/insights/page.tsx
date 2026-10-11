import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { PageHero, Eyebrow, CtaBanner } from "@/components/shared"
import { insights, insightCategories } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles and selected regulatory references on FEMA, RBI directions, FDI, ODI, ECB, international trade and cross-border M&A.",
}

export default function InsightsPage() {
  const [featured, ...rest] = insights

  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Insights on cross-border business and regulation"
        description="Practical perspectives on FEMA, RBI regulations, international trade and M&A, alongside links to official reference material."
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
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
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
                <ArrowUpRight className="ml-auto h-5 w-5 text-secondary" />
              </div>
              <a
                href={featured.referenceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary underline-offset-4 hover:underline"
              >
                Official reference: {featured.referenceLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>

          {/* Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:bg-secondary/50"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
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
                </div>
                <a
                  href={post.referenceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Official reference: {post.referenceLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted/50 p-7 sm:p-9">
            <Eyebrow>Recent RBI updates</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
              Foreign exchange notifications
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              Browse official updates to FEMA regulations, including amendments on cross-border
              mergers, exports and reporting requirements.
            </p>
            <a
              href="https://m.rbi.org.in/scripts/Bs_FemaNotifications.aspx"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-md transition-colors hover:bg-accent/90"
            >
              View RBI notifications and updates <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Official RBI directions and notices may change; check the current source for each matter.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
