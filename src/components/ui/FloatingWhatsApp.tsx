'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-open once per session after a short delay
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('wa-popup-shown')
    if (alreadyShown) return
    const t = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem('wa-popup-shown', '1')
    }, 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="w-[300px] overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.85)]"
            style={{ border: '1px solid rgba(43,125,232,0.35)' }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3.5"
              style={{ background: '#0A1022', borderBottom: '1px solid rgba(43,125,232,0.12)' }}
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <div
                  className="h-11 w-11 rounded-full overflow-hidden flex items-center justify-center"
                  style={{ background: '#070C18', border: '1px solid rgba(43,125,232,0.4)' }}
                >
                  <Image
                    src="/icon.svg"
                    alt="Big Ben Production"
                    width={32}
                    height={32}
                    style={{ width: '44px', height: '44px' }}
                    unoptimized
                  />
                </div>
                {/* Online indicator */}
                <span
                  className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500"
                  style={{ border: '2px solid #0A1022' }}
                />
              </div>

              {/* Name + role */}
              <div className="flex-1 min-w-0">
                <p className="font-body font-medium text-white text-sm leading-tight truncate">
                  Big Ben Production
                </p>
                <p
                  className="font-body text-[10px] tracking-[0.2em] uppercase truncate mt-0.5"
                  style={{ color: '#2B7DE8' }}
                >
                  Events Production
                </p>
              </div>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="shrink-0 text-text-muted hover:text-white transition-colors duration-200 p-0.5"
                aria-label="Close WhatsApp chat"
              >
                <X size={15} />
              </button>
            </div>

            {/* Message bubble */}
            <div
              className="px-4 py-4"
              style={{ background: '#070C18' }}
            >
              <div
                className="p-4 rounded-sm"
                style={{ background: '#0D1528', border: '1px solid #192238' }}
              >
                <p className="font-display italic text-white/90 text-[15px] leading-relaxed">
                  Hi! Tell us about your event. We&apos;d love to make it unforgettable.
                </p>
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="font-body text-[11px] text-text-muted">Online now</span>
                </div>
              </div>
            </div>

            {/* Start Chat CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 font-body font-medium text-xs tracking-[0.25em] uppercase text-white transition-colors duration-200"
              style={{ background: '#2B7DE8' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#4E9AF5')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#2B7DE8')}
            >
              <WhatsAppIcon size={16} />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 1.5 }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat widget' : 'Open WhatsApp chat'}
        className="relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300"
        style={
          isOpen
            ? {
                background: '#0D1528',
                border: '1px solid rgba(43,125,232,0.3)',
                color: '#ffffff',
              }
            : {
                background: '#2B7DE8',
                color: '#ffffff',
                boxShadow: '0 0 22px rgba(43,125,232,0.5)',
              }
        }
      >
        {/* Pulse ring only when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-gold/40 animate-pulse-ring" />
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <WhatsAppIcon size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
