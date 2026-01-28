import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Beef,
  Leaf,
  Grape,
  TreePine,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MeshBackground } from "@/components/ui/mesh-background"

export const metadata = {
  title: "Solutions | Sector-Specific Agritech for South Africa",
  description:
    "Tailored digital solutions for Livestock, Crop Farming, Viticulture, and Forestry. Ensuring LITS compliance and biosecurity for every operation.",
}

const solutions = [
  {
    icon: Beef,
    title: "Livestock & Game",
    subtitle: "FMD Compliance & Traceability",
    description:
      "Complete biosecurity solution for cattle, sheep, and game farmers. Achieve LITS compliance and unlock export markets with our blockchain health passports.",
    features: [
      "FMD lesion AI detection",
      "LITS registration automation",
      "Section 10 scheme support",
      "Movement permit integration",
      "Vaccination tracking",
    ],
    stats: { value: "7.2M", label: "Cattle in SA" },
    image: "/images/livestock-tracking.jpg",
  },
  {
    icon: Leaf,
    title: "Crop Farming",
    subtitle: "Pest Detection & Export Compliance",
    description:
      "AI-powered crop health monitoring for commercial and emerging farmers. Detect pests early and maintain export-grade produce quality.",
    features: [
      "Fall Armyworm detection",
      "Nutrient deficiency analysis",
      "Harvest optimization",
      "Residue tracking",
      "Export certification",
    ],
    stats: { value: "R150bn", label: "Annual Crop Value" },
    image: "/images/crop-monitoring.jpg",
    launching: "July 2026",
  },
  {
    icon: Grape,
    title: "Viticulture",
    subtitle: "Vineyard Health Management",
    description:
      "Specialized solutions for wine grape producers. Monitor vine health, predict yields, and maintain quality standards for premium wine production.",
    features: [
      "Vine disease detection",
      "Yield prediction",
      "Irrigation optimization",
      "Quality grading",
      "Terroir mapping",
    ],
    stats: { value: "3,000+", label: "Wine Farms" },
    image: "/images/gis-mapping.jpg",
    launching: "2027",
  },
  {
    icon: TreePine,
    title: "Forestry",
    subtitle: "Plantation Monitoring",
    description:
      "Large-scale forest health monitoring for timber and pulp operations. Early pest detection and growth tracking for sustainable forestry.",
    features: [
      "Aerial health surveys",
      "Pest outbreak alerts",
      "Growth rate analysis",
      "Fire risk assessment",
      "Carbon tracking",
    ],
    stats: { value: "1.2M ha", label: "Commercial Forests" },
    image: "/images/about-hero.jpg",
    launching: "2027",
  },
]

const caseStudies = [
  {
    title: "Regional Biosecurity Implementation",
    result: "85% Potential Herd Compliance",
    description: "Research indicates that digital traceability can increase LITS registration from 20% to over 80% within a single season.",
    icon: TrendingUp,
  },
  {
    title: "Smallholder Inclusion Impact",
    result: "60% Projected Market Access",
    description: "Studies show that verified health records enable emerging farmers to access commercial auctions previously out of reach.",
    icon: Shield,
  },
  {
    title: "FMD Outbreak Response",
    result: "4x Faster Containment",
    description: "Digital movement controls could predict and respond to outbreaks four times faster than current manual paper-based systems.",
    icon: Clock,
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/livestock-tracking.jpg"
            alt="Livestock management and traceability in South Africa - Kgolo Agritech Solutions"
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
              Our Solutions
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <h1
                className="text-4xl font-bold tracking-tight sm:text-6xl text-background text-balance mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Industry-Specific Solutions for Every Farmer
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <p className="text-xl text-background/80 leading-relaxed max-w-2xl">
                Whether you manage livestock, grow crops, or cultivate vineyards, we have
                tailored technology solutions to meet your specific needs and ensure compliance.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {solutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <Card className="border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/40" />
                    <div className="absolute top-4 left-4">
                      <div className="h-12 w-12 rounded-xl bg-background/90 flex items-center justify-center">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    {solution.launching && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                        Launching {solution.launching}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8">
                    <p className="text-sm font-medium text-primary mb-2">{solution.subtitle}</p>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <div>
                        <p className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                          {solution.stats.value}
                        </p>
                        <p className="text-sm text-muted-foreground">{solution.stats.label}</p>
                      </div>
                      <Button variant="outline" asChild className="hover:scale-105 transition-transform">
                        <Link href="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <MeshBackground opacity={0.04} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="up">
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                Success Stories
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Real Results from South African Farmers
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See how farmers are achieving measurable improvements with Kgolo Agritech.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((study) => (
              <StaggerItem key={study.title}>
                <Card className="border-border bg-card hover:shadow-lg transition-transform hover:-translate-y-1 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <study.icon className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {study.result}
                    </p>
                    <h3 className="text-lg font-semibold mb-3">{study.title}</h3>
                    <p className="text-muted-foreground text-sm">{study.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-drone.jpg"
                alt="South African farmland with drone surveillance - Kgolo Agritech"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/80" />
              <div className="relative z-10 py-20 px-8 md:py-28 md:px-16 text-center">
                <h2
                  className="text-3xl font-bold tracking-tight text-background sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Find the Right Solution for Your Operation
                </h2>
                <p className="mt-4 text-lg text-background/80 max-w-2xl mx-auto">
                  Our team will help you identify the best technology package for your specific needs.
                </p>
                <div className="mt-10">
                  <Button size="lg" asChild className="hover:scale-105 transition-transform">
                    <Link href="/contact">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
