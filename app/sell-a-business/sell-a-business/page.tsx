"use client"

import React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

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

const industries = [
  { value: "", label: "Select an Industry" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail" },
  { value: "services", label: "Services" },
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "other", label: "Other" },
]

const revenueRanges = [
  { value: "", label: "Select Range" },
  { value: "under-500k", label: "Under $500,000" },
  { value: "500k-1m", label: "$500,000 - $1,000,000" },
  { value: "1m-5m", label: "$1,000,000 - $5,000,000" },
  { value: "5m-10m", label: "$5,000,000 - $10,000,000" },
  { value: "over-10m", label: "Over $10,000,000" },
]

const processSteps = [
  {
    num: "01",
    title: "Business Evaluation",
    description:
      "We comprehensively evaluate your financials, market position, and assets to determine a fair market value.",
  },
  {
    num: "02",
    title: "Strategic Marketing",
    description:
      "We create confidential, high-impact marketing materials and present them to our vetted network of buyers.",
  },
  {
    num: "03",
    title: "Negotiation",
    description:
      "We manage all inquiries, screen buyers, and negotiate offers to secure the best possible terms for you.",
  },
  {
    num: "04",
    title: "Closing the Deal",
    description:
      "We guide you through due diligence, legal paperwork, and closing procedures for a seamless transition.",
  },
]

const benefits = [
  "100% Confidential Process",
  "Institutional-Grade Valuation",
  "Targeted Buyer Marketing",
  "Expert Negotiation",
]

