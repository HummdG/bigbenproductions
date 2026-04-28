'use client'

import { motion } from 'framer-motion'
import GoldButton from '@/components/ui/GoldButton'
import { WHATSAPP_URL } from '@/lib/constants'

interface PackageCardProps {
  badge: string
  title: string
  subtitle?: string
  description: string
  price: string
  priceNote?: string
  includes: string[]
  index: number
}

export default function PackageCard({
  badge,
  title,
  subtitle,
  description,
  price,
  priceNote,
  includes,
  index,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="group relative overflow-hidden border border-gold/25 hover:border-gold/50 transition-colors duration-500"
      style={{
        background: `
          radial-gradient(circle 180px at 20% 80%, rgba(43,125,232,0.12) 0%, transparent 100%),
          radial-gradient(circle 120px at 85% 15%, rgba(43,125,232,0.08) 0%, transparent 100%),
          radial-gradient(circle 220px at 60% 45%, rgba(43,125,232,0.04) 0%, transparent 100%),
          radial-gradient(circle 80px at 40% 20%, rgba(43,125,232,0.06) 0%, transparent 100%),
          #0D1528
        `,
      }}
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-8 h-px bg-gold/60" />
      <span className="absolute top-0 left-0 w-px h-8 bg-gold/60" />
      <span className="absolute bottom-0 right-0 w-8 h-px bg-gold/60" />
      <span className="absolute bottom-0 right-0 w-px h-8 bg-gold/60" />

      {/* Subtle shimmer overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(43,125,232,0.04) 0%, transparent 50%, rgba(43,125,232,0.04) 100%)',
        }}
      />

      <div className="relative p-8 md:p-10 flex flex-col h-full min-h-[340px]">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block font-body text-[10px] tracking-[0.35em] uppercase text-gold border border-gold/40 px-3 py-1">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-3xl md:text-4xl text-white leading-[1.05] tracking-tight mb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="font-display italic text-lg text-gold mb-4">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <p className="font-body text-sm text-text-secondary leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Includes chips */}
        {includes.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {includes.map((item) => (
              <span
                key={item}
                className="font-body text-xs text-gold border border-gold/50 px-3 py-1.5 tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-4 border-t border-gold/15">
          <div>
            <p className="font-display text-3xl text-gold leading-none">{price}</p>
            {priceNote && (
              <p className="font-body text-[11px] text-text-muted tracking-wider mt-1">
                {priceNote}
              </p>
            )}
          </div>
          <GoldButton
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            variant="outline"
          >
            Enquire
          </GoldButton>
        </div>
      </div>
    </motion.div>
  )
}
