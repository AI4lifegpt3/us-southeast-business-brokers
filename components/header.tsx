"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Menu, X, Phone, Mail, ChevronDown, MapPin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+12052949148" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(205) 294-9148</span>
            </a>
            <a href="mailto:info@southeastbusinessbrokers.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@southeastbusinessbrokers.com</span>
            </a>
          </div>
          <span className="text-xs opacity-80">Trusted Systems That Sell Businesses</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="relative w-64 h-14 block">
            <Image
              src="/logo.png"
              alt="US Southeast Business Brokers"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            {/* Locations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
                <MapPin className="h-4 w-4" />
                Locations
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/alabama" className="flex items-center gap-2 cursor-pointer">
                    <span className="font-medium">Alabama</span>
                    <span className="text-xs text-muted-foreground ml-auto">Birmingham, Montgomery...</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/georgia" className="flex items-center gap-2 cursor-pointer">
                    <span className="font-medium">Georgia</span>
                    <span className="text-xs text-muted-foreground ml-auto">Atlanta, Savannah...</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <div className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Locations
                </span>
                <div className="pl-6 space-y-2">
                  <Link href="/alabama" className="block text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Alabama
                  </Link>
                  <Link href="/georgia" className="block text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Georgia
                  </Link>
                </div>
              </div>
              <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <Button asChild className="w-fit">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
