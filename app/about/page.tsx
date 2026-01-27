import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Eye, Heart, Award, Users, Globe } from "lucide-react"

export const metadata = {
  title: "About Us | AeroVeld - South African Agritech Pioneers",
  description:
    "Learn about AeroVeld's mission to transform South African agriculture through aerial and GIS technology.",
}

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "We deliver accurate, reliable data that farmers can trust to make critical decisions.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description:
      "Our technology helps reduce environmental impact while maximizing agricultural output.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work alongside farmers, understanding their unique challenges and goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We continuously improve our technology and services to deliver the best results.",
  },
]

const milestones = [
  {
    year: "2018",
    title: "Founded in Cape Town",
    description: "AeroVeld was established with a vision to modernize South African agriculture.",
  },
  {
    year: "2019",
    title: "First Major Partnership",
    description: "Partnered with leading wine estates in the Western Cape for precision viticulture.",
  },
  {
    year: "2020",
    title: "Livestock Division Launch",
    description: "Expanded services to include livestock tracking for cattle and game farms.",
  },
  {
    year: "2022",
    title: "National Expansion",
    description: "Extended operations to all nine provinces of South Africa.",
  },
  {
    year: "2024",
    title: "500,000 Hectares Mapped",
    description: "Reached milestone of mapping over half a million hectares of farmland.",
  },
]

const team = [
  {
    name: "Thabo Molefe",
    role: "CEO & Founder",
    bio: "Former agricultural engineer with 15 years of experience in precision farming.",
  },
  {
    name: "Sarah van der Berg",
    role: "Chief Technology Officer",
    bio: "GIS specialist and drone technology expert with a background in remote sensing.",
  },
  {
    name: "David Nkosi",
    role: "Head of Operations",
    bio: "Operations leader with extensive experience in agricultural logistics and field deployment.",
  },
  {
    name: "Lerato Mashaba",
    role: "Lead Data Scientist",
    bio: "PhD in agricultural data science, specializing in crop health analytics and predictive modeling.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
                About AeroVeld
              </p>
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Pioneering Agricultural Innovation in Africa
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Founded in Cape Town, AeroVeld is dedicated to transforming South African
                agriculture through cutting-edge aerial and GIS technology. We believe that
                precision farming is the key to sustainable food security.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/about-hero.jpg"
                alt="South African agricultural landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-xl p-8 lg:p-12 border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower South African farmers with accessible, accurate, and actionable aerial
                and geospatial data that improves productivity, reduces costs, and promotes
                sustainable agricultural practices.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 lg:p-12 border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be Africa's leading provider of agricultural intelligence solutions, driving
                the continent toward a future of precision farming and food security for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Values
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-border">
                <CardContent className="pt-8 pb-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Journey
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}
                  >
                    <div
                      className={`bg-card rounded-xl p-6 border border-border inline-block ${
                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      }`}
                    >
                      <p
                        className="text-2xl font-bold text-primary mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {milestone.year}
                      </p>
                      <h3 className="font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 z-10" />

                  {/* Mobile content */}
                  <div className="flex-1 ml-12 md:hidden">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <p
                        className="text-2xl font-bold text-primary mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {milestone.year}
                      </p>
                      <h3 className="font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Our Team
            </p>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Meet the Leadership
            </h2>
            <p className="mt-4 text-muted-foreground">
              A passionate team of agricultural and technology experts dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3
                  className="font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 w-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2
                className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Proudly South African, Globally Minded
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                While we are rooted in South Africa, our technology and expertise are designed to
                address agricultural challenges across the African continent. We are committed to
                contributing to food security and sustainable farming practices that benefit
                communities far and wide.
              </p>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-primary-foreground">
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  9
                </p>
                <p className="text-sm text-primary-foreground/70">Provinces Covered</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  200+
                </p>
                <p className="text-sm text-primary-foreground/70">Farm Partners</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  50+
                </p>
                <p className="text-sm text-primary-foreground/70">Team Members</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  500K
                </p>
                <p className="text-sm text-primary-foreground/70">Hectares Mapped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
