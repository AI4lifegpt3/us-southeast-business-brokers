import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | US Southeast Business Brokers",
  description: "Terms of Service for US Southeast Business Brokers. Read our terms and conditions for using our services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using the US Southeast Business Brokers website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
              <p className="text-muted-foreground mb-4">
                US Southeast Business Brokers provides business brokerage services including, but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Business sales and acquisitions</li>
                <li>Business valuations</li>
                <li>Mergers and acquisitions advisory</li>
                <li>Due diligence support</li>
                <li>Consultation services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any proprietary information shared</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Cooperate in good faith during the brokerage process</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
              <p className="text-muted-foreground">
                Both parties agree to maintain strict confidentiality regarding any proprietary business information exchanged during the course of our services. This includes, but is not limited to, financial records, customer lists, trade secrets, and business operations details. Confidentiality obligations survive the termination of our engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Fees and Commissions</h2>
              <p className="text-muted-foreground">
                Our fee structure will be clearly outlined in a separate engagement agreement before services commence. Typically, our fees are success-based, meaning they are contingent upon the successful closing of a transaction. Specific terms will be agreed upon in writing prior to engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">No Guarantee of Results</h2>
              <p className="text-muted-foreground">
                While we strive to achieve the best possible outcomes for our clients, we cannot guarantee the sale of any business, specific sale prices, or transaction timelines. Market conditions, buyer availability, and numerous other factors influence business transactions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, US Southeast Business Brokers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including text, graphics, logos, and images, is the property of US Southeast Business Brokers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Alabama, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on this page. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>US Southeast Business Brokers</strong><br />
                Email: info@southeastbusinessbrokers.com<br />
                Phone: (205) 294-9148
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
