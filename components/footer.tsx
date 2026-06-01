import Link from "next/link"
import { MapPin, Mail, Linkedin, Phone, Instagram, Facebook } from "lucide-react"
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
  { name: "Delete account & data", href: "/delete-accounts" },
]

const TAGLINE = "Your farm, verified. Your future, unlocked."

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Footer() {
  const facebookUrl = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL
  const tiktokUrl = process.env.NEXT_PUBLIC_SOCIAL_TIKTOK_URL

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo className="h-9 w-9" variant="light" />
            </Link>
            <p className="mt-4 text-lg font-medium text-background/90">{TAGLINE}</p>
            <p className="mt-3 text-sm text-background/70 max-w-xs leading-relaxed">
              Kgolo (Growth): a verifiable digital farmer ID on your phone   offline first, farmer owned. Farmer data is
              never sold; we do not share without your consent.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">Navigation</h3>
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">Legal</h3>
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">Contact</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Taung, North West (by appointment)
                  <br />
                  South Africa
                </span>
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
                <Mail className="h-4 w-4" />
                <a href="mailto:partners@kgolo.co.za" className="hover:text-background transition-colors">
                  partners@kgolo.co.za
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/kgoloagri?igsh=Mnl0NjBiaWQwdDNw&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/kgolo-agriculture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                {facebookUrl ? (
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                ) : null}
                {tiktokUrl ? (
                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                    aria-label="TikTok"
                  >
                    <TiktokIcon className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">&copy; 2026 Kgolo (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
