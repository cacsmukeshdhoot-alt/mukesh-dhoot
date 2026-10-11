import { CONTACT, approach } from "@/lib/site-data"

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
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
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
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
          <Eyebrow>Advisory process</Eyebrow>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Typical advisory steps
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The steps involved depend on the matter and the agreed engagement scope.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((item) => (
            <div key={item.step} className="bg-card p-7">
              <span className="font-serif text-3xl font-semibold text-accent">
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
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-2 md:items-center md:py-12">
        <div>
          <Eyebrow>Contact details</Eyebrow>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-foreground">Mukesh Dhoot &amp; Associates</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Website information is general. Advice on a specific matter is provided under a separate engagement.
          </p>
        </div>
        <div className="space-y-2 text-sm text-foreground md:text-right">
          <p><span className="font-medium">Email:</span> {CONTACT.email}</p>
          <p><span className="font-medium">Phone:</span> {CONTACT.phone}</p>
          <p><span className="font-medium">Office:</span> {CONTACT.location}</p>
        </div>
      </div>
    </section>
  )
}
