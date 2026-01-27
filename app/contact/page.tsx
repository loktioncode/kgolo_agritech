import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  MessageCircle,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Kimberley, Northern Cape", "South Africa"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@kgolo.co.za"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 69 791 9811"],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team-field.jpg"
            alt="Kgolo team in the field"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/80 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Get In Touch
            </div>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-6xl text-background text-balance mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let's Grow Together
            </h1>
            <p className="text-xl text-background/80 leading-relaxed max-w-2xl">
              Ready to transform your agricultural operations? Our team in Kimberley is
              standing by to help you achieve compliance and unlock new growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Mesh Background */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background mesh pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-mesh" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" />
                <path d="M40 20L0 20M20 0L20 40" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-mesh)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-10">
              <div>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Regional HQ
                </h2>
                <p className="text-muted-foreground text-lg max-w-md">
                  Visit our headquarters in the heart of the Northern Cape or reach out
                  through any of our digital channels.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="group border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg mb-1">{item.title}</p>
                          {item.details.map((detail) => (
                            <p key={detail} className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Channels */}
            <div className="space-y-6">
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Fast Response Channels
              </h2>
              {/* WhatsApp */}
              <Card className="border-primary/20 bg-primary/[0.02] shadow-xl shadow-primary/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MessageCircle className="h-24 w-24" />
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      WhatsApp Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Get quick responses for technical support and general inquiries.
                    Our team is active Monday - Friday, 08:00 - 17:00 (SAST).
                  </p>
                  <Button size="lg" className="w-full shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" asChild>
                    <Link href="https://wa.me/27697919811" target="_blank">
                      Start Real-time Chat
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-[#0A66C2]">
                    <div className="h-12 w-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      LinkedIn Community
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Join our growing network of digital farmers and industry leaders.
                    Stay updated with biosecurity news and technical insights.
                  </p>
                  <Button variant="outline" size="lg" className="w-full border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all" asChild>
                    <Link href="https://linkedin.com/company/kgolo-agritech" target="_blank">
                      Connect on LinkedIn
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
