import { cn } from '@/lib/utils'

interface CircleAccentProps {
  size: number
  opacity?: number
  className?: string
  strokeWidth?: number
}

export default function CircleAccent({
  size,
  opacity = 0.2,
  className,
  strokeWidth = 1,
}: CircleAccentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-hidden="true"
      className={cn('pointer-events-none select-none', className)}
      style={{ opacity }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth}
        stroke="#2B7DE8"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
