import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Gavel } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { MeshBackground } from "@/components/ui/mesh-background"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Legal Information | Kgolo Agriculture - POPIA & Terms",
    description: "Legal information, Terms of Service, and POPIA notice for Kgolo (Pty) Ltd, a South African Agriculture company.",
}

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-32 pb-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <FadeIn direction="down">
                            <h1
                                className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Legal Information
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Terms of Service & Privacy Policy Notice
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid gap-12 relative overflow-hidden">
                        <MeshBackground opacity={0.03} />
                        {/* Section: Regulatory Framework */}
                        <FadeIn direction="up" delay={0.2}>
                            <section className="bg-secondary/30 rounded-3xl p-8 lg:p-12 border border-border">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Gavel className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2
                                        className="text-2xl font-bold"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        Governing Law
                                    </h2>
                                </div>
                                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                                    Kgolo (Pty) Ltd is a South African registered company. All our operations,
                                    services, and legal agreements are governed by and construed in accordance
                                    with the laws of the Republic of South Africa.
                                </p>
                            </section>
                        </FadeIn>

                        {/* Section: Privacy & POPIA */}
                        <FadeIn direction="up" delay={0.3}>
                            <section className="p-8 lg:p-12 border-l-4 border-primary bg-card/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2
                                        className="text-2xl font-bold"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        Privacy & POPIA Compliance
                                    </h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        We are committed to protecting your personal information in compliance with
                                        the <strong>Protection of Personal Information Act (POPIA)</strong>.
                                    </p>
                                    <p>
                                        Our data processing practices are designed to ensure transparency,
                                        accountability, and the security of all agricultural and personal data
                                        entrusted to us.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>We only collect data necessary for our service delivery.</li>
                                        <li>Data is used primarily for biosecurity and traceability reporting.</li>
                                        <li>You retain the right to access and request correction of your data.</li>
                                        <li>Farmer data is never sold. We do not share personal or production data without your consent.</li>
                                        <li>
                                            You may request account and personal data deletion via{" "}
                                            <Link href="/delete-accounts" className="underline hover:text-foreground">
                                                /delete-accounts
                                            </Link>{" "}
                                            or by contacting <strong>info@kgolo.co.za</strong>. In the{" "}
                                            <strong>Kgolo Farmer ID</strong> app, use Settings →{" "}
                                            <strong>Withdraw consent</strong> to delete all local data immediately.
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </FadeIn>

                        {/* Section: Mobile App Data Collection & Use */}
                        <FadeIn direction="up" delay={0.35}>
                            <section className="p-8 lg:p-12 border-l-4 border-primary bg-card/50">
                                <h2
                                    className="text-2xl font-bold mb-6"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    Mobile App Data Collection & Use
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        This section explains how the KGOLO mobile app collects and uses data when
                                        permissions are granted on your device.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            <strong>Camera:</strong> Used to capture profile photos and field/record images.
                                        </li>
                                        <li>
                                            <strong>Location (fine/coarse):</strong> Used to capture parcel and field GPS coordinates.
                                        </li>
                                        <li>
                                            <strong>Microphone/Audio:</strong> Not used by Kgolo Farmer ID (still photos only).
                                        </li>
                                        <li>
                                            <strong>Calendar:</strong> Used to create reminders and scheduled farm activity events.
                                        </li>
                                        <li>
                                            <strong>Photos/Media access:</strong> Used to upload images from your gallery into records.
                                        </li>
                                        <li>
                                            <strong>Notifications:</strong> Used to deliver reminders and important alerts.
                                        </li>
                                        <li>
                                            <strong>Backend transfer/storage:</strong> Relevant operational data is transmitted to and
                                            stored via our backend services at <strong>api.kgolo.co.za</strong> according to our retention
                                            and security controls.
                                        </li>
                                        <li>
                                            <strong>User controls:</strong> You can revoke permissions at device level, request correction
                                            or deletion of personal data, and contact us at <strong>info@kgolo.co.za</strong>.
                                        </li>
                                    </ul>
                                    <p>
                                        We do not sell personal data. Any sharing of data with third parties is limited to what is
                                        necessary for service delivery, legal compliance, or with your consent.
                                    </p>
                                </div>
                            </section>
                        </FadeIn>

                        {/* Section: Terms of Use */}
                        <FadeIn direction="up" delay={0.4}>
                            <section className="p-8 lg:p-12 border-l-4 border-primary bg-card/50">
                                <h2
                                    className="text-2xl font-bold mb-6"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    General Terms of Use
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        By using the Kgolo platform, you agree to provide accurate and truthful
                                        information regarding livestock health and crop status. Misleading entries
                                        may compromise national biosecurity efforts.
                                    </p>
                                    <p>
                                        Our services are provided "as-is" to assist with regulatory compliance
                                        and agricultural management. For detailed statutory obligations, please
                                        refer to the relevant agricultural acts available on the Law Library website.
                                    </p>
                                </div>
                            </section>
                        </FadeIn>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-sm text-muted-foreground">
                            Last Updated: April 2026<br />
                            &copy; 2026 Kgolo (Pty) Ltd.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
