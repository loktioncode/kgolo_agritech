"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Download,
  Play,
  Landmark,
  Users,
  Shield,
  Smartphone,
  Wifi,
  Lock,
  Leaf,
  Check,
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MeshBackground } from "@/components/ui/mesh-background"
import { GrowingPlant } from "@/components/animations/growing-plant"

const TAGLINE = "Your farm, verified. Your future, unlocked."

const trustPoints = [
  "Works offline",
  "Farmer-owned data",
  "Free pilot for North West farmers",
]

const problemCards = [
  {
    icon: Landmark,
    title: 'Banks say "no proof of farming"',
    description:
      "Without a paper trail, months of honest work do not count. You need a record that shows what you did, when you did it.",
    image: "/images/export-bans-bg.png",
  },
  {
    icon: Users,
    title: "Subsidies miss you",
    description:
      "Programmes struggle to find real farmers. A verifiable digital farmer ID helps government and NGOs know you are active on the ground.",
    image: "/images/smallholder-exclusion-bg.png",
  },
  {
    icon: Shield,
    title: "Livestock theft & disputes",
    description:
      "When animals are registered to you with photos and history, you have something solid to stand on   stored on your phone, even without signal.",
    image: "/images/traceability-lapses-bg.png",
  },
]

const techStack = [
  {
    icon: Smartphone,
    title: "Digital farmer ID on your phone",
    description:
      "Register with your name, ID, and photo. Map your land, add cattle, goats, or sheep, and log vaccinations, treatments, and movements   all designed to work offline first.",
    image: "/images/livestock-tracking.jpg",
  },
  {
    icon: Lock,
    title: "Your data until you share it",
    description:
      "Your information stays on your device until you choose to back up or share. No sharing without consent   dignity and trust by design.",
    image: "/images/gis-mapping.jpg",
  },
  {
    icon: Wifi,
    title: "Edge-Sync",
    description:
      "The app remembers everything you enter without signal. When you get Wi‑Fi or data, it quietly backs up to a secure cloud so you do not lose your work.",
    image: "/images/cattle-fmd-ai.png",
  },
]

const complianceLogos = [
  { name: "POPIA", label: "POPIA aligned" },
  { name: "LITS", label: "LITS traceability context" },
  { name: "Pilot", label: "North West pilot" },
]

const stats = [
  { value: "50+", label: "Pilot farmers (target)" },
  { value: "500+", label: "Cattle registration goal" },
  { value: "Offline", label: "Works without signal" },
]

