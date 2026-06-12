import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = buildMeta({
  title: 'About Us — Auspre IoT Technology Partner',
  description:
    'Meet the Auspre IoT team. 12+ years of experience building custom IoT and software solutions for businesses worldwide. Our engineers, designers, and strategists drive innovation.',
  keywords: ['IoT company', 'software development team', 'Auspre technologies', 'about Auspre'],
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-off-white pt-40">
        <div className="container-max max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold">Our Story</p>
          <h1
            className="text-5xl md:text-6xl font-bold text-dark"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            More Than a Vendor.{' '}
            <span className="gradient-text-red-gold">A Technology Partner.</span>
          </h1>
          <p className="text-lg text-gray-text leading-relaxed">
            Founded in 2018, Auspre IoT has grown from a small embedded systems consultancy into a
            full-service IoT and software development company with 50+ engineers serving clients
            across 20+ countries. We believe technology should ignite possibilities, not create
            complexity.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'End-to-End Ownership', body: 'From ideation to deployment and beyond — we own every stage.' },
              { title: 'Agile Delivery', body: '2-week sprints, daily standups, full transparency throughout.' },
              { title: 'Security First', body: 'DevSecOps, code audits, and penetration testing built in.' },
              { title: 'Global Support', body: '24/7 monitoring, SLA-backed uptime guarantees worldwide.' },
            ].map((v) => (
              <div key={v.title} className="p-8 bg-surface-warm rounded-card border border-gray-light">
                <h3 className="text-xl font-bold text-dark mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {v.title}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
