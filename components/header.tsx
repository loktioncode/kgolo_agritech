"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, ChevronRight } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-9 w-9" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary relative py-1",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Button size="sm" className="shadow-lg shadow-primary/20" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-primary/5">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l border-border/50">
            <div className="flex flex-col h-full bg-background">
              <div className="p-8 border-b border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <Logo className="h-8 w-8" />
                  <SheetTitle className="text-sm font-bold text-primary uppercase tracking-widest">

                  </SheetTitle>
                </div>
                <SheetDescription className="text-xs text-muted-foreground">
                  Navigate through our digital agricultural ecosystem.
                </SheetDescription>
              </div>

              <nav className="flex-1 px-4 py-8">
                <div className="space-y-3">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "group flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 translate-x-1"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground hover:translate-x-1"
                        )}
                      >
                        <span className="text-xl font-semibold tracking-tight">{item.name}</span>
                        <ChevronRight className={cn(
                          "h-5 w-5 transition-all duration-300",
                          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                        )} />
                      </Link>
                    )
                  })}
                </div>
              </nav>

              <div className="p-8 bg-secondary/30 border-t border-border/50">
                <div className="grid gap-4">
                  <Button className="w-full justify-center shadow-xl shadow-primary/20 h-14 text-lg font-bold rounded-2xl" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-center h-14 text-lg font-semibold rounded-2xl bg-background" asChild>
                    <Link href="/solutions" onClick={() => setIsOpen(false)}>
                      View Solutions
                    </Link>
                  </Button>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">© 2026 Kgolo Agritech</p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
