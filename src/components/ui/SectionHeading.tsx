import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div className={cn('mb-14', isCenter ? 'text-center' : 'text-left', className)}>
      {eyebrow && (
        <p
          className={cn(
            'text-gold font-body text-xs tracking-[0.3em] uppercase mb-4',
            isCenter ? 'text-center' : 'text-left'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight',
          titleClassName
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'mt-5 h-px w-10 bg-gold',
          isCenter ? 'mx-auto' : 'ml-0'
        )}
      />
      {subtitle && (
        <p
          className={cn(
            'mt-6 text-text-secondary font-body text-base leading-relaxed max-w-xl',
            isCenter ? 'mx-auto' : ''
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
