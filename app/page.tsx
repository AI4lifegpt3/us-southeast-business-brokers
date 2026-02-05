import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { ProcessSection } from "@/components/home/process-section"
import { LocationsSection } from "@/components/home/locations-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"
import { ContactSection } from "@/components/home/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <LocationsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
