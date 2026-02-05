import { TrendingUp, Search, MessageSquare, FileCheck, Users, BarChart3 } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Sell Your Business",
    description: "Get the most value for your business with our proven marketing strategies and extensive buyer network."
  },
  {
    icon: Search,
    title: "Buy A Business",
    description: "Our brokers will help you find the perfect business opportunity that matches your goals and budget."
  },
  {
    icon: BarChart3,
    title: "Business Valuations",
    description: "Comprehensive business evaluations using industry benchmarks to determine fair market value."
  },
  {
    icon: Users,
    title: "Mergers & Acquisitions",
    description: "Expert guidance through complex M&A transactions to maximize value and minimize risk."
  },
  {
    icon: FileCheck,
    title: "Due Diligence Support",
    description: "Thorough analysis and verification of all business aspects before closing any deal."
  },
  {
    icon: MessageSquare,
    title: "Free Consultations",
    description: "Not sure where to start? Schedule a no-obligation consultation with our expert brokers."
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
            Expert Business Broker Services
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Our team stands as the foremost authority in business brokerage across the US Southeast. Whether you&apos;re buying, selling, or seeking mergers, trust in our proven expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
