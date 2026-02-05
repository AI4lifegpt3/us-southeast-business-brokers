import { MapPin, Building2 } from "lucide-react"

interface StateData {
  state: string
  cities: { name: string; description: string }[]
  industries: string[]
}

export function StateCities({ data }: { data: StateData }) {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Cities */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Coverage Area</span>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Cities We Serve in {data.state}
                </h2>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our {data.state} business brokers have deep local knowledge and connections throughout the state, enabling us to serve clients in all major cities and regions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.cities.map((city) => (
                <div 
                  key={city.name}
                  className="bg-background rounded-xl p-5 border border-border hover:border-primary/30 transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-1">{city.name}</h3>
                  <p className="text-sm text-muted-foreground">{city.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Expertise</span>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Industries We Specialize In
                </h2>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team has successfully brokered businesses across a wide range of industries in {data.state}, bringing specialized knowledge to every transaction.
            </p>

            <div className="flex flex-wrap gap-3">
              {data.industries.map((industry) => (
                <span 
                  key={industry}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {industry}
                </span>
              ))}
            </div>

            <div className="mt-10 bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="font-semibold text-xl mb-3">Don&apos;t See Your Industry?</h3>
              <p className="opacity-80 leading-relaxed">
                We work with businesses of all types across {data.state}. Contact us to discuss your specific needs and how we can help with your transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