export function HomeClient() {
  const [activeTab, setActiveTab] = useState<"livestock" | "crops">("livestock")
  const apkHref = process.env.NEXT_PUBLIC_APK_URL || "/kgolo.apk"
  const playStoreUrl = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() || ""

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-drone.jpg"
            alt="South African farmland with cattle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <FadeIn direction="down" delay={0.2}>
              <p className="text-lg text-accent font-medium mb-4">{TAGLINE}</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <h1
                className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                No internet? No problem. Your digital farmer ID works offline.
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <p className="mt-6 text-xl text-background/90 leading-relaxed max-w-2xl">
                Kgolo (Growth) gives you a permanent, verifiable identity – stored on your phone. Prove who you are,
                what you own, and what you grow. All without needing data or signal.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.8} className="mt-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-background/75">Get the app</p>
              <div className="flex flex-row flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-16 px-8 sm:px-10 text-lg font-semibold shadow-xl shadow-primary/35 hover:scale-[1.02] transition-transform rounded-xl shrink-0"
                >
                  <a href={apkHref} download className="inline-flex items-center">
                    <Download className="mr-3 h-6 w-6 shrink-0" />
                    Download APK
                  </a>
                </Button>
                {playStoreUrl ? (
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="h-16 px-6 sm:px-8 text-foreground shadow-lg hover:scale-[1.02] transition-transform rounded-xl shrink-0 bg-background hover:bg-background/95"
                  >
                    <a
                      href={playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3"
                    >
                      <Play className="h-7 w-7 shrink-0 text-[#01875f]" strokeWidth={2.25} />
                      <span className="flex flex-col items-start leading-none gap-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Get it on
                        </span>
                        <span className="text-lg font-bold tracking-tight">Google Play</span>
                      </span>
                    </a>
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    disabled
                    className="min-h-16 py-3 px-6 h-auto border-background/40 bg-background/10 text-background cursor-not-allowed opacity-80 shrink-0 rounded-xl"
                  >
                    <span className="flex items-center gap-3">
                      <Play className="h-7 w-7 shrink-0 opacity-50" />
                      <span className="flex flex-col items-start leading-none gap-1 text-left">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-background/60">
                          Get it on
                        </span>
                        <span className="text-lg font-bold tracking-tight">Google Play</span>
                        <span className="text-xs font-normal text-background/55 pt-0.5"> </span>
                      </span>
                    </span>
                  </Button>
                )}
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={1} className="mt-8">
              <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 text-background/95 text-sm sm:text-base">
                {trustPoints.map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        <FadeIn direction="none" delay={1.2} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-bounce" />
          </div>
        </FadeIn>
      </section>

      {/* Challenge / farmer needs */}
      <section id="impact" className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn direction="up">
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                The challenge
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why a digital farmer ID matters
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Warm, straightforward tools for real farms   including where the internet does not reach.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {problemCards.map((card) => (
              <StaggerItem key={card.title}>
                <Card className="relative border-border bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group min-h-[320px]">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/80 group-hover:bg-foreground/70 transition-colors" />
                  </div>

                  <CardContent className="relative z-10 p-8 flex flex-col h-full items-start">
                    <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                      <card.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-3 text-background"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-background/80 leading-relaxed mb-auto">{card.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology" className="relative py-24 lg:py-32 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn direction="up">
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                The app
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Built for places where the internet doesn&apos;t reach
              </h2>
              <p className="mt-4 text-muted-foreground">
                Download on Android, register, map your land, add animals, log your work, then sync when you can.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-24">
            {techStack.map((tech, index) => (
              <FadeIn
                key={tech.title}
                direction={index % 2 === 0 ? "right" : "left"}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                    {tech.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{tech.description}</p>
                </div>
                <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image src={tech.image || "/placeholder.svg"} alt={tech.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dual-Commodity Tabs Section */}
      <section id="solutions" className="relative py-24 lg:py-32 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn direction="up">
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                Our modules
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Livestock today, more later
              </h2>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.2} className="flex justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => setActiveTab("livestock")}
              className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 ${
                activeTab === "livestock"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Livestock module
            </button>
            <button
              type="button"
              id="crops"
              onClick={() => setActiveTab("crops")}
              className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 ${
                activeTab === "crops"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crop module
            </button>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <Card className="border-border overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                {activeTab === "livestock" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                        <Shield className="h-4 w-4" />
                        North West pilot
                      </div>
                      <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                        Livestock traceability that works offline
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Dr Ruth Segomotsi Mompati District: we are onboarding 50+ smallholder livestock farmers, aiming to
                        register 500+ cattle and log 1000+ activities   proving the model where signal is scarce.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          Digital farmer ID and herd records on your phone
                        </li>
                        <li className="flex items-center gap-3 text-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          Activity history banks and programmes can take seriously
                        </li>
                        <li className="flex items-center gap-3 text-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          LITS traceability context (Jan 2026) for partners who need it   with farmer consent
                        </li>
                        <li className="flex items-center gap-3 text-foreground">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          Edge-Sync when you reach Wi‑Fi or data
                        </li>
                      </ul>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/livestock-tracking.jpg"
                        alt="Livestock tracking and monitoring"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium mb-6">
                        <Leaf className="h-4 w-4" />
                        On the roadmap
                      </div>
                      <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                        Crop health & records
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Our first focus is livestock and the farmers who were invisible to banks and programmes. Crop
                        features are planned for a later release   same offline-first philosophy.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-foreground">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          Field logging and proof of production
                        </li>
                        <li className="flex items-center gap-3 text-foreground">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          Export and compliance style workflows (future)
                        </li>
                      </ul>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image src="/images/crop-monitoring.jpg" alt="Crop health monitoring" fill className="object-cover" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Partners / organisations */}
      <section id="investor" className="py-24 lg:py-32 relative overflow-hidden">
        <MeshBackground opacity={0.05} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn direction="up">
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                For organisations
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Reach the farmers others can&apos;t
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Government (LITS mandate, Jan 2026), agri-fintech, and NGOs: API access with consent, white-label options,
                and pilot partnership in the North West. Let&apos;s talk.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="mt-10">
              <Button size="lg" asChild className="hover:scale-105 transition-transform shadow-lg">
                <Link href="/contact">
                  <Lock className="mr-2 h-4 w-4" />
                  Schedule a conversation
                </Link>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Farmers: use Contact to join the pilot (name, phone, district, herd size). Partners:{" "}
                <a className="underline hover:text-foreground" href="mailto:partners@kgolo.co.za">
                  partners@kgolo.co.za
                </a>
                . General:{" "}
                <a className="underline hover:text-foreground" href="mailto:info@kgolo.co.za">
                  info@kgolo.co.za
                </a>
                .
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Compliance & Stats Section */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full flex justify-around items-end px-12 pointer-events-none opacity-20">
          <GrowingPlant className="w-24 h-24" color="accent" />
          <GrowingPlant className="w-32 h-32" color="primary" />
          <GrowingPlant className="w-20 h-20" color="accent" />
          <GrowingPlant className="w-40 h-40" color="primary" />
          <GrowingPlant className="w-28 h-28" color="accent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="flex flex-wrap justify-center gap-8 mb-16">
            {complianceLogos.map((logo) => (
              <StaggerItem key={logo.name}>
                <div className="px-6 py-3 bg-primary-foreground/10 rounded-lg text-primary-foreground/70 text-sm font-medium hover:bg-primary-foreground/20 transition-colors">
                  {logo.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p
                  className="text-4xl font-bold text-primary-foreground sm:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-lg text-primary-foreground/70">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section id="demo" className="relative py-24 lg:py-32 overflow-hidden">
        <MeshBackground opacity={0.03} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[320px]">
              <Image
                src="/images/team-field.jpg"
                alt="Kgolo team working in the field"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-foreground/80" />
              <div className="relative z-10 py-20 px-8 md:py-28 md:px-16 text-center">
                <h2
                  className="text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl text-balance"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Pilot open in the North West — limited spots
                </h2>
                <p className="mt-6 text-xl text-background/80 max-w-2xl mx-auto">
                  Taung roots, Setswana name: Kgolo means growth. Get involved: we will call farmers who apply with
                  name, phone, district, and herd size.
                </p>
                <div className="mt-10 flex flex-col items-center gap-6" id="get-app">
                  <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                    <Button
                      size="lg"
                      asChild
                      className="h-14 px-8 text-base font-semibold hover:scale-105 transition-transform shrink-0"
                    >
                      <a href={apkHref} download className="inline-flex items-center">
                        <Download className="mr-2 h-5 w-5 shrink-0" />
                        Download APK
                      </a>
                    </Button>
                    {playStoreUrl ? (
                      <Button
                        asChild
                        variant="secondary"
                        size="lg"
                        className="h-14 px-6 text-foreground bg-background hover:bg-background/95 shrink-0"
                      >
                        <a
                          href={playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5"
                        >
                          <Play className="h-6 w-6 shrink-0 text-[#01875f]" strokeWidth={2.25} />
                          <span className="flex flex-col items-start leading-none gap-0.5">
                            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                              Get it on
                            </span>
                            <span className="text-base font-bold tracking-tight">Google Play</span>
                          </span>
                        </a>
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="outline"
                        disabled
                        className="h-14 px-6 border-background/40 bg-background/10 text-background cursor-not-allowed shrink-0"
                      >
                        <span className="inline-flex items-center gap-2.5">
                          <Play className="h-6 w-6 shrink-0 opacity-50" />
                          <span className="flex flex-col items-start leading-none gap-0.5 text-left">
                            <span className="text-[9px] font-semibold uppercase tracking-wider text-background/60">
                              Get it on
                            </span>
                            <span className="text-base font-bold">Google Play</span>
                          </span>
                        </span>
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background hover:scale-105 transition-transform"
                    >
                      <Link href="/contact">
                        Apply or get in touch
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background hover:scale-105 transition-transform"
                      asChild
                    >
                      <Link href="tel:+27697919811">Call 069 791 9811</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  )
}
