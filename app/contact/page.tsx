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
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MeshBackground } from "@/components/ui/mesh-background"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Kgolo Agriculture - Get in Touch",
  description: "Contact Kgolo Agriculture in Taung, North West. We're here to help South African farmers with AI and blockchain agricultural solutions.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Taung, North West", "South Africa"],
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
            <FadeIn direction="down" delay={0.2} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Get In Touch
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <h1
                className="text-4xl font-bold tracking-tight sm:text-6xl text-background text-balance mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let's Grow Together
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <p className="text-xl text-background/80 leading-relaxed max-w-2xl">
                Ready to transform your agricultural operations? Our team in Taung is
                standing by to help you achieve compliance and unlock new growth opportunities.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content with Mesh Background */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <MeshBackground opacity={0.03} size={40} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-10">
              <FadeIn direction="right">
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Regional HQ
                </h2>
                <p className="text-muted-foreground text-lg max-w-md">
                  Visit our headquarters in the heart of the North West or reach out
                  through any of our digital channels.
                </p>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((item) => (
                  <StaggerItem key={item.title}>
                    <Card className="group border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-x-1">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg mb-1">{item.title}</p>
                            {item.details.map((detail) => (
                              <p key={detail} className="text-muted-foreground group-hover:text-foreground transition-colors">
                                {detail.includes('@') ? (
                                  <a href={`mailto:${detail}`} className="hover:underline">
                                    {detail}
                                  </a>
                                ) : detail.includes('+27') ? (
                                  <a href={`tel:${detail.replace(/\s+/g, '')}`} className="hover:underline">
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Support Channels */}
            <div className="space-y-6">
              <FadeIn direction="left">
                <h2
                  className="text-3xl font-bold mb-8"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Fast Response Channels
                </h2>
              </FadeIn>
              <FadeIn direction="left" delay={0.2}>
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
                      <Link href="https://wa.me/27697919811?text=Hello%20Kgolo%20team%2C%20I%20would%20like%20to%20enquire%20about%20your%20services%20and%20how%20you%20can%20assist%20my%20agricultural%20operations." target="_blank">
                        Let's Chat
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn direction="left" delay={0.4}>
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
                    <Button variant="outline" size="lg" className="w-full border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:scale-[1.02] transition-all" asChild>
                      <Link href="https://www.linkedin.com/company/kgolo-agriculture/" target="_blank">
                        Connect on LinkedIn
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
