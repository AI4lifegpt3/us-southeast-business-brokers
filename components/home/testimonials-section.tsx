import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jason Mitchell",
    role: "Former Business Owner",
    location: "Birmingham, AL",
    rating: 5,
    quote: "US Southeast Business Brokers made selling my manufacturing company a seamless experience. Their valuation was spot-on and they found a qualified buyer within three months."
  },
  {
    name: "Sarah Patterson",
    role: "Entrepreneur",
    location: "Atlanta, GA",
    rating: 5,
    quote: "I was nervous about buying my first business, but the team guided me through every step. Their expertise in due diligence saved me from potential pitfalls."
  },
  {
    name: "Robert Williams",
    role: "Restaurant Owner",
    location: "Nashville, TN",
    rating: 5,
    quote: "The team understood Tennessee's unique business climate. They found the perfect buyer for my restaurant group and negotiated terms that exceeded my expectations."
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-wider opacity-80">Testimonials</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-4 text-balance">
            Why Our Clients Trust Our Services
          </h2>
          <p className="opacity-80 mt-4 leading-relaxed">
            Client experiences working with our business brokers across the Southeast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="opacity-90 leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm opacity-70">{testimonial.role}</p>
                <p className="text-sm opacity-70">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
