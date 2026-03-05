import { HomeClient } from "@/components/home-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kgolo Agriculture | Digital Ledger for African Biosecurity",
  description: "Powering South Africa's 2026 FMD recovery through AI diagnostics and Blockchain traceability. Turning livestock and crops into verified, bankable assets.",
  keywords: ["FMD recovery 2026", "livestock traceability", "Agriculture South Africa", "blockchain agriculture", "AI diagnostics"],
}

export default function HomePage() {
  return <HomeClient />
}
