'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  text: string
  rating: number
  index: number
}

export default function TestimonialCard({
  name,
  role,
  text,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="relative bg-black-card border-t-2 border-t-gold border border-black-border p-8 flex flex-col gap-5"
    >
      {/* Opening quote */}
      <span className="font-display text-6xl leading-none text-gold/40 select-none -mb-4">
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="text-gold fill-gold" />
        ))}
      </div>

      {/* Text */}
      <p className="font-body text-sm leading-relaxed text-text-secondary flex-1">
        {text}
      </p>

      {/* Divider */}
      <div className="h-px w-8 bg-gold/40" />

      {/* Author */}
      <div>
        <p className="font-body font-medium text-gold text-sm">{name}</p>
        <p className="font-body text-xs text-text-muted mt-0.5">{role}</p>
      </div>
    </motion.div>
  )
}
