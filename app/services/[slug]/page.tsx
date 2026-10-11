import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react"
import { ApproachSection, CtaBanner } from "@/components/shared"
import { services } from "@/lib/site-data"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.summary,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = service.icon
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4)

  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-sm bg-accent text-accent-foreground">
            <Icon className="h-6 w-6" />
          </span>
          <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-secondary md:text-lg">
            {service.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              What we cover
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              The following topics may be covered, depending on the matter and agreed engagement scope.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Related services
              </h3>
              <ul className="mt-4 space-y-1">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/services/${o.slug}`}
                      className="group flex items-center justify-between gap-2 border-b border-border py-3 text-sm font-medium text-foreground last:border-0"
                    >
                      {o.title}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <ApproachSection />
      <CtaBanner />
    </>
  )
}
