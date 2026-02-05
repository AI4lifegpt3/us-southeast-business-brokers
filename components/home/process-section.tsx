const steps = [
  {
    number: "1",
    title: "Analyze & Prepare",
    description: "We analyze your business and prepare comprehensive documentation."
  },
  {
    number: "2",
    title: "Valuation",
    description: "Generate accurate value estimates based on market data and financials."
  },
  {
    number: "3",
    title: "Marketing",
    description: "Develop marketing assets and launch confidential promotion campaigns."
  },
  {
    number: "4",
    title: "Screen Buyers",
    description: "Respond to inquiries and screen qualified, serious buyers."
  },
  {
    number: "5",
    title: "Negotiate Offers",
    description: "Manage buyer relationships and evaluate all offers received."
  },
  {
    number: "6",
    title: "Close the Deal",
    description: "Expedite due diligence, prep documents, and close successfully."
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Process</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
            How the Selling Process Works
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            The best people, the best process, the best marketing – all at work for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative bg-background rounded-2xl p-8 border border-border group hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-[2px] bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
