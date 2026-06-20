import { Pill } from "./pill";

const services = [
  {
    number: "01",
    title: "New Website",
    description:
      "Includes custom design, responsive development, CMS setup, and SEO-friendly launch. For local businesses and startups ready to go live with a professional site.",
    tags: ["Design", "Development", "CMS"],
  },
  {
    number: "02",
    title: "Website Redesign",
    description:
      "Includes visual refresh, performance and accessibility improvements, and migration support. For businesses with outdated or slow sites that need more leads.",
    tags: ["Redesign", "Performance", "Accessibility"],
  },
  {
    number: "03",
    title: "Care Plan",
    description:
      "Includes security updates, daily backups, monthly health checks, and small content edits. For owners who prefer a hands-off, reliable maintenance plan.",
    tags: ["Maintenance", "Backups", "Support"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <Pill className="mb-5">Services</Pill>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient mt-4 text-balance">
              What we offer<br />
              <i className="font-light">straightforward & focused</i>
            </h2>
          </div>
          <p className="font-mono text-sm text-foreground max-w-xs text-balance">
            New websites, redesigns, and a simple care plan — each lists what’s included and who it’s for.
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
