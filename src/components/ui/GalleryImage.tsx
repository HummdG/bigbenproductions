'use client'

import Image from 'next/image'
import { ZoomIn, MessageCircle } from 'lucide-react'

interface GalleryImageProps {
  src: string
  alt: string
  width: number
  height: number
  promo: boolean
  index: number
  onOpenLightbox: (index: number) => void
  onOpenContact: () => void
}

export default function GalleryImage({
  src,
  alt,
  width,
  height,
  promo,
  index,
  onOpenLightbox,
  onOpenContact,
}: GalleryImageProps) {
  const handleClick = () => {
    if (promo) {
      onOpenContact()
    } else {
      onOpenLightbox(index)
    }
  }

  return (
    <div
      className="group relative overflow-hidden cursor-pointer break-inside-avoid mb-3"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={promo ? 'View package details' : `View: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
          {promo ? (
            <>
              <MessageCircle size={24} className="text-gold" />
              <span className="text-gold font-body text-xs tracking-[0.2em] uppercase">
                View Package
              </span>
            </>
          ) : (
            <>
              <ZoomIn size={24} className="text-gold" />
              <span className="text-gold font-body text-xs tracking-[0.2em] uppercase">
                View
              </span>
            </>
          )}
        </div>
      </div>

      {/* Gold border on hover */}
      {promo && (
        <div className="absolute inset-0 border border-gold/50 pointer-events-none" />
      )}
    </div>
  )
}
