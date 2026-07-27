import Link from "next/link"
import { Button } from "@/components/ui/button"
import { approach } from "@/lib/site-data"

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
      <span className="h-px w-6 bg-accent" aria-hidden />
      {children}
    </span>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}

export function ApproachSection() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            A disciplined path from intent to execution
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every engagement follows a clear, repeatable method — so you always know where a
            transaction stands and what comes next.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((item) => (
            <div key={item.step} className="bg-card p-7">
              <span className="font-serif text-3xl font-semibold text-accent-foreground">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight md:text-4xl">
            Planning your next cross-border move?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/75">
            Speak with a senior advisor about structuring your transaction with confidence and
            compliance.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="rounded-sm bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Book a Consultation
          </Button>
          <Button
            render={<Link href="/services" />}
            size="lg"
            variant="outline"
            className="rounded-sm border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  )
}
