import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Plane,
  MapPin,
  BarChart3,
  Leaf,
  Shield,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Plane,
    title: "Aerial Surveying",
    description:
      "High-resolution drone imagery and mapping for comprehensive farm analysis and planning.",
  },
  {
    icon: MapPin,
    title: "GIS Integration",
    description:
      "Advanced geographic information systems for precise spatial data analysis and visualization.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "AI-powered insights from aerial and satellite data to optimize your agricultural operations.",
  },
  {
    icon: Leaf,
    title: "Crop Health Monitoring",
    description:
      "NDVI and multispectral imaging to detect crop stress, disease, and nutrient deficiencies early.",
  },
]

const stats = [
  { value: "500K+", label: "Hectares Mapped" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "200+", label: "Farm Partners" },
  { value: "24/7", label: "Support" },
]

const benefits = [
  {
    icon: Shield,
    title: "Trusted Technology",
    description: "Industry-leading drone and GIS technology certified for agricultural use.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Receive actionable insights within 24-48 hours of data collection.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Average 20% improvement in yield and 30% reduction in input costs.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-drone.jpg"
            alt="Aerial view of South African farmland"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
              Precision Agriculture Technology
            </p>
            <h1
              className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Transforming South African Agriculture from Above
            </h1>
            <p className="mt-6 text-lg text-background/80 leading-relaxed max-w-xl">
              Harness the power of aerial drone technology and GIS mapping for precision livestock
              tracking and crop monitoring. Make data-driven decisions that increase yields and
              reduce costs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-3xl font-bold text-primary-foreground sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Capabilities
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Technology That Powers Modern Farming
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From aerial surveys to advanced analytics, we provide comprehensive solutions for
              precision agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group border-border hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                Our Solutions
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Complete Farm Intelligence Solutions
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you're monitoring crop health or tracking livestock across vast terrain, our
                integrated aerial and GIS technology provides the insights you need to make
                informed decisions.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/solutions">
                    View All Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/crop-monitoring.jpg"
                    alt="Crop monitoring from above"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/gis-mapping.jpg"
                    alt="GIS mapping technology"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src="/images/livestock-tracking.jpg"
                    alt="Livestock tracking"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/team-field.jpg"
              alt="AeroVeld team in the field"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/70" />
            <div className="relative z-10 py-16 px-8 md:py-24 md:px-16 text-center">
              <h2
                className="text-3xl font-bold tracking-tight text-background sm:text-4xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to Transform Your Farm?
              </h2>
              <p className="mt-4 text-lg text-background/80 max-w-2xl mx-auto">
                Join over 200 South African farmers who trust AeroVeld for their precision
                agriculture needs. Get a free consultation today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background" asChild>
                  <Link href="/about">Learn About Us</Link>
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
