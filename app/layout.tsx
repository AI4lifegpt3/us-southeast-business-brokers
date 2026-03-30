import React from "react"
import Script from "next/script"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Runway Business Brokers | Buy & Sell Businesses',
  description: 'Expert business brokerage services across the Southeastern United States. We help you buy, sell, or merge businesses with trusted systems that deliver results.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9DV65K585R"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9DV65K585R');
            gtag('config', 'AW-625595884');
            gtag('config', 'AW-303410735');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
