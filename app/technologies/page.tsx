import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'
import TechStack from '@/components/home/TechStack'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = buildMeta({
  title: 'Technologies — Our Full IoT & Software Stack',
  description:
    'Explore the full technology stack Auspre IoT uses: React, Next.js, AWS, Azure, ESP32, FreeRTOS, MQTT, Docker, TensorFlow, and more.',
  keywords: ['IoT technology stack', 'embedded systems technologies', 'cloud IoT technologies'],
  path: '/technologies',
})

export default function TechnologiesPage() {
  return (
    <>
      <section className="bg-off-white pt-40 pb-8 section-padding text-center">
        <div className="container-max max-w-2xl mx-auto space-y-6">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold">Our Stack</p>
          <h1 className="text-5xl font-bold text-dark" style={{ fontFamily: 'var(--font-display)' }}>
            Technologies <span className="gradient-text-red-gold">We Master</span>
          </h1>
          <p className="text-lg text-gray-text leading-relaxed">
            From ESP32 firmware to Kubernetes orchestration — our engineers are certified experts
            across the complete IoT and software development stack.
          </p>
        </div>
      </section>
      <TechStack />
      <CTASection />
    </>
  )
}
