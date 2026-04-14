import { HomeClient } from "@/components/home-client"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kgolo (Growth) | Your farm, verified. Your future, unlocked.",
  description:
    "Offline-first digital farmer ID on your phone. Prove who you are, what you own, and what you grow   North West pilot, farmer-owned data.",
  keywords: [
    "Kgolo",
    "digital farmer ID",
    "offline farming app South Africa",
    "North West pilot",
    "livestock traceability",
    "LITS",
    "smallholder farmers",
  ],
}

export default function HomePage() {
  return <HomeClient />
}
