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

export const metadata = {
  title: "Solutions | Kgolo Agritech - Industry-Specific Agricultural Solutions",
  description:
    "Tailored AI and blockchain solutions for livestock, crop farming, viticulture, and forestry across South Africa.",
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
    title: "Northern Cape Cattle Farm",
    result: "100% LITS Compliance",
    description: "Achieved full traceability for 2,500 head of cattle within 3 months.",
    icon: TrendingUp,
  },
  {
    title: "Free State Grain Producer",
    result: "23% Yield Increase",
    description: "Early pest detection prevented significant crop losses.",
    icon: Shield,
  },
  {
    title: "Limpopo Game Reserve",
    result: "Export Ready",
    description: "Blockchain health records enabled first international game export.",
    icon: Clock,
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Solutions
            </p>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Industry-Specific Solutions for Every Farmer
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Whether you manage livestock, grow crops, or cultivate vineyards, we have 
              tailored technology solutions to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {solutions.map((solution) => (
              <Card key={solution.title} className="border-border overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover"
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
                    <Button variant="outline" asChild>
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
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
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.title} className="border-border bg-card">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/hero-drone.jpg"
              alt="South African farmland"
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
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
