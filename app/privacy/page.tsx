import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container">
        <h1 className="text-4xl font-sentient mb-6">Privacy Policy</h1>
        <p className="font-mono text-sm mb-4">
          This Privacy Policy explains how Traxlent collects, uses, and protects your information.
        </p>

        <section className="prose max-w-none">
          <h2>Information We Collect</h2>
          <p>We may collect the information you provide when contacting us, including name, email, business name, and message.</p>

          <h2>How We Use Your Information</h2>
          <p>We use the information to respond to inquiries and to provide our services. We do not sell personal data.</p>

          <h2>Third-Party Services</h2>
          <p>We may use third-party services (for example, FormSubmit) to process contact form submissions. Please review their policies as well.</p>

          <h2>Contact</h2>
          <p>If you have questions about this policy, contact us at <a href="mailto:traxlentinfo@gmail.com">traxlentinfo@gmail.com</a>.</p>
        </section>

        <div className="mt-8">
          <Link href="/" className="font-mono text-sm text-foreground hover:text-primary">← Back to home</Link>
        </div>
      </div>
    </main>
  );
}
