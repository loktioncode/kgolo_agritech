"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  MessageCircle,
  Send,
  Calendar,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Kimberley, Northern Cape", "South Africa"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@kgolo.co.za"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 69 791 9811"],
  },
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

const inquiryTypes = [
  "Livestock Traceability",
  "Crop Monitoring",
  "Partnership Inquiry",
  "Investment Opportunity",
  "Technical Support",
  "General Inquiry",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    province: "",
    inquiryType: "",
    farmSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
              Contact Us
            </p>
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl text-balance"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let's Grow Together
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Ready to transform your agricultural operations? Get in touch with our team 
              to discuss how Kgolo Agritech can help you achieve compliance and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+27 XX XXX XXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="province">Province</Label>
                        <Select
                          value={formData.province}
                          onValueChange={(value) =>
                            setFormData({ ...formData, province: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select province" />
                          </SelectTrigger>
                          <SelectContent>
                            {provinces.map((province) => (
                              <SelectItem key={province} value={province}>
                                {province}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, inquiryType: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="farmSize">Farm Size (hectares)</Label>
                        <Input
                          id="farmSize"
                          placeholder="e.g. 500"
                          value={formData.farmSize}
                          onChange={(e) =>
                            setFormData({ ...formData, farmSize: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your agricultural operation and how we can help..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3
                    className="text-lg font-semibold mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{item.title}</p>
                          {item.details.map((detail) => (
                            <p key={detail} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="border-border bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      WhatsApp Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get quick responses via WhatsApp for technical support and inquiries.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="https://wa.me/27697919811" target="_blank">
                      Chat on WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Book Demo */}
              <Card className="border-border bg-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Book a Demo
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    See our technology in action with a personalized demonstration.
                  </p>
                  <Button className="w-full">Schedule Demo</Button>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Follow Us
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Stay updated with the latest news and developments.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="https://linkedin.com/company/kgolo-agritech" target="_blank">
                      Connect on LinkedIn
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
