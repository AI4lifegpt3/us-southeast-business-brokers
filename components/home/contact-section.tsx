"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact Us</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Ready to buy or sell a business? Our expert brokers are here to guide you through every step of the process.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+12052949148" className="text-muted-foreground hover:text-primary transition-colors">
                    (205) 294-9148
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@southeastbusinessbrokers.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@southeastbusinessbrokers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Main Office</h3>
                  <p className="text-muted-foreground">312 6th Street</p>
                  <p className="text-muted-foreground">Clanton, AL 35045</p>
                  <p className="text-muted-foreground text-sm mt-1">Serving the Southeast US</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="font-semibold text-xl text-foreground mb-6">Send Us a Message</h3>
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
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Selling my business"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your business and how we can help..."
                  rows={5}
                  required
                />
              </div>

              {status === 'success' ? (
                <div className="flex items-center justify-center gap-2 p-4 bg-green-500/10 text-green-700 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span>Thank you! We&apos;ll be in touch soon.</span>
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
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
