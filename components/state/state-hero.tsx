import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

interface StateData {
  state: string
  tagline: string
  description: string
  image?: string
  stats: { value: string; label: string }[]
}

export function StateHero({ data }: { data: StateData }) {
  return (
    <section className="relative overflow-hidden bg-card">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-accent rounded-full" />
              {data.tagline}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {data.state} Business Brokers
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="#contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <a href="tel:+12052949148">
                  Call (205) 294-9148
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Local {data.state} Expertise</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Confidential Process</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>

          {/* Right side: hero image + stats */}
          <div className="space-y-6">
            {data.image && (
              <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={data.image}
                  alt={`${data.state} business district`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-6 ${
                    index === data.stats.length - 1
                      ? "bg-primary text-primary-foreground"
                      : "bg-background shadow-sm border border-border"
                  }`}
                >
                  <p className={`font-serif text-4xl font-bold ${
                    index === data.stats.length - 1 ? "" : "text-primary"
                  }`}>
                    {stat.value}
                  </p>
                  <p className={`text-sm mt-2 ${
                    index === data.stats.length - 1 ? "opacity-80" : "text-muted-foreground"
                  }`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
