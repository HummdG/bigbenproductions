'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import GoldButton from '@/components/ui/GoldButton'

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  }
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/gallery/pic3.png"
        alt="Wedding event covered by Big Ben Production"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/72 to-black/96" />

      {/* Radial blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(43,125,232,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Eyebrow */}
        <motion.p
          {...fadeUpProps(0)}
          className="font-body text-gold text-xs md:text-sm tracking-[0.35em] uppercase mb-6"
        >
          Premier Events Production
        </motion.p>

        {/* Gold separator */}
        <motion.div
          {...fadeUpProps(0.15)}
          className="mx-auto mb-7 h-px w-10 bg-gold"
        />

        {/* Headline */}
        <motion.h1
          {...fadeUpProps(0.3)}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.0] tracking-tight text-white mb-7"
        >
          Your Event,{' '}
          <span className="font-display italic font-light text-gold-pale">
            Our Production
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUpProps(0.45)}
          className="font-body text-base md:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          360 photo booth experiences, cinematic event coverage, and professional production setups — crafted to make every celebration unforgettable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUpProps(0.6)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GoldButton href="#contact" size="lg" variant="filled">
            Book Now
          </GoldButton>
          <GoldButton href="#gallery" size="lg" variant="outline">
            View Our Work
          </GoldButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-[0.2em] uppercase text-white/30">
          Scroll
        </span>
        <ChevronDown size={16} className="text-gold animate-bounce" />
      </motion.div>
    </section>
  )
}
