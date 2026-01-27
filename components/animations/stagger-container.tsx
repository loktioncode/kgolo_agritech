"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StaggerContainerProps {
    children: ReactNode
    staggerChildren?: number
    delayChildren?: number
    className?: string
}

export function StaggerContainer({
    children,
    staggerChildren = 0.1,
    delayChildren = 0,
    className = "",
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                initial: {},
                animate: {
                    transition: {
                        staggerChildren,
                        delayChildren,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({
    children,
    direction = "up",
    className = "",
}: {
    children: ReactNode
    direction?: "up" | "down" | "left" | "right" | "none"
    className?: string
}) {
    const directions = {
        up: { y: 20, x: 0 },
        down: { y: -20, x: 0 },
        left: { x: 20, y: 0 },
        right: { x: -20, y: 0 },
        none: { x: 0, y: 0 },
    }

    return (
        <motion.div
            variants={{
                initial: {
                    opacity: 0,
                    ...directions[direction],
                },
                animate: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: "easeOut",
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
