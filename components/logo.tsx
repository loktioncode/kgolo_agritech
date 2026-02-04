interface LogoProps {
  className?: string
  showText?: boolean
  variant?: "default" | "light"
}

import Image from "next/image"

export function Logo({ className = "h-8 w-8", showText = true, variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-background" : "text-foreground"

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/kgolo.svg"
        alt="Kgolo Logo"
        width={130}
        height={152}
        className={className}
        style={{ width: '35%', height: 'auto' }}
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`text-xl font-bold tracking-tight ${textColor}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            KGOLO
          </span>
          <span
            className={`text-[10px] font-medium uppercase tracking-widest ${variant === "light" ? "text-background/70" : "text-muted-foreground"}`}
          >
            AGRICULTURE
          </span>
        </div>
      )}
    </div>
  )
}
