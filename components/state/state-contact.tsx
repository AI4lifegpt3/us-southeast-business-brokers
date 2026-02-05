"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Send } from "lucide-react"

export function StateContact({ state }: { state: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! Our " + state + " team will contact you shortly.")
    setFormData({ name: "", email: "", phone: "", businessType: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
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
                  <a href="mailto:info@southeastbusinessbrokers.com" className="text-muted-foreground hover:text-primary transition-colors">
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
          <div className="bg-background rounded-2xl p-8 border border-border">
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />
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

              <Button type="submit" size="lg" className="w-full">
                Request Consultation
                <Send className="ml-2 h-5 w-5" />
              </Button>

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
