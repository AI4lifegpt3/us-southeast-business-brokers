"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function StateContact({ state }: { state: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: ""
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [phoneError, setPhoneError] = useState("")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const phoneDigits = formData.phone.replace(/\D/g, "")
    if (phoneDigits.length > 0 && phoneDigits.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number.")
      setStatus('idle')
      return
    }

    setPhoneError("")
    setStatus('loading')

    try {
      const response = await fetch('https://abb-form-handler.william-04f.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: `${state} - ${formData.businessType || 'General Inquiry'}` })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: "", email: "", phone: "", businessType: "", message: "" })
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', { send_to: 'AW-625595884/contact_form' });
          (window as any).gtag('event', 'conversion', { send_to: 'AW-303410735/contact_form' });
          (window as any).gtag('event', 'generate_lead', { event_category: 'Contact', event_label: `${state} Lead` });
        }
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact Our {state} Team</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
              Start Your {state} Business Journey
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Whether you&apos;re looking to sell your {state} business or find the perfect acquisition opportunity, our local team is here to help.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <a href="tel:+12052949148" className="text-muted-foreground hover:text-primary transition-colors">
                    (205) 294-9148
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Direct line to our {state} team</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <a href="mailto:info@southeastbusinessbrokers.com" className="text-muted-foreground hover:text-primary transition-colors break-all sm:break-normal">
                    info@southeastbusinessbrokers.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                  <p className="text-sm text-muted-foreground mt-1">Appointments available outside hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-5 sm:p-8 border border-border">
            <h3 className="font-semibold text-xl text-foreground mb-6">Request a Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
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
                      setPhoneError(digits.length === 0 || digits.length === 10 ? "" : "Please enter a valid 10-digit phone number.")
                    }}
                    onBlur={() => {
                      const digits = formData.phone.replace(/\D/g, "")
                      setPhoneError(digits.length === 0 || digits.length === 10 ? "" : "Please enter a valid 10-digit phone number.")
                    }}
                    inputMode="numeric"
                    maxLength={14}
                    placeholder="(555) 123-4567"
                  />
                  {phoneError ? <p className="mt-2 text-sm text-red-700">{phoneError}</p> : null}
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                    Business Type
                  </label>
                  <Input
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    placeholder="e.g., Restaurant, Retail"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Needs
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Are you looking to buy or sell? What's your timeline? Any specific requirements?"
                  rows={5}
                  required
                />
              </div>

              {status === 'success' ? (
                <div className="flex items-center justify-center gap-2 p-4 bg-green-500/10 text-green-700 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span>Thank you! Our {state} team will be in touch soon.</span>
                </div>
              ) : status === 'error' ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 p-4 bg-red-500/10 text-red-700 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                  <Button type="submit" size="lg" className="w-full" onClick={() => setStatus('idle')}>
                    Try Again
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              ) : status === 'loading' ? (
                <Button type="submit" size="lg" className="w-full" disabled>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </Button>
              ) : (
                <Button type="submit" size="lg" className="w-full">
                  Request Consultation
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              )}

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to a confidential consultation. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
