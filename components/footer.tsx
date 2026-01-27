import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"
import { Logo } from "@/components/logo"

const footerLinks = {
  services: [
    { name: "Aerial Mapping", href: "/services#aerial-mapping" },
    { name: "Crop Monitoring", href: "/services#crop-monitoring" },
    { name: "Livestock Tracking", href: "/services#livestock-tracking" },
    { name: "GIS Analytics", href: "/services#gis-analytics" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Solutions", href: "/solutions" },
    { name: "Case Studies", href: "/solutions#case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Support", href: "/contact" },
    { name: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo className="h-9 w-9" variant="light" />
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              Pioneering aerial and GIS technology for precision agriculture across South Africa.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4" />
                <span>Cape Town, South Africa</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4" />
                <span>info@kgoloagritech.co.za</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4" />
                <span>+27 21 123 4567</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
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

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
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

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/50">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
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
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <p className="text-center text-sm text-background/50">
            &copy; {new Date().getFullYear()} Kgolo Agritech. All rights reserved. Proudly South African.
          </p>
        </div>
      </div>
    </footer>
  )
}
