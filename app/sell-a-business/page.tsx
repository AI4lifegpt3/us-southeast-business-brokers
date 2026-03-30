"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  Send,
  AlertCircle,
  Loader2,
  Phone,
  Clock,
  BarChart3,
} from "lucide-react"

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10)
  return digits.length > 6
    ? `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    : digits.length > 3
    ? `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    : digits.length > 0
    ? `(${digits}`
    : ""
}

const steps = [
  {
    icon: Phone,
    title: "Free Consultation",
    description:
      "We start with a confidential conversation to understand your business, goals, and timeline.",
  },
  {
    icon: BarChart3,
    title: "Business Valuation",
    description:
      "Our team performs a comprehensive valuation using industry multiples, financials, and market data.",
  },
  {
    icon: Users,
    title: "Buyer Matching",
    description:
      "We tap our extensive network of qualified, pre-screened buyers looking for businesses like yours.",
  },
  {
    icon: DollarSign,
    title: "Close the Deal",
    description:
      "We negotiate the best terms and manage every detail through a smooth, confidential closing.",
  },
]

const benefits = [
  "Free, no-obligation business valuation",
  "100% confidential process from start to finish",
  "Access to our network of 5,000+ qualified buyers",
  "Expert negotiation to maximize your sale price",
  "Full support through due diligence and closing",
  "18+ years of experience selling Southeast businesses",
]

export default function SellABusinessPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    annualRevenue: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [phoneError, setPhoneError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const phoneDigits = formData.phone.replace(/\D/g, "")
    if (phoneDigits.length > 0 && phoneDigits.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number.")
      setStatus("idle")
      return
    }

    setPhoneError("")
    setStatus("loading")

    try {
      const response = await fetch("https://abb-form-handler.william-04f.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Sell a Business - ${formData.businessName || "Valuation Request"}`,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          annualRevenue: "",
          message: "",
        })
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "conversion", {
            send_to: "AW-625595884/contact_form",
          })
          ;(window as any).gtag("event", "conversion", {
            send_to: "AW-303410735/contact_form",
          })
          ;(window as any).gtag("event", "generate_lead", {
            event_category: "Contact",
            event_label: "Sell a Business",
          })
        }
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-white/5 rounded-l-full" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Free Confidential Business Valuation
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Ready to Sell Your Business?
                </h1>
                <p className="text-lg leading-relaxed opacity-90 max-w-xl">
                  Get a free, no-obligation valuation and discover what your business is
                  worth. Our expert brokers have helped 500+ Southeast business owners
                  achieve top-dollar exits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="text-base"
                  >
                    <Link href="#valuation-form">
                      Get Your Free Valuation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-base bg-transparent border-white/30 text-white hover:bg-white/10"
                  >
                    <a href="tel:+12052949148">
                      <Phone className="mr-2 h-5 w-5" />
                      (205) 294-9148
                    </a>
                  </Button>
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="font-serif text-3xl sm:text-4xl font-bold">500+</p>
                  <p className="text-sm opacity-80 mt-2">Businesses Sold</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="font-serif text-3xl sm:text-4xl font-bold">18+</p>
                  <p className="text-sm opacity-80 mt-2">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <p className="font-serif text-3xl sm:text-4xl font-bold">98%</p>
                  <p className="text-sm opacity-80 mt-2">Client Satisfaction</p>
                </div>
                <div className="bg-accent/80 backdrop-blur-sm rounded-2xl p-6 text-center text-accent-foreground">
                  <p className="font-serif text-3xl sm:text-4xl font-bold">$100M+</p>
                  <p className="text-sm opacity-80 mt-2">Total Value Sold</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4">
                How We Sell Your Business
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                A proven four-step process designed to maximize your sale price while
                keeping everything confidential.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={step.title} className="relative">
                  <div className="bg-card rounded-2xl p-6 border border-border h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-2">
                      STEP {i + 1}
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits + Form */}
        <section
          id="valuation-form"
          className="py-16 sm:py-20 md:py-24 bg-card"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left: Benefits */}
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Why Sell With Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
                  Maximize Your Business Value
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Selling a business is one of the biggest financial decisions you will
                  ever make. Our experienced team ensures you get the best possible
                  outcome.
                </p>

                <div className="mt-8 space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="bg-background rounded-xl p-4 border border-border text-center">
                    <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">
                      100% Confidential
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-4 border border-border text-center">
                    <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">
                      Top Dollar
                    </p>
                  </div>
                  <div className="bg-background rounded-xl p-4 border border-border text-center">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground">
                      Fast Process
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Valuation Form */}
              <div className="bg-background rounded-2xl p-5 sm:p-8 border border-border">
                <h3 className="font-semibold text-xl text-foreground mb-2">
                  Get Your Free Business Valuation
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form below and a broker will contact you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          const formatted = formatPhone(e.target.value)
                          setFormData({ ...formData, phone: formatted })
                          const digits = formatted.replace(/\D/g, "")
                          setPhoneError(
                            digits.length === 0 || digits.length === 10
                              ? ""
                              : "Please enter a valid 10-digit phone number."
                          )
                        }}
                        onBlur={() => {
                          const digits = formData.phone.replace(/\D/g, "")
                          setPhoneError(
                            digits.length === 0 || digits.length === 10
                              ? ""
                              : "Please enter a valid 10-digit phone number."
                          )
                        }}
                        inputMode="numeric"
                        maxLength={14}
                        placeholder="(555) 123-4567"
                      />
                      {phoneError ? (
                        <p className="mt-2 text-sm text-red-700">{phoneError}</p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Business Name
                      </label>
                      <Input
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            businessName: e.target.value,
                          })
                        }
                        placeholder="Your Business LLC"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="annualRevenue"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Approximate Annual Revenue
                    </label>
                    <Input
                      id="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          annualRevenue: e.target.value,
                        })
                      }
                      placeholder="e.g., $500,000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Tell Us About Your Business
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Industry, years in operation, reason for selling, any other details..."
                      rows={4}
                      required
                    />
                  </div>

                  {status === "success" ? (
                    <div className="flex items-center justify-center gap-2 p-4 bg-green-500/10 text-green-700 rounded-lg">
                      <CheckCircle className="h-5 w-5" />
                      <span>
                        Thank you! A broker will contact you within 24 hours.
                      </span>
                    </div>
                  ) : status === "error" ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 p-4 bg-red-500/10 text-red-700 rounded-lg">
                        <AlertCircle className="h-5 w-5" />
                        <span>
                          Something went wrong. Please try again or call us
                          directly.
                        </span>
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        onClick={() => setStatus("idle")}
                      >
                        Try Again
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  ) : status === "loading" ? (
                    <Button type="submit" size="lg" className="w-full" disabled>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </Button>
                  ) : (
                    <Button type="submit" size="lg" className="w-full">
                      Request Free Valuation
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to a confidential
                    consultation. Your information will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Don&apos;t Leave Money on the Table
            </h2>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Business owners who work with professional brokers sell for an average of
              20-30% more than those who sell on their own. Let us help you get what
              your business is truly worth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link href="#valuation-form">
                  Get Your Free Valuation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base bg-transparent border-white/30 text-white hover:bg-white/10"
              >
                <a href="tel:+12052949148">Call (205) 294-9148</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
