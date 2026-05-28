import { Pill } from "./pill";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Fast, mobile-first websites built to convert visitors into customers. From business sites to landing pages — designed to make a strong first impression.",
    tags: ["New Builds", "Redesigns", "Landing Pages"],
  },
  {
    number: "02",
    title: "Booking & Lead Funnels",
    description:
      "Turn your website into a lead machine. We build and optimize contact forms, booking flows, and inquiry systems that drive real inquiries.",
    tags: ["Contact Forms", "Booking Systems", "CRO"],
  },
  {
    number: "03",
    title: "Business Automations",
    description:
      "Stop doing things manually. We connect your tools, automate follow-ups, and set up systems that save you hours every week.",
    tags: ["CRM Integrations", "Automations", "Workflows"],
  },
  {
    number: "04",
    title: "Tech Consulting & Support",
    description:
      "Got a digital problem you can't solve? We troubleshoot, advise, and fix — from broken tools to slow websites to confusing software.",
    tags: ["Troubleshooting", "SEO Basics", "Ongoing Support"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <Pill className="mb-5">What We Do</Pill>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-4 text-balance">
              Everything your business<br />
              <i className="font-light">needs online</i>
            </h2>
          </div>
          <p className="font-mono text-sm text-foreground max-w-xs text-balance">
            We handle the tech side so you can stay focused on what you do best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-background p-8 md:p-10 group hover:bg-foreground/[0.03] transition-colors duration-300"
            >
              <span className="font-mono text-xs text-primary mb-6 block">
                {service.number}
              </span>
              <h3 className="text-xl md:text-2xl font-sentient mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="font-mono text-sm text-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs uppercase text-foreground border border-border px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
