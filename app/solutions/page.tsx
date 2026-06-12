import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'
import CTASection from '@/components/home/CTASection'
import IoTShowcase from '@/components/home/IoTShowcase'

export const metadata: Metadata = buildMeta({
  title: 'IoT Solutions — Industrial, Smart Buildings, Healthcare',
  description:
    'Explore Auspre IoT\'s industry-specific solutions: Industrial IoT for smart manufacturing, intelligent building management, and connected healthcare platforms.',
  keywords: ['IoT solutions', 'industrial IoT', 'smart building IoT', 'healthcare IoT'],
  path: '/solutions',
})

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-off-white pt-40 pb-8 text-center section-padding">
        <div className="container-max max-w-2xl mx-auto space-y-6">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold">Industry Solutions</p>
          <h1 className="text-5xl font-bold text-dark" style={{ fontFamily: 'var(--font-display)' }}>
            IoT Solutions for <span className="gradient-text-red-gold">Every Industry</span>
          </h1>
          <p className="text-lg text-gray-text leading-relaxed">
            Pre-built, configurable IoT solution stacks — accelerating time-to-market across
            manufacturing, real estate, and healthcare verticals.
          </p>
        </div>
      </section>
      <IoTShowcase />
      <CTASection />
    </>
  )
}