export default function SellABusinessPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    annualRevenue: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [phoneError, setPhoneError] = useState("")

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.businessName || !formData.industry || !formData.annualRevenue) return
    setStep(2)
  }

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
          businessName: "",
          industry: "",
          annualRevenue: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setStep(1)
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

  const inputClasses =
    "w-full p-3 rounded-lg text-sm outline-none transition-colors border border-[#E2DDD6] bg-white text-[#0F2235] focus:border-[#C8A44B]"
  const selectClasses =
    "w-full p-3 rounded-lg text-sm outline-none transition-colors border border-[#E2DDD6] bg-white text-[#0F2235] focus:border-[#C8A44B]"
  const labelClasses = "text-sm font-medium text-[#374151]"

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden" style={{ background: "#F7F5F0" }}>
          <div className="absolute inset-0 z-0">
            <img
              alt="Sell your business"
              className="object-cover opacity-20 absolute inset-0 w-full h-full"
              src="/images/process-deal-signing.jpg"
            />
            <div className="absolute inset-0" style={{ background: "rgba(247,245,240,0.82)" }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <span
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{ color: "#C8A44B" }}
                >
                  Maximize Your Value
                </span>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mt-4 mb-6"
                  style={{ color: "#0F2235" }}
                >
                  Sell Your Business With Confidence
                </h1>
                <p className="text-lg mb-8" style={{ color: "#6B7280" }}>
                  Get the most value for your business with our proven marketing strategies and
                  extensive buyer network. We handle the complexities so you can focus on running
                  your company.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        style={{ color: "#C8A44B" }}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      <span className="font-medium" style={{ color: "#0F2235" }}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Multi-step Form */}
              <div
                className="p-8 rounded-2xl shadow-xl"
                style={{ background: "#FFFFFF", border: "1px solid #E2DDD6" }}
              >
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-8">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                    <h3 className="text-2xl font-bold font-serif" style={{ color: "#0F2235" }}>
                      Thank You!
                    </h3>
                    <p className="text-center" style={{ color: "#6B7280" }}>
                      A broker will contact you within 24 hours to discuss your business valuation.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold font-serif" style={{ color: "#0F2235" }}>
                        Get Your Free Valuation
                      </h3>
                      <span className="text-sm font-semibold" style={{ color: "#6B7280" }}>
                        Step {step} of 2
                      </span>
                    </div>

                    <form
                      className="space-y-4"
                      onSubmit={step === 1 ? handleNextStep : handleSubmit}
                    >
                      {step === 1 ? (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                          <div className="space-y-2">
                            <label className={labelClasses}>Business Name *</label>
                            <input
                              type="text"
                              className={inputClasses}
                              placeholder="Your Business Name"
                              required
                              value={formData.businessName}
                              onChange={(e) =>
                                setFormData({ ...formData, businessName: e.target.value })
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <label className={labelClasses}>Industry *</label>
                            <select
                              className={selectClasses}
                              required
                              value={formData.industry}
                              onChange={(e) =>
                                setFormData({ ...formData, industry: e.target.value })
                              }
                            >
                              {industries.map((ind) => (
                                <option key={ind.value} value={ind.value}>
                                  {ind.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="space-y-2">
                            <label className={labelClasses}>Annual Revenue (Approx) *</label>
                            <select
                              className={selectClasses}
                              required
                              value={formData.annualRevenue}
                              onChange={(e) =>
                                setFormData({ ...formData, annualRevenue: e.target.value })
                              }
                            >
                              {revenueRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                  {range.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <button
                            className="whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 w-full py-6 text-lg mt-4 font-bold flex items-center justify-center gap-2"
                            type="submit"
                            style={{ background: "#0F2235", color: "white" }}
                          >
                            Next Step <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                          <div className="space-y-2">
                            <label className={labelClasses}>Full Name *</label>
                            <input
                              type="text"
                              className={inputClasses}
                              placeholder="Your Full Name"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <label className={labelClasses}>Email Address *</label>
                            <input
                              type="email"
                              className={inputClasses}
                              placeholder="you@example.com"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <label className={labelClasses}>Phone Number</label>
                            <input
                              type="tel"
                              className={inputClasses}
                              placeholder="(555) 123-4567"
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
                            />
                            {phoneError ? (
                              <p className="mt-1 text-sm text-red-700">{phoneError}</p>
                            ) : null}
                          </div>

                          <div className="space-y-2">
                            <label className={labelClasses}>Message</label>
                            <textarea
                              className={`${inputClasses} resize-none`}
                              placeholder="Tell us about your business and goals..."
                              rows={3}
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                              }
                            />
                          </div>

                          <div className="flex gap-3 mt-4">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="whitespace-nowrap rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-6 py-6 text-base font-bold flex items-center justify-center gap-2 border"
                              style={{
                                background: "white",
                                color: "#0F2235",
                                borderColor: "#E2DDD6",
                              }}
                            >
                              <ArrowLeft className="w-4 h-4" /> Back
                            </button>

                            {status === "error" ? (
                              <div className="flex-1 space-y-2">
                                <div className="flex items-center justify-center gap-2 p-3 bg-red-500/10 text-red-700 rounded-lg text-sm">
                                  <AlertCircle className="h-4 w-4" />
                                  <span>Something went wrong. Please try again.</span>
                                </div>
                                <button
                                  type="submit"
                                  onClick={() => setStatus("idle")}
                                  className="whitespace-nowrap rounded-full transition-colors w-full py-6 text-lg font-bold flex items-center justify-center gap-2"
                                  style={{ background: "#0F2235", color: "white" }}
                                >
                                  Try Again
                                </button>
                              </div>
                            ) : status === "loading" ? (
                              <button
                                type="submit"
                                disabled
                                className="flex-1 whitespace-nowrap rounded-full transition-colors py-6 text-lg font-bold flex items-center justify-center gap-2 opacity-70"
                                style={{ background: "#0F2235", color: "white" }}
                              >
                                <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                              </button>
                            ) : (
                              <button
                                type="submit"
                                className="flex-1 whitespace-nowrap rounded-full transition-colors py-6 text-lg font-bold flex items-center justify-center gap-2 hover:opacity-90"
                                style={{ background: "#0F2235", color: "white" }}
                              >
                                Get My Valuation <ArrowRight className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* How To Sell Your Business - 4-step Process */}
        <section className="py-20" style={{ background: "#F0EDE6" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className="text-3xl font-bold font-serif mb-4"
                style={{ color: "#0F2235" }}
              >
                How To Sell Your Business
              </h2>
              <p style={{ color: "#6B7280" }}>
                Unlock the path to a successful business sale with our proven process. Trust us to
                maximize the value of your business and ensure a smooth transition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((s) => (
                <div
                  key={s.num}
                  className="p-6 rounded-xl shadow-sm"
                  style={{ background: "#FFFFFF", border: "1px solid #E2DDD6" }}
                >
                  <div
                    className="text-4xl font-black mb-4 opacity-20"
                    style={{ color: "#0F2235" }}
                  >
                    {s.num}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F2235" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
