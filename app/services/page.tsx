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

export const metadata = {
  title: "Services | Kgolo Agritech - AI & Blockchain Solutions",
  description:
    "Comprehensive AI diagnostics, blockchain traceability, and GIS mapping services for South African agriculture.",
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Services
            </p>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Technology Solutions for Modern Agriculture
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              From AI-powered diagnostics to blockchain traceability, we provide the complete 
              technology stack for biosecurity compliance and agricultural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2
                    className="text-3xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Additional Capabilities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Complementary services that enhance your agricultural operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {additionalServices.map((service) => (
              <Card key={service.title} className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-primary p-12 md:p-16 text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Transform Your Operations?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Get in touch to discuss how our technology can help you achieve compliance 
              and operational excellence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
