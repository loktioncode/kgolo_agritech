import Link from "next/link"
import { MapPin, Mail, Linkedin } from "lucide-react"
import { Logo } from "@/components/logo"

const quickLinks = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy / POPIA Notice", href: "/privacy" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Mission Statement */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo className="h-9 w-9" variant="light" />
            </Link>
            <p className="mt-4 text-lg font-medium text-background/90 italic">
              "Innovating Agriculture for Tomorrow"
            </p>
            <p className="mt-3 text-sm text-background/70 max-w-xs leading-relaxed">
              Powering South Africa's agricultural future through AI diagnostics and blockchain 
              traceability, turning livestock and crops into verified, bankable assets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Contact
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Kimberley, Northern Cape<br />South Africa</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@kgolo.co.za" className="hover:text-background transition-colors">
                  info@kgolo.co.za
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Linkedin className="h-4 w-4" />
                <a href="https://linkedin.com/company/kgolo-agritech" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">
            &copy; 2026 Kgolo (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
