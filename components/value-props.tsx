import { Pill } from "./pill";

const stats = [
  { value: "< 2 wks", label: "Average launch time" },
  { value: "100%", label: "Mobile optimized" },
  { value: "Fast", label: "Response & support" },
  { value: "Local", label: "Business focused" },
];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, your goals, and what's not working right now. No pressure, no jargon.",
  },
  {
    number: "02",
    title: "Custom Proposal",
    description:
      "You get a clear plan with transparent pricing. No surprises, no bloated packages — just what you actually need.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "We design, build, and launch fast. You stay informed throughout. Most projects go live within two weeks.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "We stick around. Updates, questions, new features — you have a real tech partner, not a one-time vendor.",
  },
];

export function ValueProps() {
  return (
    <>
      {/* Stats bar */}
      <section id="about" className="relative border-t border-b border-border py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-4">
                <span className="font-sentient text-3xl md:text-4xl text-primary mb-1">
                  {stat.value}
                </span>
                <span className="font-mono text-xs uppercase text-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <Pill className="mb-5">How It Works</Pill>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-4 text-balance">
                Simple process,<br />
                <i className="font-light">real results</i>
              </h2>
            </div>
            <p className="font-mono text-sm text-foreground max-w-xs text-balance">
              No complicated onboarding. We move fast and keep you in the loop.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-8 md:py-10 ${
                  i < steps.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="font-mono text-xs text-primary w-10 shrink-0 pt-1">
                  {step.number}
                </span>
                <h3 className="text-xl md:text-2xl font-sentient text-foreground md:w-56 shrink-0">
                  {step.title}
                </h3>
                <p className="font-mono text-sm text-foreground leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section id="work" className="relative py-16 md:py-20 border-t border-border">
        <div className="container">
          <p className="font-mono text-xs uppercase text-foreground mb-8 text-center">
            Built for businesses like yours
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-14">
            {[
              "Gyms",
              "Contractors",
              "Med Spas",
              "Detailers",
              "Restaurants",
              "Clinics",
              "Real Estate Teams",
              "Professional Services",
            ].map((type) => (
              <span
                key={type}
                className="font-mono text-sm text-foreground hover:text-foreground transition-colors duration-200"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

        {/* Testimonials */}
        <section id="testimonials" className="relative py-16 md:py-20 border-t border-border">
          <div className="container">
            <Pill className="mb-5">Testimonials</Pill>
            <h3 className="text-2xl md:text-3xl font-sentient mt-4 mb-6 text-center">
              What local owners say
            </h3>

            <figure className="max-w-2xl mx-auto text-center">
              <blockquote className="font-mono text-sm text-foreground leading-relaxed italic mb-4">
                “Traxlents' technical abilities and customer-oriented focus has helped my business become a presence online. With custom tooling, SEO-optimization and a modern layout, my business is able to stand out from the crowd.”
              </blockquote>
              <figcaption className="font-sentient text-sm text-foreground opacity-90">
                Owner, Royal Touch Detailing
              </figcaption>
            </figure>
          </div>
        </section>
    </>
  );
}
