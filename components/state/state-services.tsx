import { TrendingUp, Search, BarChart3, Shield, Users, FileCheck } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Sell Your Business",
    description: "Get the maximum value for your business with our proven marketing strategies and extensive buyer network."
  },
  {
    icon: Search,
    title: "Buy A Business",
    description: "Find the perfect business opportunity with our guidance and access to exclusive listings."
  },
  {
    icon: BarChart3,
    title: "Business Valuations",
    description: "Get an accurate assessment of your business's worth using industry-standard methodologies."
  },
  {
    icon: Shield,
    title: "Confidential Marketing",
    description: "We protect your business identity while actively marketing to qualified buyers."
  },
  {
    icon: Users,
    title: "Buyer Screening",
    description: "We thoroughly vet all potential buyers to ensure they're qualified and serious."
  },
  {
    icon: FileCheck,
    title: "Transaction Support",
    description: "Full support through due diligence, negotiations, and closing documentation."
  }
]

export function StateServices({ state }: { state: string }) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
            {state} Business Broker Services
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Comprehensive business brokerage services tailored for {state} business owners. Whether you&apos;re buying, selling, or need a valuation, we&apos;re here to help.
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
