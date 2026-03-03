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
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { MeshBackground } from "@/components/ui/mesh-background"
import { GrowingPlant } from "@/components/animations/growing-plant"

const problemCards = [
    {
        icon: Ban,
        title: "Export Bans",
        description:
            "The R80bn beef industry is locked out of global markets due to trust gaps in paper records.",
        image: "/images/export-bans-bg.png",
    },
    {
        icon: Clock,
        title: "Traceability Lapses",
        description:
            "Current LITS registration is too slow for the January 2026 mandate.",
        image: "/images/traceability-lapses-bg.png",
    },
    {
        icon: Users,
        title: "Smallholder Exclusion",
        description:
            "Emerging farmers lack the tech to prove their herd's health status.",
        image: "/images/smallholder-exclusion-bg.png",
    },
]

const techStack = [
    {
        icon: Brain,
        title: "AI Neural Vision",
        description:
            "Our Google Vertex-powered AI identifies FMD lesions and crop deficiencies in seconds, directly from a smartphone camera.",
        image: "/images/cattle-fmd-ai.png",
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
            "Engineered for the North West. Our 'Offline-First' architecture ensures data integrity in regions with zero connectivity.",
        image: "/images/livestock-tracking.jpg",
    },
]

const complianceLogos = [
    { name: "SABS", label: "SABS Certified" },
    { name: "POPIA", label: "POPIA Compliant" },
    { name: "LITS", label: "LITS Compliant" },
]

const stats = [
    { value: "7.2M", label: "Potential Cattle Tracked" },
    { value: "100%", label: "Tamper-Proof Records" },
    { value: "Zero-Data", label: "Offline Mode" },
]

export function HomeClient() {
    const [activeTab, setActiveTab] = useState<"livestock" | "crops">("livestock")

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
                            <p className="text-lg text-accent font-medium italic mb-4">
                                "Innovating Agriculture for Tomorrow"
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.4}>
                            <h1
                                className="text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl text-balance"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                The Digital Ledger for African Biosecurity
                            </h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.6}>
                            <p className="mt-6 text-xl text-background/90 leading-relaxed max-w-2xl">
                                Powering South Africa's 2026 FMD recovery through AI diagnostics and Blockchain
                                traceability. We turn livestock and crops into verified, bankable assets.
                            </p>
                        </FadeIn>
                        <FadeIn direction="up" delay={0.8} className="mt-10">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" asChild className="hover:scale-105 transition-transform">
                                    <Link href="/contact">
                                        <Play className="mr-2 h-4 w-4" />
                                        Learn More
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background hover:scale-105 transition-transform"
                                    asChild
                                >
                                    <Link href="/about#our-journey">
                                        <FileText className="mr-2 h-4 w-4" />
                                        View 2026 Roadmap
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Scroll indicator */}
                <FadeIn direction="none" delay={1.2} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-bounce" />
                    </div>
                </FadeIn>
            </section>

            {/* FMD Crisis Section */}
            <section id="impact" className="py-24 lg:py-32 bg-secondary">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <FadeIn direction="up">
                            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                                The Challenge
                            </p>
                            <h2
                                className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                The FMD Crisis Demands Digital Solutions
                            </h2>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {problemCards.map((card) => (
                            <StaggerItem key={card.title}>
                                <Card
                                    className="relative border-border bg-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden group min-h-[320px]"
                                >
                                    {/* Background Image */}
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
                                        <div className="h-14 w-14 rounded-xl bg-destructive/20 flex items-center justify-center mb-6">
                                            <card.icon className="h-7 w-7 text-destructive" />
                                        </div>
                                        <h3
                                            className="text-xl font-semibold mb-3 text-background"
                                            style={{ fontFamily: "var(--font-display)" }}
                                        >
                                            {card.title}
                                        </h3>
                                        <p className="text-background/80 leading-relaxed mb-auto">
                                            {card.description}
                                        </p>
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
                                Our Technology
                            </p>
                            <h2
                                className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                The Technology Stack
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="space-y-24">
                        {techStack.map((tech, index) => (
                            <FadeIn
                                key={tech.title}
                                direction={index % 2 === 0 ? "right" : "left"}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
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
                                <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <Image
                                        src={tech.image || "/placeholder.svg"}
                                        alt={tech.title}
                                        fill
                                        className="object-cover"
                                    />
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
                                Our Modules
                            </p>
                            <h2
                                className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                The Dual-Commodity Approach
                            </h2>
                        </FadeIn>
                    </div>

                    {/* Tabs */}
                    <FadeIn direction="up" delay={0.2} className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveTab("livestock")}
                            className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 ${activeTab === "livestock"
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
                            className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 ${activeTab === "crops"
                                ? "bg-primary text-primary-foreground shadow-lg"
                                : "bg-card text-muted-foreground hover:bg-card/80"
                                }`}
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Crop Module
                        </button>
                    </FadeIn>

                    {/* Tab Content */}
                    <FadeIn direction="up" delay={0.4}>
                        <Card className="border-border overflow-hidden">
                            <CardContent className="p-8 lg:p-12">
                                {activeTab === "livestock" ? (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                                                <Shield className="h-4 w-4" />
                                                Coming Soon
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
                                                Launching January 2027
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
                                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
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
                    </FadeIn>
                </div>
            </section>

            {/* Investor Portal Section */}
            <section id="investor" className="py-24 lg:py-32 relative overflow-hidden">
                <MeshBackground opacity={0.05} />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <FadeIn direction="up">
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
                        </FadeIn>
                        <FadeIn direction="up" delay={0.2} className="mt-10">
                            <Button size="lg" asChild className="hover:scale-105 transition-transform shadow-lg">
                                <Link href="https://wa.me/27697919811?text=I%20am%20willing%20to%20invest%2C%20let%27s%20set%20a%20meeting%20at%20your%20earliest%20convenience." target="_blank">
                                    <Lock className="mr-2 h-4 w-4" />
                                    Enter Secure Investor Portal
                                </Link>
                            </Button>
                            <p className="mt-4 text-sm text-muted-foreground">
                                Access requires digital signature on NDA before downloading pitch deck.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Compliance & Stats Section */}
            <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
                {/* Decorative Plants */}
                <div className="absolute bottom-0 left-0 w-full flex justify-around items-end px-12 pointer-events-none opacity-20">
                    <GrowingPlant className="w-24 h-24" color="accent" />
                    <GrowingPlant className="w-32 h-32" color="primary" />
                    <GrowingPlant className="w-20 h-20" color="accent" />
                    <GrowingPlant className="w-40 h-40" color="primary" />
                    <GrowingPlant className="w-28 h-28" color="accent" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Compliance Logos */}
                    <StaggerContainer className="flex flex-wrap justify-center gap-8 mb-16">
                        {complianceLogos.map((logo) => (
                            <StaggerItem
                                key={logo.name}
                            >
                                <div className="px-6 py-3 bg-primary-foreground/10 rounded-lg text-primary-foreground/70 text-sm font-medium hover:bg-primary-foreground/20 transition-colors">
                                    {logo.label}
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Stats */}
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
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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
                                    <Button size="lg" asChild className="hover:scale-105 transition-transform">
                                        <Link href="#">
                                            App Coming Soon
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background hover:scale-105 transition-transform"
                                        asChild
                                    >
                                        <Link href="tel:+27697919811">
                                            Call +27 69 791 9811
                                        </Link>
                                    </Button>
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
