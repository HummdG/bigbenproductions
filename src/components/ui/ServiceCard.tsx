'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  Camera,
  Layers,
  Palette,
  Video,
  Film,
  Music,
  Users,
  LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Camera,
  Layers,
  Palette,
  Video,
  Film,
  Music,
  Users,
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Camera

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group relative bg-black-card border border-black-border p-8 overflow-hidden transition-colors duration-300 hover:border-gold/40"
    >
      {/* Hover underline */}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />

      {/* Icon */}
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
        <Icon size={22} className="text-gold" />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl text-white mb-3 leading-snug">
        {title}
      </h3>
      <p className="font-body text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
