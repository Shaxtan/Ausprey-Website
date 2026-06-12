import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'
import ServicesSection from '@/components/home/ServicesSection'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = buildMeta({
  title: 'IoT & Software Development Services',
  description:
    'Explore Auspre IoT\'s comprehensive service catalogue: custom IoT development, embedded systems, cloud platforms, cybersecurity, AI/ML integration, and enterprise software solutions.',
  keywords: ['IoT development services', 'embedded systems development', 'cloud IoT', 'custom software services'],
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <section className="bg-off-white pt-40 pb-8">
        <div className="container-max max-w-2xl mx-auto text-center space-y-6">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold">What We Do</p>
          <h1
            className="text-5xl md:text-6xl font-bold text-dark"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our <span className="gradient-text-red-gold">IoT & Software</span> Services
          </h1>
          <p className="text-lg text-gray-text leading-relaxed">
            End-to-end technology solutions — from hardware firmware to cloud-scale platforms — built
            by a team of certified engineers with deep IoT domain expertise.
          </p>
        </div>
      </section>
      <ServicesSection />
      <CTASection />
    </>
  )
}
