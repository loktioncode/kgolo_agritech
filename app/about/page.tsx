import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Sprout, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MeshBackground } from "@/components/ui/mesh-background"

const TAGLINE = "Your farm, verified. Your future, unlocked."

export const metadata = {
  title: "About | Kgolo   who we are",
  description:
    "Kgolo was born in Taung, North West. Offline, simple, farmer-owned tools so smallholders are visible to banks, government, and markets.",
}

const values = [
  {
    icon: Heart,
    title: "Dignity",
    description: "You own your data.",
  },
  {
    icon: Sprout,
    title: "Persistence",
    description: "We work offline, like you.",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "No sharing without consent.",
  },
]

const stats = [
  { value: "North West", label: "Pilot region" },
  { value: "Taung", label: "Where we started" },
  { value: "50+", label: "Pilot farmers" },
  { value: "500+", label: "Cattle goal" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn direction="down" delay={0.1}>
                <p className="text-base text-primary font-medium mb-3">{TAGLINE}</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <h1
                  className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  About Kgolo
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.35}>
                <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Kgolo was born in Taung, North West. We saw that smallholder farmers   the backbone of rural
                    South Africa   were invisible to banks, government, and markets. No formal identity meant no loans,
                    no subsidies, no trust.
                  </p>
                  <p>
                    So we built a tool that works where they live. Offline. Simple. Farmer-owned. Our name:{" "}
                    <strong className="text-foreground font-medium">Kgolo</strong> means &quot;growth&quot; in
                    Setswana. That&apos;s what we want for every farmer.
                  </p>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.3} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Rural farmland in the North West"
                fill
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                Values
              </h2>
              <p className="mt-3 text-muted-foreground">Warm, straightforward, hopeful   in how we build and how we show up.</p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="border-border bg-card text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-primary-foreground sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <FadeIn direction="up" className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Get involved
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the pilot, explore the app, or talk to us about partnership.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#technology">The app</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  )
}
