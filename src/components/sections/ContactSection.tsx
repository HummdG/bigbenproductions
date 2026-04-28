'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import GoldButton from '@/components/ui/GoldButton'
import { WHATSAPP_URL } from '@/lib/constants'

const EVENT_TYPES = [
  'Wedding',
  'Birthday',
  'Anniversary',
  'Corporate Event',
  'Baby Shower',
  'Graduation',
  'Other',
]

interface FormData {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    // Simulate submit; wire up NEXT_PUBLIC_FORM_ENDPOINT before launch
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-black-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let&apos;s Plan Your Event"
          subtitle="Tell us about your event and we'll get back to you within the hour."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* WhatsApp CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            {/* Main WhatsApp card */}
            <div className="relative bg-black border border-gold/30 p-10 text-center lg:text-left overflow-hidden">
              {/* Corner gold lines */}
              <span className="absolute top-0 left-0 w-10 h-px bg-gold" />
              <span className="absolute top-0 left-0 w-px h-10 bg-gold" />
              <span className="absolute bottom-0 right-0 w-10 h-px bg-gold" />
              <span className="absolute bottom-0 right-0 w-px h-10 bg-gold" />

              {/* WhatsApp icon */}
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gold/10 border border-gold/20">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="#2B7DE8" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-display text-2xl text-white mb-3">
                Chat on WhatsApp
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed mb-8">
                The fastest way to reach us. We typically respond within the hour and love to discuss your event ideas before anything is set in stone.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-gold text-white font-body font-medium text-sm tracking-[0.15em] uppercase py-4 px-8 hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_25px_rgba(43,125,232,0.4)]"
              >
                Open WhatsApp
              </a>
            </div>

            {/* Small note */}
            <p className="font-body text-xs text-text-muted text-center leading-relaxed">
              Prefer a form? Use the enquiry form on the right and we&apos;ll reply by email within 24 hours.
            </p>
          </motion.div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
                <div className="h-16 w-16 rounded-full border-2 border-gold flex items-center justify-center">
                  <span className="text-gold text-2xl">✓</span>
                </div>
                <h3 className="font-display text-2xl text-white">Message Received</h3>
                <p className="font-body text-sm text-text-secondary max-w-sm">
                  Thank you for reaching out. We&apos;ll review your enquiry and be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs tracking-wider uppercase text-text-muted">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className="bg-black border border-black-border text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-text-muted"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 font-body">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs tracking-wider uppercase text-text-muted">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="bg-black border border-black-border text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-text-muted"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 font-body">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone + Event type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs tracking-wider uppercase text-text-muted">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="bg-black border border-black-border text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors placeholder:text-text-muted"
                      placeholder="+44 7xxx xxxxxx"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-body text-xs tracking-wider uppercase text-text-muted">
                      Event Type
                    </label>
                    <select
                      value={form.eventType}
                      onChange={(e) => update('eventType', e.target.value)}
                      className="bg-black border border-black-border text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select type</option>
                      {EVENT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Event date */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs tracking-wider uppercase text-text-muted">
                    Approximate Event Date
                  </label>
                  <input
                    type="date"
                    value={form.eventDate}
                    onChange={(e) => update('eventDate', e.target.value)}
                    className="bg-black border border-black-border text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-xs tracking-wider uppercase text-text-muted">
                    Tell Us About Your Event *
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="bg-black border border-black-border text-white font-body text-sm px-4 py-3 focus:outline-none focus:border-gold/60 transition-colors resize-none placeholder:text-text-muted"
                    placeholder="Describe your event, any specific services you need, approximate guest count..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 font-body">{errors.message}</p>
                  )}
                </div>

                <GoldButton
                  type="submit"
                  variant="filled"
                  size="lg"
                  className="w-full mt-2"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </GoldButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
