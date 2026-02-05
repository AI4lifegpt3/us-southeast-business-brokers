import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StateHero } from "@/components/state/state-hero"
import { StateServices } from "@/components/state/state-services"
import { StateCities } from "@/components/state/state-cities"
import { StateWhyUs } from "@/components/state/state-why-us"
import { StateCTA } from "@/components/state/state-cta"
import { StateContact } from "@/components/state/state-contact"

export const metadata: Metadata = {
  title: "Georgia Business Brokers | Buy & Sell Businesses in Georgia",
  description: "Expert business brokerage services in Georgia. We help you buy, sell, or merge businesses in Atlanta, Augusta, Savannah, Columbus and throughout the state."
}

const georgiaData = {
  state: "Georgia",
  tagline: "The Peach State",
  image: "/hero-georgia.png",
  description: "We are your trusted Georgia Business Brokers, delivering exceptional results across the Peach State. From Atlanta's bustling metro to Savannah's historic business district, our team provides expert guidance for all your business transaction needs.",
  cities: [
    { name: "Atlanta", description: "Georgia's capital and major business hub" },
    { name: "Augusta", description: "Historic city with diverse economy" },
    { name: "Savannah", description: "Port city with tourism and industry" },
    { name: "Columbus", description: "Manufacturing and military center" },
    { name: "Macon", description: "Central Georgia's commercial heart" },
    { name: "Athens", description: "University town with vibrant market" },
    { name: "Sandy Springs", description: "Major Atlanta suburb business center" },
    { name: "Roswell", description: "Growing north Atlanta corridor" }
  ],
  stats: [
    { value: "300+", label: "Georgia Businesses Sold" },
    { value: "12+", label: "Years in Georgia" },
    { value: "97%", label: "Success Rate" },
    { value: "$75M+", label: "Total Transaction Value" }
  ],
  industries: [
    "Technology",
    "Film & Entertainment",
    "Healthcare",
    "Logistics",
    "Manufacturing",
    "Retail",
    "Hospitality",
    "Professional Services"
  ]
}

export default function GeorgiaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <StateHero data={georgiaData} />
        <StateContact state={georgiaData.state} />
        <StateServices state={georgiaData.state} />
        <StateCities data={georgiaData} />
        <StateWhyUs state={georgiaData.state} />
        <StateCTA state={georgiaData.state} />
      </main>
      <Footer />
    </div>
  )
}
