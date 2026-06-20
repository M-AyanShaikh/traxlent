"use client";

import { Pill } from "./pill";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column */}
          <div>
            <Pill className="mb-5">Get Started</Pill>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-4 text-balance">
              Ready to modernize<br />
              <i className="font-light">your business?</i>
            </h2>
              <p className="font-mono text-sm text-foreground leading-relaxed mt-8 max-w-sm">
              Tell us a bit about your business and what you need. We&apos;ll follow up within one business day.
            </p>

            <div className="mt-12 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase text-primary">Response Time</span>
                  <span className="font-mono text-sm text-foreground">Within 1 business day</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase text-primary">Free Consultation</span>
                  <span className="font-mono text-sm text-foreground">No commitment required</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase text-primary">Email</span>
                <a
                  href="mailto:hello@traxlent.ca"
                   className="font-mono text-sm text-foreground hover:text-primary transition-colors duration-150"
                >
                  hello@traxlent.ca
                </a>
              </div>
            </div>
          </div>

          {/* Right column — external FormSubmit form */}
          <div className="flex items-start">
            <form
              action="https://formsubmit.co/hello@traxlent.ca"
              method="POST"
              className="space-y-6 w-full"
            >
              {/* Hidden config inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_subject" value="New Traxlent Discovery Call Intake!" />
              {/* DEV next — replace with production URL (https://traxlent.ca/thankyou) before deploy */}
              <input type="hidden" name="_next" value="https://traxlent.ca" />

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase text-foreground">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-primary transition-colors duration-150"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="business" className="font-mono text-xs uppercase text-foreground">
                  Business Name
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  required
                  className="bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-primary transition-colors duration-150"
                  placeholder="Smith Contracting"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-primary transition-colors duration-150"
                  placeholder="jane@smithcontracting.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase text-foreground">
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground focus:outline-none focus:border-primary transition-colors duration-150 resize-none"
                  placeholder="Tell us about your current website, what's not working, or what you want to build."
                />
              </div>

              <Button type="submit" className="mt-2 self-start">
                [Send Message]
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
