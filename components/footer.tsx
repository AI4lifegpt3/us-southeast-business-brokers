import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-44 h-12">
                <Image
                  src="/logo.png"
                  alt="US Southeast Business Brokers"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Expert business brokerage services across the Southeastern United States. We help business owners achieve their goals with trusted systems that deliver results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><Link href="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link href="/alabama" className="hover:opacity-100 transition-opacity">Alabama</Link></li>
              <li><Link href="/georgia" className="hover:opacity-100 transition-opacity">Georgia</Link></li>
              <li><Link href="#services" className="hover:opacity-100 transition-opacity">Our Services</Link></li>
              <li><Link href="#faq" className="hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li>Sell Your Business</li>
              <li>Buy A Business</li>
              <li>Business Valuations</li>
              <li>Mergers & Acquisitions</li>
              <li>Free Consultations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 opacity-70" />
                <div>
                  <p className="opacity-70">Call Us</p>
                  <a href="tel:+12052949148" className="hover:opacity-70 transition-opacity">(205) 294-9148</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 opacity-70" />
                <div>
                  <p className="opacity-70">Email Us</p>
                  <a href="mailto:info@southeastbusinessbrokers.com" className="hover:opacity-70 transition-opacity">info@southeastbusinessbrokers.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-70" />
                <div>
                  <p className="opacity-70">Main Office</p>
                  <p>312 6th Street</p>
                  <p>Clanton, AL 35045</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} US Southeast Business Brokers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
