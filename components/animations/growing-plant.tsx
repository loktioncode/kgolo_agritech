"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface GrowingPlantProps {
    className?: string
    delay?: number
    height?: number | string
    color?: "primary" | "accent"
    scrollContainerRef?: React.RefObject<HTMLElement>
}

export function GrowingPlant({
    className = "w-12 h-12",
    delay = 0,
    height = 48,
    color = "primary",
    scrollContainerRef,
}: GrowingPlantProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"],
    })

    // Transform scroll progress to scale and opacity
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
    const translateY = useTransform(scrollYProgress, [0, 1], [20, 0])

    const stemColor = color === "primary" ? "stroke-primary" : "stroke-accent"
    const leafColor = color === "primary" ? "fill-primary" : "fill-accent"
    const topLeafColor = "fill-accent"

    return (
        <motion.div
            ref={containerRef}
            style={{
                scale,
                opacity,
                y: translateY,
            }}
            className={`inline-block ${className}`}
        >
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Main stem */}
                <motion.path
                    d="M24 44V20"
                    className={stemColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: scrollYProgress }}
                />

                {/* Left leaf - lower */}
                <motion.path
                    d="M24 34C24 34 14 32 10 26C10 26 16 24 24 28"
                    className={leafColor}
                    initial={{ opacity: 0, scale: 0 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
                        scale: useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
                    }}
                />

                {/* Right leaf - lower */}
                <motion.path
                    d="M24 34C24 34 34 32 38 26C38 26 32 24 24 28"
                    className={leafColor}
                    initial={{ opacity: 0, scale: 0 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]),
                        scale: useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
                    }}
                />

                {/* Left leaf - upper */}
                <motion.path
                    d="M24 26C24 26 16 24 12 18C12 18 18 16 24 20"
                    className={leafColor}
                    initial={{ opacity: 0, scale: 0 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1]),
                        scale: useTransform(scrollYProgress, [0.5, 0.8], [0, 1])
                    }}
                />

                {/* Right leaf - upper */}
                <motion.path
                    d="M24 26C24 26 32 24 36 18C36 18 30 16 24 20"
                    className={leafColor}
                    initial={{ opacity: 0, scale: 0 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1]),
                        scale: useTransform(scrollYProgress, [0.5, 0.8], [0, 1])
                    }}
                />

                {/* Top sprouting leaves */}
                <motion.path
                    d="M24 20C24 20 18 16 16 10C16 10 22 10 24 14"
                    className={topLeafColor}
                    initial={{ opacity: 0, scale: 0 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
                        scale: useTransform(scrollYProgress, [0.7, 1], [0, 1])
                    }}
                />
                <motion.path
                    d="M24 20C24 20 30 16 32 10C32 10 26 10 24 14"
                    className={topLeafColor}
                    initial={{ opacity: 0, scale: 0 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
                        scale: useTransform(scrollYProgress, [0.7, 1], [0, 1])
                    }}
                />

                {/* Center growth tip */}
                <motion.path
                    d="M24 14C24 14 22 8 24 4C26 8 24 14 24 14Z"
                    className={topLeafColor}
                    initial={{ opacity: 0, scale: 0 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
                        scale: useTransform(scrollYProgress, [0.8, 1], [0, 1])
                    }}
                />
            </svg>
        </motion.div>
    )
}
