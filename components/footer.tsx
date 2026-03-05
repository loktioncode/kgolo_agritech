import Link from "next/link"
import { MapPin, Mail, Linkedin, Phone, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const quickLinks = [
  { name: "Terms of Service", href: "/legal" },
  { name: "Privacy Policy / POPIA Notice", href: "/legal" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
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

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
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

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Legal
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
                <span>Taung, North West<br />South Africa</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4" />
                <a href="tel:+27697919811" className="hover:text-background transition-colors">
                  +27 69 791 9811
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@kgolo.co.za" className="hover:text-background transition-colors">
                  info@kgolo.co.za
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Linkedin className="h-4 w-4" />
                <a href="https://www.linkedin.com/company/kgolo-agriculture/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Instagram className="h-4 w-4" />
                <a href="https://www.instagram.com/kgoloagri?igsh=Mnl0NjBiaWQwdDNw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  Instagram
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
