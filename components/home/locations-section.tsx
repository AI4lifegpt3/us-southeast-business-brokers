import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

const locations = [
  {
    state: "Alabama",
    slug: "alabama",
    cities: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa"],
    description: "Your trusted partner for business transactions throughout the Heart of Dixie. We have deep expertise in Alabama's diverse business landscape."
  },
  {
    state: "Georgia",
    slug: "georgia",
    cities: ["Atlanta", "Augusta", "Savannah", "Columbus", "Macon"],
    description: "Expert business brokerage services across the Peach State. From Atlanta to Savannah, we help businesses change hands smoothly."
  }
]

export function LocationsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Locations</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
            Business Brokerage Services by State
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            We proudly serve business owners throughout the Southeast with local expertise and personalized service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div 
              key={location.state}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">{location.state}</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {location.description}
              </p>

              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-3">Major Cities Served:</p>
                <div className="flex flex-wrap gap-2">
                  {location.cities.map((city) => (
                    <span key={city} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all bg-transparent">
                <Link href={`/${location.slug}`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
