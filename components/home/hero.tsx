import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "3", label: "Leading banks led" },
  { value: "10", label: "Advisory practices" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <Image
        src="/images/hero-global.png"
        alt="Abstract world map showing global trade routes and financial flows"
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28 lg:py-32">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden />
          Cross-Border Business Advisory
        </span>

        <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.08] md:text-6xl">
          Cross-Border Advisory. Simplified. Strategic. Compliant.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          Helping businesses navigate international expansion through expert advisory on FEMA, RBI
          regulations, cross-border investments, international trade, treasury and transaction
          structuring.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="rounded-sm bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Book a Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            variant="outline"
            className="rounded-sm border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Talk to an Expert
          </Button>
          <Button
            render={<Link href="/services" />}
            size="lg"
            variant="ghost"
            className="rounded-sm text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Explore Services
          </Button>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-3xl font-semibold text-accent md:text-4xl">{s.value}</dd>
              <p className="mt-1 text-xs leading-snug text-primary-foreground/70 md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
