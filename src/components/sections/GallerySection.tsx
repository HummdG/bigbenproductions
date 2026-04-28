'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import GalleryImage from '@/components/ui/GalleryImage'
import { GALLERY_IMAGES, GALLERY_DISPLAY_ORDER } from '@/lib/constants'

// Only non-promo images go into lightbox
const lightboxImages = GALLERY_IMAGES.filter((img) => !img.promo)

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((galleryIndex: number) => {
    const img = GALLERY_IMAGES[galleryIndex]
    if (img.promo) return
    const lbIdx = lightboxImages.findIndex((i) => i.src === img.src)
    if (lbIdx !== -1) setLightboxIndex(lbIdx)
  }, [])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + lightboxImages.length) % lightboxImages.length : 0
    )
  }, [])

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % lightboxImages.length : 0
    )
  }, [])

  const scrollToContact = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <section id="gallery" className="py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="The Gallery"
            subtitle="From weddings to birthday milestones. Here is a glimpse of what we've produced."
            align="center"
          />

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {GALLERY_DISPLAY_ORDER.map((imgIndex) => {
              const img = GALLERY_IMAGES[imgIndex]
              return (
                <GalleryImage
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  promo={img.promo}
                  index={imgIndex}
                  onOpenLightbox={openLightbox}
                  onOpenContact={scrollToContact}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center text-white/60 hover:text-gold transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Counter */}
            <p className="absolute top-5 left-1/2 -translate-x-1/2 font-body text-xs text-white/40 tracking-widest">
              {lightboxIndex + 1} / {lightboxImages.length}
            </p>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center text-white/60 hover:text-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[85vh] max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImages[lightboxIndex].src}
                alt={lightboxImages[lightboxIndex].alt}
                width={lightboxImages[lightboxIndex].width}
                height={lightboxImages[lightboxIndex].height}
                className="max-h-[85vh] w-auto h-auto object-contain"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 flex items-center justify-center text-white/60 hover:text-gold transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
