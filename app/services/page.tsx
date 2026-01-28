import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  Shield,
  Wifi,
  Smartphone,
  Database,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MeshBackground } from "@/components/ui/mesh-background"

export const metadata = {
  title: "Agritech Services | AI Diagnostics & Blockchain Traceability",
  description:
    "Explore our technological services including AI-powered FMD detection, blockchain health passports, and edge-sync offline-first data solutions.",
}

const services = [
  {
    icon: Brain,
    title: "AI Neural Vision Diagnostics",
    description:
      "Our Google Vertex-powered AI identifies FMD lesions and crop deficiencies in seconds, directly from a smartphone camera.",
    features: [
      "FMD lesion detection with 95%+ accuracy",
      "Crop pest identification (Fall Armyworm)",
      "Nutrient deficiency analysis",
      "Real-time diagnostic reports",
    ],
    image: "/images/crop-monitoring.jpg",
  },
  {
    icon: Shield,
    title: "Blockchain Health Passports",
    description:
      "Every vaccination and movement is a permanent record on a private blockchain, meeting WOAH international audit standards.",
    features: [
      "Immutable vaccination records",
      "Movement tracking and traceability",
      "WOAH audit compliance",
      "Export certification support",
    ],
    image: "/images/gis-mapping.jpg",
  },
  {
    icon: Wifi,
    title: "Edge-Sync Technology",
    description:
      "Engineered for the Northern Cape. Our 'Offline-First' architecture ensures data integrity in regions with zero connectivity.",
    features: [
      "Zero-data offline mode",
      "Automatic sync when connected",
      "Local data encryption",
      "Rural-optimized performance",
    ],
    image: "/images/livestock-tracking.jpg",
  },
]

const additionalServices = [
  {
    icon: Smartphone,
    title: "Mobile App Platform",
    description: "User-friendly mobile application for field diagnostics and record keeping.",
  },
  {
    icon: Database,
    title: "LITS Integration",
    description: "Seamless integration with the national Livestock Identification and Traceability System.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive reporting and analytics for herd health and compliance monitoring.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-drone.jpg"
            alt="South African green farmland viewed from a drone - Kgolo Agritech Expertise"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/95 via-foreground/80 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn direction="down" delay={0.2} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Our Expertise
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <h1
                className="text-4xl font-bold tracking-tight sm:text-6xl text-background text-balance mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Technology Solutions for Modern Agriculture
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <p className="text-xl text-background/80 leading-relaxed max-w-2xl">
                From AI-powered diagnostics to blockchain traceability, we provide the complete
                technology stack for biosecurity compliance and agricultural excellence across South Africa.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Services Section with Mesh Background */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <MeshBackground opacity={0.05} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <FadeIn
                key={service.title}
                direction={index % 2 === 0 ? "right" : "left"}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-inner shadow-primary/5">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h2
                    className="text-3xl font-bold mb-6 sm:text-4xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 group">
                        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <Check className="h-4 w-4 text-primary group-hover:text-current" />
                        </div>
                        <span className="text-foreground/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="hover:scale-[1.02] transition-transform" asChild>
                    <Link href="/contact">
                      Discuss Implementation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Capabilities Section */}
      <section className="relative py-24 lg:py-32 bg-secondary/50 overflow-hidden">
        <MeshBackground opacity={0.04} />
        {/* Background blobs for color */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Additional Capabilities
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                Complementary ecosystem services engineered for the unique challenges
                of the African agricultural landscape.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {additionalServices.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="group border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-10">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="relative rounded-3xl bg-primary px-8 py-20 md:px-16 md:py-24 text-center overflow-hidden shadow-2xl">
              {/* CTA Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="cta-mesh" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M30 0L0 30M0 0L30 30" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#cta-mesh)" />
                </svg>
              </div>

              <div className="relative z-10">
                <h2
                  className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl mb-8"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ready to Secure Your Herd's Future?
                </h2>
                <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-12">
                  Join the digital biosecurity revolution. Get compliant with LITS
                  before the 2026 mandate with our phased implementation approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" variant="secondary" className="px-10 py-7 text-lg hover:scale-105 transition-transform" asChild>
                    <Link href="/contact">Schedule Site Visit</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 py-7 text-lg bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground hover:scale-105 transition-all"
                    asChild
                  >
                    <Link href="/solutions">Explore Solutions</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
