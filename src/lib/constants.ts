export const SITE = {
  name: 'Big Ben Production',
  tagline: 'Premier Events Production',
  description:
    'Professional 360 photo booth experiences, event videography, and full production setups. Big Ben Production creates unforgettable moments for weddings, birthdays, and celebrations.',
}

export const WHATSAPP_NUMBER = '447862583938'
export const WHATSAPP_MESSAGE = "Hi, I'd like to enquire about an upcoming event."
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export type ServiceItem =
  | {
      type: 'service'
      icon: string
      title: string
      description: string
    }
  | {
      type: 'package'
      badge: string
      title: string
      subtitle?: string
      description: string
      price: string
      priceNote?: string
      includes: string[]
    }

export const SERVICES: ServiceItem[] = [
  {
    type: 'package',
    badge: 'Signature Experience',
    title: '360 Photo Booth',
    subtitle: 'Premium Edition',
    description:
      'Our flagship 360 spinning booth creates a showstopping centrepiece at your event. With professional LED lighting, branded overlays, and an on-site attendant — your guests will be talking about it for years.',
    price: 'From £299',
    priceNote: 'T&Cs Apply',
    includes: ['360 Spinning Platform', 'LED Ring Lighting', 'On-Site Attendant'],
  },
  {
    type: 'package',
    badge: 'Full Coverage',
    title: 'Event Media Package',
    description:
      'Complete end-to-end event coverage combining professional videography, photography, and our 360 booth experience. Every moment captured and delivered with cinematic quality.',
    price: 'From £699',
    priceNote: 'DM for more info',
    includes: [],
  },
  {
    type: 'service',
    icon: 'Camera',
    title: 'Wedding Coverage',
    description:
      'Cinematic wedding videography and photography that captures every emotion of your special day. Delivered as a feature film, highlights reel, and full photo gallery.',
  },
  {
    type: 'service',
    icon: 'Sparkles',
    title: 'Birthday Celebrations',
    description:
      'Make every milestone unforgettable. From elegant setups to full production experiences, we bring the energy, lights, and memories to your celebration.',
  },
  {
    type: 'service',
    icon: 'Layers',
    title: 'Corporate Events',
    description:
      'Professional production solutions for corporate events, brand launches, and galas. We handle setup, coverage, and post-production from start to finish.',
  },
  {
    type: 'service',
    icon: 'Palette',
    title: 'Custom Event Design',
    description:
      'Bespoke event setups designed around your vision. From backdrop design to full venue production, every element is crafted to complement your theme perfectly.',
  },
]

export const GALLERY_IMAGES = [
  {
    src: '/gallery/pic1.png',
    alt: 'Event setup with LED display and elegant table styling',
    width: 400,
    height: 533,
    promo: false,
  },
  {
    src: '/gallery/pic2.png',
    alt: '70th birthday celebration — guest in stunning pink ensemble',
    width: 400,
    height: 533,
    promo: false,
  },
  {
    src: '/gallery/pic3.png',
    alt: 'Wedding first dance on illuminated dance floor with floral backdrop',
    width: 400,
    height: 533,
    promo: false,
  },
  {
    src: '/gallery/pic4.png',
    alt: '70th birthday celebration with beautifully decorated cake',
    width: 400,
    height: 533,
    promo: false,
  },
  {
    src: '/gallery/pic5.png',
    alt: 'Wedding party group portrait outside the venue',
    width: 400,
    height: 533,
    promo: false,
  },
  {
    src: '/gallery/pic6.png',
    alt: 'Big Ben Production signature 360 photo booth experience',
    width: 400,
    height: 533,
    promo: false,
  },
]

// Display order for gallery masonry grid
export const GALLERY_DISPLAY_ORDER = [0, 3, 1, 4, 2, 5]

export const TESTIMONIALS = [
  {
    name: 'Priya & James',
    role: 'Wedding Clients',
    rating: 5,
    text: 'Big Ben Production filmed our entire wedding and the final video was absolutely breathtaking. They captured every moment beautifully and the team were incredibly professional throughout the whole day.',
  },
  {
    name: 'Gloria Okafor',
    role: '70th Birthday Client',
    rating: 5,
    text: 'The 360 photo booth was the highlight of my mum\'s 70th! Every single guest loved it. The team set everything up perfectly and kept everyone entertained all evening. We couldn\'t have asked for more.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Corporate Event Client',
    rating: 5,
    text: 'We booked Big Ben Production for our company launch event. The photography and videography were outstanding — crisp, professional, and delivered faster than expected. Will absolutely book again.',
  },
  {
    name: 'Adaeze & Tunde',
    role: 'Wedding Clients',
    rating: 5,
    text: 'From the first call to the final delivery, Big Ben Production made everything stress-free. The wedding film made us cry every time we watched it. Worth every penny and more.',
  },
  {
    name: 'Sandra Williams',
    role: 'Birthday Event Client',
    rating: 5,
    text: 'Booked the full media package for my daughter\'s 18th and I couldn\'t be happier. The photos, video, and 360 booth all exceeded our expectations. Truly professional and talented team.',
  },
]

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/bigbenproduction1/',
  facebook: 'https://facebook.com/bigbenproduction',
}
