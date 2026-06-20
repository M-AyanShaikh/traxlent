import Link from "next/link";
import { TraxlentLogo } from "./traxlent-logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4">
            <TraxlentLogo className="h-6" />
            <p className="font-mono text-xs text-foreground max-w-xs">
              Modern websites and tech solutions for local businesses.
            </p>
          </div>

          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            {[
              { label: "Services", href: "#services" },
              { label: "About", href: "#about" },
              { label: "Work", href: "#work" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-mono text-xs uppercase text-foreground hover:text-foreground transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-foreground">
              &copy; {new Date().getFullYear()} Traxlent. All rights reserved.
            </span>
            <nav className="hidden sm:flex items-center gap-3">
              <Link href="/privacy" className="font-mono text-xs text-foreground hover:text-primary transition-colors duration-150">Privacy Policy</Link>
              <Link href="/terms" className="font-mono text-xs text-foreground hover:text-primary transition-colors duration-150">Terms of Service</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@traxlent.ca"
              className="font-mono text-xs text-foreground hover:text-primary transition-colors duration-150"
            >
              hello@traxlent.ca
            </a>

            <a
              href="https://www.instagram.com/traxlent.co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traxlent on Instagram"
              className="text-foreground hover:text-primary transition-colors duration-150"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
