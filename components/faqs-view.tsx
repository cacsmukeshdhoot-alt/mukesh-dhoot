"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { faqs, faqGroups } from "@/lib/site-data"

export function FaqsView() {
  const [active, setActive] = useState<string>("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs.filter((f) => {
      const matchesGroup = active === "All" || f.group === active
      const matchesQuery =
        q === "" || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
      return matchesGroup && matchesQuery
    })
  }, [active, query])

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
      {/* Sidebar filters */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search FAQs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-sm pl-9"
            aria-label="Search FAQs"
          />
        </div>
        <div className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
          {["All", ...faqGroups].map((group) => (
            <button
              key={group}
              type="button"
              onClick={() => setActive(group)}
              className={`rounded-sm px-3 py-1.5 text-left text-sm font-medium transition-colors ${
                active === group
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </aside>

      {/* Accordion */}
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Showing {filtered.length} {filtered.length === 1 ? "question" : "questions"}
        </p>
        {filtered.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border bg-muted/40 p-8 text-center text-sm text-muted-foreground">
            No questions match your search. Try a different term or category.
          </p>
        ) : (
          <Accordion className="rounded-lg border border-border bg-card px-5">
            {filtered.map((f, i) => (
              <AccordionItem key={`${f.group}-${i}`} value={`${f.group}-${i}`}>
                <AccordionTrigger className="py-4 text-base font-semibold text-foreground">
                  <span className="pr-4">{f.q}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pr-6 leading-relaxed text-muted-foreground">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  )
}
