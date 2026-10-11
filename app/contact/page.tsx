import type { Metadata } from "next"
import type { ComponentProps } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { PageHero } from "@/components/shared"
import { ContactForm } from "@/components/contact-form"
import { CONTACT } from "@/lib/site-data"

function Linkedin(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact details for general inquiries about cross-border business, FEMA, RBI, trade, treasury and transaction structuring matters.",
}

const details = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with us", href: CONTACT.linkedin },
  { icon: MapPin, label: "Office", value: CONTACT.location },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact information"
        description="Contact details and an inquiry form for cross-border business, FEMA, RBI, trade, treasury and transaction structuring matters."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1fr_1.2fr]">
          {/* Details */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Contact details
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Use the contact details below or the inquiry form for general questions.
              
            </p>

            <ul className="mt-8 space-y-4">
              {details.map((d) => {
                const Icon = d.icon
                const content = (
                  <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/5 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">{d.value}</p>
                    </div>
                  </div>
                )
                return (
                  <li key={d.label}>
                    {d.href ? (
                      <a href={d.href} className="block transition-opacity hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
              <li>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/5 text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Hours
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Mon – Fri, 9:30 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps?q=One%20World%20Center%20Mumbai&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
