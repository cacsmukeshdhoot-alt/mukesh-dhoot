import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Service } from "@/lib/site-data"

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col bg-card p-7 transition-colors hover:bg-secondary"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
    </Link>
  )
}
