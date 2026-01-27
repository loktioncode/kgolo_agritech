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
  Play,
  FileText,
  Ban,
  Clock,
  Users,
  Brain,
  Shield,
  Wifi,
  Lock,
  Leaf,
  Bug,
} from "lucide-react"

const problemCards = [
  {
    icon: Ban,
    title: "Export Bans",
    description:
      "The R80bn beef industry is locked out of global markets due to trust gaps in paper records.",
  },
  {
    icon: Clock,
    title: "Traceability Lapses",
    description:
      "Current LITS registration is too slow for the January 2026 mandate.",
  },
  {
    icon: Users,
    title: "Smallholder Exclusion",
    description:
      "Emerging farmers lack the tech to prove their herd's health status.",
  },
]

const techStack = [
  {
    icon: Brain,
    title: "AI Neural Vision",
    description:
      "Our Google Vertex-powered AI identifies FMD lesions and crop deficiencies in seconds, directly from a smartphone camera.",
    image: "/images/crop-monitoring.jpg",
  },
  {
    icon: Shield,
    title: "Immutable Blockchain Ledger",
    description:
      "Every vaccination and movement is a permanent 'Health Passport' on a private blockchain, meeting WOAH international audit standards.",
    image: "/images/gis-mapping.jpg",
  },
  {
    icon: Wifi,
    title: "Edge-Sync Technology",
    description:
      "Engineered for the Northern Cape. Our 'Offline-First' architecture ensures data integrity in regions with zero connectivity.",
    image: "/images/livestock-tracking.jpg",
  },
]

const complianceLogos = [
  { name: "SABS", label: "SABS Certified" },
  { name: "POPIA", label: "POPIA Compliant" },
  { name: "LITS", label: "LITS Compliant" },
  { name: "DAERL", label: "Northern Cape DAERL" },
]

const stats = [
  { value: "7.2M", label: "Potential Cattle Tracked" },
  { value: "100%", label: "Tamper-Proof Records" },
  { value: "Zero-Data", label: "Offline Mode" },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"livestock" | "crops">("livestock")

  return (
    <div className="min-h-screen bg-background">
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
            <h1
              className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Digital Ledger for African Biosecurity
            </h1>
            <p className="mt-6 text-xl text-background/90 leading-relaxed max-w-2xl">
              Powering South Africa's 2026 FMD recovery through AI diagnostics and Blockchain 
              traceability. We turn livestock and crops into verified, bankable assets.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#demo">
                  <Play className="mr-2 h-4 w-4" />
                  Watch the MVP Demo
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background" 
                asChild
              >
                <Link href="#roadmap">
                  <FileText className="mr-2 h-4 w-4" />
                  View 2026 Roadmap
                </Link>
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

      {/* FMD Crisis Section */}
      <section id="impact" className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              The Challenge
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The FMD Crisis Demands Digital Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {problemCards.map((card) => (
              <Card
                key={card.title}
                className="border-border bg-card hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                    <card.icon className="h-7 w-7 text-destructive" />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="technology" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Technology
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Technology Stack
            </h2>
          </div>

          <div className="space-y-24">
            {techStack.map((tech, index) => (
              <div
                key={tech.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {tech.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                <div className={`relative aspect-video rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.title}
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

      {/* Dual-Commodity Tabs Section */}
      <section id="livestock" className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Modules
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Dual-Commodity Approach
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("livestock")}
              className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all ${
                activeTab === "livestock"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Livestock Module
            </button>
            <button
              id="crops"
              onClick={() => setActiveTab("crops")}
              className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all ${
                activeTab === "crops"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crop Module
            </button>
          </div>

          {/* Tab Content */}
          <Card className="border-border">
            <CardContent className="p-8 lg:p-12">
              {activeTab === "livestock" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                      <Shield className="h-4 w-4" />
                      Active Now
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Livestock Traceability & Biosecurity
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Complete FMD compliance solution with LITS integration and Section 10 scheme support. 
                      Track every animal's health status, movements, and vaccinations with immutable records.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        FMD lesion detection via AI
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        LITS compliance automation
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        Section 10 scheme integration
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        Blockchain health passports
                      </li>
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
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
                      Launching July 2026
                    </div>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Crop Health & Export Compliance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Advanced pest detection and nutrient deficiency analysis for export-grade produce. 
                      Complete residue tracking for international market compliance.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-foreground">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        Fall Armyworm detection
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        Nutrient deficiency analysis
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        Export-grade residue tracking
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        Harvest optimization
                      </li>
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/crop-monitoring.jpg"
                      alt="Crop health monitoring"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investor Portal Section */}
      <section id="investor" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background mesh pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mesh" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Partner With Us
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Investor & Partner Dashboard
            </h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We are currently seeking strategic partners for our R300k Phase 1 expansion.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/investor-portal">
                  <Lock className="mr-2 h-4 w-4" />
                  Enter Secure Investor Portal
                </Link>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Access requires digital signature on NDA before downloading pitch deck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Stats Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Compliance Logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {complianceLogos.map((logo) => (
              <div
                key={logo.name}
                className="px-6 py-3 bg-primary-foreground/10 rounded-lg text-primary-foreground/70 text-sm font-medium"
              >
                {logo.label}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-4xl font-bold text-primary-foreground sm:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-lg text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section id="demo" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
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
                Ready to Secure Your Herd's Future?
              </h2>
              <p className="mt-6 text-xl text-background/80 max-w-2xl mx-auto">
                Join the digital biosecurity revolution. Get compliant before the January 2026 mandate.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" id="get-app">
                <Button size="lg" asChild>
                  <Link href="#get-app">
                    Get the App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background" 
                  asChild
                >
                  <Link href="tel:+27697919811">
                    Call +27 69 791 9811
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
