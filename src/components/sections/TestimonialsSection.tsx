'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { TESTIMONIALS } from '@/lib/constants'

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.clientWidth
    el.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-black overflow-hidden relative">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(43,125,232,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Every event is a story. Here is what our clients say about working with us."
          align="center"
        />

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              text={t.text}
              rating={t.rating}
              index={i}
            />
          ))}
        </div>

        {/* Additional 2 on large screens */}
        <div className="hidden lg:grid grid-cols-3 gap-5 mt-5">
          <div /> {/* spacer */}
          {TESTIMONIALS.slice(3, 5).map((t, i) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              role={t.role}
              text={t.text}
              rating={t.rating}
              index={i + 3}
            />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={(e) => {
              const el = e.currentTarget
              const idx = Math.round(el.scrollLeft / el.clientWidth)
              setActiveIndex(idx)
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="shrink-0 w-full snap-start">
                <TestimonialCard
                  name={t.name}
                  role={t.role}
                  text={t.text}
                  rating={t.rating}
                  index={i}
                />
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => scroll('left')}
              className="h-8 w-8 flex items-center justify-center border border-black-border text-text-secondary hover:text-gold hover:border-gold/40 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    scrollRef.current?.scrollTo({ left: i * (scrollRef.current.clientWidth), behavior: 'smooth' })
                    setActiveIndex(i)
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-6 bg-gold' : 'w-1.5 bg-black-border'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="h-8 w-8 flex items-center justify-center border border-black-border text-text-secondary hover:text-gold hover:border-gold/40 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
