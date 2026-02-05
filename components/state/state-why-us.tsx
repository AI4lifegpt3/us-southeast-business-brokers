import { Award, Clock, Handshake, Target, Shield, Users } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Local Expertise",
    description: "Deep understanding of the local business landscape and market dynamics."
  },
  {
    icon: Target,
    title: "Proven Track Record",
    description: "Hundreds of successful transactions completed across diverse industries."
  },
  {
    icon: Shield,
    title: "Complete Confidentiality",
    description: "Your business information is protected throughout the entire process."
  },
  {
    icon: Users,
    title: "Extensive Network",
    description: "Access to qualified buyers and sellers actively looking for opportunities."
  },
  {
    icon: Handshake,
    title: "Personal Service",
    description: "Dedicated broker support from initial consultation through closing."
  },
  {
    icon: Clock,
    title: "Efficient Process",
    description: "Streamlined systems that minimize time while maximizing results."
  }
]

export function StateWhyUs({ state }: { state: string }) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
            Why {state} Business Owners Trust Us
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            We bring unmatched expertise, dedication, and results to every business transaction in {state}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div 
              key={reason.title}
              className="flex items-start gap-4 p-6 rounded-xl hover:bg-card transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
