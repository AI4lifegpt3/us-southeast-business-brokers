import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background skyline image */}
      <div className="absolute inset-0">
        <Image
          src="/skyline-birmingham.png"
          alt="Southeast business district"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-balance">
          Ready to Sell Your Business?
        </h2>
        <p className="mt-4 leading-relaxed max-w-2xl mx-auto opacity-90">
          Contact US Southeast Business Brokers today for a free, confidential consultation.
          Let our experience work for you.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-base bg-white text-primary hover:bg-white/90">
            <Link href="#contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base border-white text-white hover:bg-white/10 bg-transparent">
            <a href="tel:+12052949148">
              Call (205) 294-9148
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
