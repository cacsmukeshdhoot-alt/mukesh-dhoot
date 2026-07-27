// TODO: Integrate Supabase for contact form submissions.
"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { services } from "@/lib/site-data"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent-foreground" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">Thank you</h3>
        <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
          Your enquiry has been received. A senior advisor will be in touch shortly to schedule your
          consultation.
        </p>
        <Button className="mt-6 rounded-sm" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-card p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Your name" className="rounded-sm" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">Company / Organisation</Label>
          <Input id="company" name="company" placeholder="Company name" className="rounded-sm" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="rounded-sm"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+91" className="rounded-sm" />
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="service">Area of interest</Label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="h-9 w-full rounded-sm border border-input bg-transparent px-3 py-1 text-sm text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Other / General enquiry</option>
        </select>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us briefly about your transaction or requirement…"
          className="rounded-sm"
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full rounded-sm sm:w-auto">
        Book a Consultation
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        By submitting this form you agree to be contacted about your enquiry. We treat all
        information in strict confidence.
      </p>
    </form>
  )
}
