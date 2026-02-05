"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What does a business broker do?",
    answer: "Business brokers facilitate the sale, purchase, or merger of businesses. They assess the value of a business, market it to potential buyers, assist in negotiations, and oversee the transaction process to ensure a successful closing."
  },
  {
    question: "How do I know if it's the right time to sell my business?",
    answer: "Several factors influence the decision to sell, such as personal circumstances, market conditions, and the business's financial health. Our brokers offer personalized consultations to evaluate the ideal timing for your sale."
  },
  {
    question: "What type of businesses do you specialize in selling?",
    answer: "We have expertise across various industries and business sizes. Our experience spans from small businesses to mid-sized enterprises, encompassing retail, service, manufacturing, healthcare, and more."
  },
  {
    question: "How long does the selling process typically take?",
    answer: "The duration varies depending on various factors, including the business's complexity, market conditions, and negotiations. On average, it can take several months to a year to complete a business sale."
  },
  {
    question: "How do you determine the value of my business?",
    answer: "Our brokers conduct a comprehensive evaluation considering various factors like financial statements, market trends, assets, goodwill, and industry benchmarks to determine the fair market value of your business."
  },
  {
    question: "Is my information confidential during the selling process?",
    answer: "Absolutely. Confidentiality is paramount in our process. We use discretion and employ strategies to safeguard sensitive information throughout the selling journey."
  },
  {
    question: "What fees are involved in using a business broker?",
    answer: "Brokerage fees typically depend on the complexity of the sale and the services rendered. Our fees are transparent and discussed upfront before initiating any engagement."
  },
  {
    question: "How do I start selling my business through your brokerage?",
    answer: "Begin by reaching out to us through our contact form or phone number. Our team will schedule an initial consultation to understand your needs and outline the next steps toward selling your business."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Common questions about buying or selling a business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
