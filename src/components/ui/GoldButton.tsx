import { cn } from '@/lib/utils'

interface GoldButtonProps {
  variant?: 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit'
  disabled?: boolean
  target?: string
  rel?: string
}

const sizeClasses = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer select-none'

const variantClasses = {
  filled:
    'bg-gold text-white border-2 border-gold hover:bg-gold-light hover:border-gold-light hover:shadow-[0_0_25px_rgba(43,125,232,0.4)] active:scale-[0.98]',
  outline:
    'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-black hover:shadow-[0_0_25px_rgba(43,125,232,0.3)] active:scale-[0.98]',
}

export default function GoldButton({
  variant = 'filled',
  size = 'md',
  href,
  onClick,
  className,
  children,
  type = 'button',
  disabled,
  target,
  rel,
}: GoldButtonProps) {
  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  )

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
