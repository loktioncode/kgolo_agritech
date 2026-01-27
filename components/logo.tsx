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
        {/* African continent silhouette */}
        <path
          d="M24 4C22 4 20 5 19 6C18 7 17 8 16.5 9.5C16 11 15.5 12 14 13C12.5 14 11 15 10 17C9 19 8.5 21 9 23C9.5 25 10 26 10 28C10 30 9.5 32 10 34C10.5 36 11.5 37.5 13 39C14.5 40.5 16 41.5 18 42C20 42.5 22 42 24 42C26 42 27.5 42.5 29 42C30.5 41.5 32 41 33 40C34 39 35 38 35.5 36.5C36 35 36 33.5 36 32C36 30.5 36.5 29 37 28C37.5 27 38.5 26 39 25C39.5 24 39.5 23 39 22C38.5 21 38 20 37.5 19C37 18 37 17 36.5 16C36 15 35 14 34 13.5C33 13 32 13 31 12.5C30 12 29.5 11 29 10C28.5 9 28 8 27 7C26 6 25 5 24 4Z"
          className="fill-primary"
        />
        
        {/* Leaf growing from continent - represents growth and agriculture */}
        <path
          d="M28 18C28 18 32 14 38 12C38 12 36 20 30 24C30 24 32 28 32 32"
          className="stroke-accent"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Leaf blade */}
        <path
          d="M38 12C38 12 34 16 32 18C30 20 29 22 30 24C31 22 33 19 35 17C37 15 38 12 38 12Z"
          className="fill-accent"
        />
        
        {/* Root system beneath - represents deep agricultural roots */}
        <path
          d="M18 34C18 34 16 38 14 42M22 36C22 36 22 40 22 44M26 34C26 34 28 38 30 41"
          className="stroke-primary"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.6"
        />
        
        {/* Small highlight dot */}
        <circle cx="20" cy="20" r="2" className="fill-primary-foreground" fillOpacity="0.3" />
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
