"use client"

import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"
import { PageTransition } from "./animations/page-transition"

interface MotionProviderProps {
    children: ReactNode
}

export function MotionProvider({ children }: MotionProviderProps) {
    return (
        <AnimatePresence mode="wait">
            <PageTransition>{children}</PageTransition>
        </AnimatePresence>
    )
}
