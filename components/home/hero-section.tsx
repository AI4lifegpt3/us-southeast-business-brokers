import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
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
              Trusted Systems That Sell Businesses
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Expert Business Brokers Across the Southeast
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We are US Southeast Business Brokers, where expertise meets unparalleled service. As seasoned business brokers specializing in facilitating seamless transactions, our team stands as the foremost authority throughout Alabama and Georgia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base">
                <Link href="#contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
                <Link href="#services">
                  Our Services
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Free Business Valuations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>100% Confidential Process</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Expert Negotiation</span>
              </div>
            </div>
          </div>

          {/* Hero image and stats */}
          <div className="relative">
            {/* Main hero image */}
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hero-deal.png"
                alt="Successful business deal - handshake"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Brad's photo overlay */}
            <div className="absolute -bottom-8 -left-4 z-10">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 border-background">
                <Image
                  src="/brad-headshot.jpg"
                  alt="Brad - Lead Business Broker"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mt-12">
              <div className="bg-background rounded-xl p-4 shadow-sm border border-border text-center">
                <p className="font-serif text-2xl font-bold text-primary">500+</p>
                <p className="text-xs text-muted-foreground mt-1">Sold</p>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-sm border border-border text-center">
                <p className="font-serif text-2xl font-bold text-primary">18+</p>
                <p className="text-xs text-muted-foreground mt-1">Years</p>
              </div>
              <div className="bg-background rounded-xl p-4 shadow-sm border border-border text-center">
                <p className="font-serif text-2xl font-bold text-primary">98%</p>
                <p className="text-xs text-muted-foreground mt-1">Satisfaction</p>
              </div>
              <div className="bg-primary rounded-xl p-4 text-primary-foreground text-center">
                <p className="font-serif text-2xl font-bold">2</p>
                <p className="text-xs opacity-80 mt-1">States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
