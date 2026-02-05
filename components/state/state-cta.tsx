import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function StateCTA({ state }: { state: string }) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-balance">
          Ready to Buy or Sell a Business in {state}?
        </h2>
        <p className="opacity-80 mt-4 leading-relaxed max-w-2xl mx-auto">
          Take the first step toward your business goals. Our {state} business brokers are ready to help you navigate the process with expertise and care.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="text-base">
            <Link href="#contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
            <a href="tel:+12052949148" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Call (205) 294-9148
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
