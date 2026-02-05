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
  title: "Alabama Business Brokers | Buy & Sell Businesses in Alabama",
  description: "Expert business brokerage services in Alabama. We help you buy, sell, or merge businesses in Birmingham, Montgomery, Huntsville, Mobile and throughout the state."
}

const alabamaData = {
  state: "Alabama",
  tagline: "The Heart of Dixie",
  image: "/hero-alabama.png",
  description: "We are your trusted Alabama Business Brokers, where expertise meets unparalleled service. As seasoned business brokers specializing in facilitating seamless transactions, our team stands as the foremost authority in Birmingham and throughout the state.",
  cities: [
    { name: "Birmingham", description: "Alabama's largest city and economic hub" },
    { name: "Montgomery", description: "The capital city with growing opportunities" },
    { name: "Huntsville", description: "Tech and aerospace industry center" },
    { name: "Mobile", description: "Port city with diverse business landscape" },
    { name: "Tuscaloosa", description: "University town with strong retail market" },
    { name: "Hoover", description: "Thriving suburban business community" },
    { name: "Dothan", description: "The Wiregrass region's commercial center" },
    { name: "Auburn", description: "Growing education and tech corridor" }
  ],
  stats: [
    { value: "200+", label: "Alabama Businesses Sold" },
    { value: "15+", label: "Years in Alabama" },
    { value: "95%", label: "Success Rate" },
    { value: "$50M+", label: "Total Transaction Value" }
  ],
  industries: [
    "Manufacturing",
    "Healthcare",
    "Retail",
    "Restaurants",
    "Construction",
    "Professional Services",
    "Automotive",
    "Agriculture"
  ]
}

export default function AlabamaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <StateHero data={alabamaData} />
        <StateContact state={alabamaData.state} />
        <StateServices state={alabamaData.state} />
        <StateCities data={alabamaData} />
        <StateWhyUs state={alabamaData.state} />
        <StateCTA state={alabamaData.state} />
      </main>
      <Footer />
    </div>
  )
}
