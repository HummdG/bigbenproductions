import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import PackageCard from '@/components/ui/PackageCard'
import { SERVICES } from '@/lib/constants'

export default function ServicesSection() {
  const packages = SERVICES.filter((s) => s.type === 'package')
  const services = SERVICES.filter((s) => s.type === 'service')

  return (
    <section id="services" className="py-24 lg:py-32 bg-black-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Experiences & Services"
          subtitle="From 360 booth hire to full event production coverage. Everything we do is crafted to make your event truly unforgettable."
          align="center"
        />

        {/* Featured Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {packages.map((pkg, i) => {
            if (pkg.type !== 'package') return null
            return (
              <PackageCard
                key={pkg.title}
                badge={pkg.badge}
                title={pkg.title}
                subtitle={pkg.subtitle}
                description={pkg.description}
                price={pkg.price}
                priceNote={pkg.priceNote}
                includes={pkg.includes}
                index={i}
              />
            )
          })}
        </div>

        {/* Divider between packages and services */}
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px flex-1 bg-black-border" />
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-text-muted">
            All Services
          </span>
          <div className="h-px flex-1 bg-black-border" />
        </div>

        {/* General Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => {
            if (svc.type !== 'service') return null
            return (
              <ServiceCard
                key={svc.title}
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
                index={i + packages.length}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
