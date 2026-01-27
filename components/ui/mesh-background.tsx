import React from 'react';

interface MeshBackgroundProps {
    className?: string;
    opacity?: number;
    size?: number;
}

export function MeshBackground({ className = "", opacity = 0.05, size = 60 }: MeshBackgroundProps) {
    // Use a unique-ish ID to avoid clashes if multiple patterns exist on one page
    const patternId = "mesh-pattern-" + size;
    const gradientId = "fade-gradient-" + size;
    const maskId = "mesh-mask-" + size;

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id={patternId} width={size} height={size} patternUnits="userSpaceOnUse">
                        <circle cx={size / 2} cy={size / 2} r="1.5" fill="currentColor" />
                        <path
                            d={`M${size} ${size / 2}L0 ${size / 2}M${size / 2} 0L${size / 2} ${size}`}
                            stroke="currentColor"
                            strokeWidth="0.5"
                        />
                    </pattern>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="15%" stopColor="white" stopOpacity="1" />
                        <stop offset="85%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <mask id={maskId}>
                        <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} mask={`url(#${maskId})`} />
            </svg>
        </div>
    );
}
