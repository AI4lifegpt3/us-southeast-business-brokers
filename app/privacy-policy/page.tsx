import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | US Southeast Business Brokers",
  description: "Privacy Policy for US Southeast Business Brokers. Learn how we collect, use, and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                US Southeast Business Brokers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects information you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Fill out our contact form</li>
                <li>Request a business valuation</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via phone or email</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This information may include your name, email address, phone number, business information, and any other details you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to provide our services or as required by law. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
              <p className="text-muted-foreground">
                We understand the sensitive nature of business transactions. All business information shared with us is treated with the utmost confidentiality. We use industry-standard security measures to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookies and Analytics</h2>
              <p className="text-muted-foreground">
                We may use cookies and similar tracking technologies to analyze website traffic and improve user experience. You can set your browser to refuse cookies, but some features of our website may not function properly without them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                You may request access to, correction of, or deletion of your personal information at any time by contacting us at info@southeastbusinessbrokers.com or (205) 294-9148.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
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
