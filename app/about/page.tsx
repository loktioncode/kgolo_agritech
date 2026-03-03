import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MeshBackground } from "@/components/ui/mesh-background"

export const metadata = {
  title: "About Us | Kgolo Agritech - Our Journey & Mission",
  description:
    "Discover how Kgolo Agritech is transforming South African agriculture through AI diagnostics and blockchain traceability. Our story, values, and 2026 roadmap.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of agricultural technology to solve real-world problems.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Ensuring emerging farmers have access to the same technology as commercial operations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparent, tamper-proof records and honest partnerships.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Measuring success by the tangible improvements we bring to farming communities.",
  },
]

const milestones = [
  {
    year: "2024",
    title: "Founded",
    description: "Kgolo Agritech was established in Taung with a vision to modernize South African agriculture.",
  },
  {
    year: "2025",
    title: "AI R&D & Field Testing",
    description: "Extensive development of our Google Vertex-powered AI and field testing with North West cattle farmers.",
  },
  {
    year: "2026",
    title: "MVP Launch",
    description: "Official launch of our Minimum Viable Product for livestock biosecurity and traceability.",
  },
  {
    year: "2026",
    title: "LITS Integration",
    description: "Full integration with the national LITS system to streamline biosecurity compliance.",
  },
  {
    year: "2027",
    title: "Crop Module",
    description: "Expanding our digital ledger to include crop health monitoring and export compliance.",
  },
]

const stats = [
  { value: "North West", label: "Headquarters" },
  { value: "2024", label: "Founded" },
  { value: "R300k", label: "Phase 1 Target" },
  { value: "100%", label: "SA Owned" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn direction="down" delay={0.2}>
                <p className="text-lg text-primary font-medium italic mb-4">
                  "Innovating Agriculture for Tomorrow"
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <h1
                  className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  About Kgolo Agritech
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.6}>
                <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                  Founded in Taung, Kgolo Agritech is dedicated to transforming South African
                  agriculture through cutting-edge AI and blockchain technology. We believe that
                  precision farming is the key to sustainable food security.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.8}>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Our name "Kgolo" means "growth" in Setswana, reflecting our commitment to
                  helping South African agriculture grow and thrive in the digital age.
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.6} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="South African farmland - Representative of Kgolo Agritech's agricultural focus"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <StaggerItem>
              <Card className="border-border bg-card hover:shadow-lg transition-transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower South African farmers with accessible, affordable technology
                    that ensures biosecurity compliance, unlocks export markets, and creates
                    verified, bankable agricultural assets.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="border-border bg-card hover:shadow-lg transition-transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A South Africa where every farmer, from smallholder to commercial operation,
                    has the digital tools to prove the health and quality of their produce,
                    accessing global markets with confidence.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="up">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do at Kgolo Agritech.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="border-border bg-card text-center hover:shadow-lg transition-transform hover:-translate-y-1 h-full">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section id="our-journey" className="relative py-20 lg:py-28 bg-secondary overflow-hidden">
        <MeshBackground opacity={0.04} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="up">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Journey
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Key milestones in the Kgolo Agritech story.
              </p>
            </FadeIn>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn
                  key={milestone.title}
                  direction={index % 2 === 0 ? "right" : "left"}
                  className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <Card className="border-border bg-card inline-block hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <p className="text-primary font-bold text-lg mb-1">{milestone.year}</p>
                        <h3
                          className="text-xl font-semibold mb-2"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />
                  </div>
                  <div className="flex-1" />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p
                  className="text-3xl font-bold text-primary-foreground sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/70">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <FadeIn direction="up" className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join Us in Transforming Agriculture
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a farmer, investor, or potential partner, we'd love to hear from you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="hover:scale-105 transition-transform">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform">
              <Link href="/solutions">View Our Solutions</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  )
}
