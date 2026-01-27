"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Calendar,
  FileText,
  CheckCircle2,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Agricultural Tech Park", "Cape Town, Western Cape", "South Africa, 8001"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@aeroveld.co.za", "support@aeroveld.co.za"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 21 123 4567", "+27 82 456 7890 (WhatsApp)"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 - 17:00", "Saturday: 9:00 - 13:00"],
  },
]

const inquiryTypes = [
  { value: "quote", label: "Request a Quote" },
  { value: "demo", label: "Book a Demo" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
]

const farmTypes = [
  { value: "crops", label: "Crop Farming" },
  { value: "livestock", label: "Livestock / Game" },
  { value: "viticulture", label: "Viticulture / Wine" },
  { value: "forestry", label: "Forestry / Timber" },
  { value: "mixed", label: "Mixed Operations" },
  { value: "other", label: "Other" },
]

const provinces = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
  "Western Cape",
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Get In Touch
            </p>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {"Let's Transform Your Farm Together"}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ready to harness the power of aerial and GIS technology? Our team is here to help
              you get started. Reach out for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-border">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8 lg:p-12">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Thank You!
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Your message has been received. Our team will review your inquiry and get
                      back to you within 24-48 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and our team will get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required placeholder="Smith" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="john@example.co.za"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+27 82 123 4567" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="farmType">Farm/Operation Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select farm type" />
                            </SelectTrigger>
                            <SelectContent>
                              {farmTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="province">Province</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select province" />
                            </SelectTrigger>
                            <SelectContent>
                              {provinces.map((province) => (
                                <SelectItem key={province} value={province.toLowerCase().replace(/ /g, "-")}>
                                  {province}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="farmSize">Farm Size (hectares)</Label>
                          <Input id="farmSize" type="number" placeholder="e.g., 500" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          placeholder="Tell us about your farm, challenges, and what you're looking to achieve..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Book a Demo
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    See our technology in action with a personalized demonstration tailored to
                    your operation.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      Schedule Demo
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Free Assessment
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a complimentary farm assessment to identify opportunities for precision
                    agriculture on your land.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      Request Assessment
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      WhatsApp Support
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    For quick questions or existing customer support, reach us on WhatsApp.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://wa.me/27824567890" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3
                  className="font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Existing Customer?
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Access your dashboard to view maps, reports, and manage your account.
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="#" onClick={(e) => e.preventDefault()}>
                    Customer Portal
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Find Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Visit our headquarters in Cape Town or schedule an on-site consultation at your
              farm anywhere in South Africa.
            </p>
          </div>

          <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                  AeroVeld Headquarters
                </p>
                <p className="text-sm text-muted-foreground">
                  123 Agricultural Tech Park, Cape Town
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
