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

      {/* Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Information
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((item) => (
                  <Card key={item.title} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">{item.title}</p>
                          {item.details.map((detail) => (
                            <p key={detail} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Channels */}
            <div className="space-y-6">
              <h2
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Support Channels
              </h2>
              {/* WhatsApp */}
              <Card className="border-border bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      WhatsApp Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Get quick responses via WhatsApp for technical support and inquiries.
                    Connect directly with our team for immediate assistance.
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <Link href="https://wa.me/27697919811" target="_blank">
                      Open WhatsApp Chat
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Linkedin className="h-8 w-8 text-primary" />
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Follow Us
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Stay updated with the latest news, success stories, and agricultural
                    innovation developments at Kgolo Agritech.
                  </p>
                  <Button variant="outline" size="lg" className="w-full bg-transparent" asChild>
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
