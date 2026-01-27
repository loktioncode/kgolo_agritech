interface LogoProps {
  className?: string
  showText?: boolean
  variant?: "default" | "light"
}

export function Logo({ className = "h-8 w-8", showText = true, variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-background" : "text-foreground"
  
  return (
    <div className="flex items-center gap-2.5">
      <svg
        className={className}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main stem */}
        <path
          d="M24 44V20"
          className="stroke-primary"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Left leaf - lower */}
        <path
          d="M24 34C24 34 14 32 10 26C10 26 16 24 24 28"
          className="fill-primary"
        />
        
        {/* Right leaf - lower */}
        <path
          d="M24 34C24 34 34 32 38 26C38 26 32 24 24 28"
          className="fill-primary"
        />
        
        {/* Left leaf - upper */}
        <path
          d="M24 26C24 26 16 24 12 18C12 18 18 16 24 20"
          className="fill-primary"
        />
        
        {/* Right leaf - upper */}
        <path
          d="M24 26C24 26 32 24 36 18C36 18 30 16 24 20"
          className="fill-primary"
        />
        
        {/* Top sprouting leaves */}
        <path
          d="M24 20C24 20 18 16 16 10C16 10 22 10 24 14"
          className="fill-accent"
        />
        <path
          d="M24 20C24 20 30 16 32 10C32 10 26 10 24 14"
          className="fill-accent"
        />
        
        {/* Center growth tip */}
        <path
          d="M24 14C24 14 22 8 24 4C26 8 24 14 24 14Z"
          className="fill-accent"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span 
            className={`text-lg font-bold tracking-tight ${textColor}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Kgolo
          </span>
          <span 
            className={`text-[10px] font-medium uppercase tracking-widest ${variant === "light" ? "text-background/70" : "text-muted-foreground"}`}
          >
            Agritech
          </span>
        </div>
      )}
    </div>
  )
}
