import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Wheat,
  Beef,
  GrapeIcon,
  TreeDeciduous,
  TrendingUp,
  Clock,
  DollarSign,
  Droplets,
  Bug,
  BarChart3,
} from "lucide-react"

export const metadata = {
  title: "Solutions | Kgolo Agritech - Industry-Specific Agricultural Solutions",
  description:
    "Tailored aerial and GIS solutions for crop farming, livestock management, viticulture, and more across South Africa.",
}

const industries = [
  {
    id: "crops",
    icon: Wheat,
    title: "Crop Farming",
    description:
      "Comprehensive monitoring and analytics for grain, vegetable, and field crop operations.",
    image: "/images/crop-monitoring.jpg",
    challenges: [
      "Early detection of crop stress and disease",
      "Optimizing irrigation and fertilizer application",
      "Accurate yield prediction and harvest planning",
      "Soil health monitoring and management",
    ],
    solutions: [
      {
        title: "NDVI Health Mapping",
        description: "Regular multispectral flights to monitor crop vigor and identify problem areas.",
      },
      {
        title: "Variable Rate Prescriptions",
        description: "Generate precise application maps for fertilizer, pesticides, and water.",
      },
      {
        title: "Yield Forecasting",
        description: "AI-powered predictions based on historical and real-time data.",
      },
    ],
  },
  {
    id: "livestock",
    icon: Beef,
    title: "Livestock & Game",
    description:
      "Advanced tracking and monitoring for cattle ranches, game farms, and mixed operations.",
    image: "/images/livestock-tracking.jpg",
    challenges: [
      "Monitoring animals across vast terrain",
      "Preventing livestock theft and predation",
      "Managing grazing patterns and carrying capacity",
      "Wildlife census and biodiversity tracking",
    ],
    solutions: [
      {
        title: "Aerial Herd Surveys",
        description: "Regular drone flights for accurate animal counting and health assessment.",
      },
      {
        title: "GPS Tracking Integration",
        description: "Combine aerial data with GPS collars for comprehensive herd management.",
      },
      {
        title: "Boundary Monitoring",
        description: "Automated fence line inspection and breach detection.",
      },
    ],
  },
  {
    id: "viticulture",
    icon: GrapeIcon,
    title: "Viticulture",
    description:
      "Precision solutions for wine estates and vineyards in the Western Cape and beyond.",
    image: "/images/gis-mapping.jpg",
    challenges: [
      "Vine-by-vine health monitoring",
      "Water stress and irrigation optimization",
      "Disease and pest early warning",
      "Harvest timing and quality prediction",
    ],
    solutions: [
      {
        title: "Block-Level Analysis",
        description: "Detailed mapping of vineyard blocks for targeted management decisions.",
      },
      {
        title: "Thermal Imaging",
        description: "Identify water stress and irrigation issues before visible symptoms appear.",
      },
      {
        title: "Quality Zoning",
        description: "Map vigor zones to optimize harvest timing and wine quality.",
      },
    ],
  },
  {
    id: "forestry",
    icon: TreeDeciduous,
    title: "Forestry & Timber",
    description:
      "Sustainable forest management through accurate mapping and monitoring solutions.",
    image: "/images/hero-drone.jpg",
    challenges: [
      "Inventory and timber volume estimation",
      "Fire risk assessment and monitoring",
      "Illegal logging and encroachment detection",
      "Reforestation progress tracking",
    ],
    solutions: [
      {
        title: "Forest Inventory",
        description: "3D mapping for accurate tree counting and volume estimation.",
      },
      {
        title: "Change Detection",
        description: "Regular monitoring to identify unauthorized activities or natural damage.",
      },
      {
        title: "Fire Risk Mapping",
        description: "Identify high-risk areas and plan firebreaks effectively.",
      },
    ],
  },
]

const caseStudies = [
  {
    title: "Western Cape Wine Estate",
    industry: "Viticulture",
    challenge: "A 500-hectare wine estate struggled with inconsistent grape quality across blocks.",
    solution:
      "Implemented weekly NDVI flights and thermal imaging to create management zones.",
    results: [
      "23% improvement in grape quality consistency",
      "15% reduction in water usage",
      "R1.2M annual savings in input costs",
    ],
    image: "/images/gis-mapping.jpg",
  },
  {
    title: "Free State Cattle Ranch",
    industry: "Livestock",
    challenge: "A 12,000-hectare ranch faced challenges in monitoring 3,000+ head of cattle.",
    solution:
      "Deployed monthly aerial surveys combined with GPS collar integration for real-time tracking.",
    results: [
      "95% reduction in cattle losses",
      "40% improvement in grazing efficiency",
      "80% faster head counts during musters",
    ],
    image: "/images/livestock-tracking.jpg",
  },
  {
    title: "Mpumalanga Maize Farm",
    industry: "Crop Farming",
    challenge:
      "A commercial maize operation needed to optimize fertilizer use across 2,000 hectares.",
    solution:
      "Created variable rate application maps based on multispectral analysis and soil data.",
    results: [
      "18% increase in average yield",
      "25% reduction in fertilizer costs",
      "ROI achieved within first season",
    ],
    image: "/images/crop-monitoring.jpg",
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Yields",
    value: "15-25%",
    description: "Average yield improvement through precision management",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    value: "20-30%",
    description: "Savings on inputs through targeted application",
  },
  {
    icon: Clock,
    title: "Time Savings",
    value: "60%",
    description: "Reduction in scouting and monitoring time",
  },
  {
    icon: Droplets,
    title: "Water Efficiency",
    value: "25%",
    description: "Average reduction in irrigation water usage",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Solutions
            </p>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tailored Solutions for Every Agricultural Challenge
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you grow crops, raise livestock, or manage forests, we have specialized
              solutions designed to address your unique challenges and maximize your returns.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <p
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {benefit.value}
                </p>
                <p className="font-medium text-sm">{benefit.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Industry Solutions
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Solutions by Industry
            </h2>
          </div>

          <Tabs defaultValue="crops" className="w-full">
            <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent justify-center mb-12">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg border border-border"
                >
                  <industry.icon className="h-4 w-4 mr-2" />
                  {industry.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Bug className="h-4 w-4 text-primary" />
                        Common Challenges
                      </h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-primary" />
                        Our Solutions
                      </h4>
                      <div className="space-y-4">
                        {industry.solutions.map((solution) => (
                          <div key={solution.title} className="bg-secondary rounded-lg p-4">
                            <h5 className="font-medium mb-1">{solution.title}</h5>
                            <p className="text-sm text-muted-foreground">{solution.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button asChild>
                        <Link href="/contact">
                          Discuss Your Needs
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Success Stories
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Real Results from Real Farms
            </h2>
            <p className="mt-4 text-muted-foreground">
              See how South African farmers are achieving measurable improvements with Kgolo Agritech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.title} className="overflow-hidden border-border">
                <div className="relative aspect-[16/9]">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle style={{ fontFamily: "var(--font-display)" }}>
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground mb-1">
                      Challenge
                    </p>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground mb-1">
                      Solution
                    </p>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-muted-foreground mb-2">
                      Results
                    </p>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="text-sm flex items-center gap-2 text-primary font-medium">
                          <TrendingUp className="h-3 w-3" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-foreground rounded-2xl py-16 px-8 md:py-20 md:px-16 text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-background sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to See Similar Results?
            </h2>
            <p className="mt-4 text-lg text-background/80 max-w-2xl mx-auto">
              Book a consultation with our agricultural specialists to discuss how our solutions
              can be tailored to your specific operation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 hover:text-background bg-transparent" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
