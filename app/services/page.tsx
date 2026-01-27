import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Plane,
  MapPin,
  BarChart3,
  Leaf,
  Radio,
  Satellite,
  Camera,
  FileSearch,
  CheckCircle2,
} from "lucide-react"

export const metadata = {
  title: "Services | AeroVeld - Aerial & GIS Solutions",
  description:
    "Comprehensive aerial surveying, GIS mapping, crop monitoring, and livestock tracking services for South African agriculture.",
}

const services = [
  {
    id: "aerial-mapping",
    icon: Plane,
    title: "Aerial Mapping & Surveying",
    description:
      "High-resolution drone-based mapping and surveying for accurate topographical data and farm planning.",
    features: [
      "Orthomosaic mapping with sub-centimeter accuracy",
      "Digital Elevation Models (DEM) and terrain analysis",
      "3D point cloud generation for volumetric measurements",
      "Property boundary and infrastructure mapping",
      "Construction and development site surveys",
    ],
    image: "/images/hero-drone.jpg",
  },
  {
    id: "crop-monitoring",
    icon: Leaf,
    title: "Crop Health Monitoring",
    description:
      "Advanced multispectral and NDVI imaging to monitor crop health, detect stress, and optimize inputs.",
    features: [
      "NDVI vegetation index analysis",
      "Early disease and pest detection",
      "Irrigation efficiency assessment",
      "Fertilizer application optimization",
      "Yield prediction and harvest planning",
    ],
    image: "/images/crop-monitoring.jpg",
  },
  {
    id: "livestock-tracking",
    icon: Radio,
    title: "Livestock Tracking & Management",
    description:
      "Aerial surveillance and GPS tracking solutions for efficient livestock monitoring across large areas.",
    features: [
      "Real-time herd location tracking",
      "Automated animal counting and identification",
      "Grazing pattern analysis",
      "Fence line and boundary monitoring",
      "Predator and threat detection alerts",
    ],
    image: "/images/livestock-tracking.jpg",
  },
  {
    id: "gis-analytics",
    icon: MapPin,
    title: "GIS Data Analytics",
    description:
      "Powerful geographic information system analysis for informed decision-making and strategic planning.",
    features: [
      "Spatial data integration and management",
      "Custom map layer creation and analysis",
      "Historical data comparison and trends",
      "Environmental impact assessments",
      "Land use and zoning analysis",
    ],
    image: "/images/gis-mapping.jpg",
  },
]

const additionalServices = [
  {
    icon: Satellite,
    title: "Satellite Integration",
    description: "Combine drone data with satellite imagery for comprehensive coverage and historical analysis.",
  },
  {
    icon: Camera,
    title: "Thermal Imaging",
    description: "Detect irrigation issues, livestock health problems, and equipment malfunctions with thermal cameras.",
  },
  {
    icon: FileSearch,
    title: "Custom Reports",
    description: "Receive detailed analysis reports tailored to your specific farm management needs.",
  },
  {
    icon: BarChart3,
    title: "Data Dashboard",
    description: "Access your farm data through our intuitive web and mobile dashboard platform.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Services
            </p>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Comprehensive Aerial & GIS Solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From high-resolution aerial mapping to real-time livestock tracking, we offer a
              complete suite of precision agriculture services tailored for South African farms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 lg:py-24 ${index % 2 === 1 ? "bg-secondary" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2
                    className="text-2xl font-bold tracking-tight sm:text-3xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Additional Capabilities
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Enhanced Services & Features
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Complement our core services with these additional capabilities for a complete farm
              intelligence solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.title} className="border-border">
                <CardHeader className="pb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle
                    className="text-lg"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-primary rounded-2xl py-16 px-8 md:py-20 md:px-16 text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Our agricultural specialists will assess your farm and recommend the perfect
              combination of services to meet your goals.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
