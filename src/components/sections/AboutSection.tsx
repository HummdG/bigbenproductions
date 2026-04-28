'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import CircleAccent from '@/components/ui/CircleAccent'
import GoldButton from '@/components/ui/GoldButton'

const stats = [
  { value: '200+', label: 'Events Produced' },
  { value: '5★', label: 'Rated Service' },
  { value: '100%', label: 'Professional Every Time' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-black-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: logo composition */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative circles */}
            <CircleAccent
              size={420}
              opacity={0.08}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <CircleAccent
              size={300}
              opacity={0.12}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <CircleAccent
              size={180}
              opacity={0.18}
              strokeWidth={1.5}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            {/* Logo */}
            <div className="relative z-10">
              <Image
                src="/brand/logo.png"
                alt="Big Ben Production"
                width={280}
                height={280}
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
              />
            </div>

            {/* Subtle blue glow behind logo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle 200px at 50% 50%, rgba(43,125,232,0.10) 0%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <SectionHeading
              eyebrow="About Us"
              title="Crafted for Every Moment"
              align="left"
              className="mb-8"
            />

            <p className="font-body text-text-secondary leading-relaxed mb-5">
              Big Ben Production is a premier events production company specialising in 360 photo booth experiences, professional event videography, and full production setups for weddings, birthdays, and corporate events.
            </p>
            <p className="font-body text-text-secondary leading-relaxed mb-8">
              From our signature 360 spinning booth to cinematic wedding films, multi-camera event coverage, and bespoke venue setups — every element we create is considered, intentional, and entirely unique to you.
            </p>

            {/* Pull quote */}
            <div className="border-l-2 border-gold pl-5 mb-10">
              <p className="font-display italic text-xl text-gold-pale leading-relaxed">
                &ldquo;We don&apos;t just cover events. We create the moments everyone talks about long after the night ends.&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl text-gold leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-text-muted tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <GoldButton href="#contact" size="md">
              Work With Us
            </GoldButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
