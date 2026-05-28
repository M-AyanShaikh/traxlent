import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container">
        <h1 className="text-4xl font-sentient mb-6">Terms of Service</h1>
        <p className="font-mono text-sm mb-4">
          These Terms of Service govern your use of Traxlent's website and services.
        </p>

        <section className="prose max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>By using our website, you agree to these Terms.</p>

          <h2>Intellectual Property</h2>
          <p>All content on this site is the property of Traxlent unless otherwise noted.</p>

          <h2>Limitation of Liability</h2>
          <p>Traxlent is not liable for indirect or consequential damages arising from use of the site.</p>

          <h2>Contact</h2>
          <p>Questions about these terms? Email <a href="mailto:traxlentinfo@gmail.com">traxlentinfo@gmail.com</a>.</p>
        </section>

        <div className="mt-8">
          <Link href="/" className="font-mono text-sm text-foreground hover:text-primary">← Back to home</Link>
        </div>
      </div>
    </main>
  );
}
