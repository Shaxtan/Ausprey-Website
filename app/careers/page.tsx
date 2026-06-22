import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = buildMeta({
  title: "Careers — Join Ausprey IoT's Engineering Team",
  description:
    "We're hiring! Join Ausprey IoT's growing team of IoT engineers, software developers, and embedded systems experts. View open roles and apply today.",
  keywords: ['IoT jobs', 'software developer jobs', 'embedded systems engineer', 'Auspre careers'],
  path: '/careers',
})

const ROLES = [
  { title: 'Senior IoT Engineer', type: 'Full-time', location: 'Remote / Hybrid', department: 'Engineering' },
  { title: 'Embedded Firmware Developer', type: 'Full-time', location: 'On-site', department: 'Engineering' },
  { title: 'Full Stack Developer (Next.js)', type: 'Full-time', location: 'Remote', department: 'Engineering' },
  { title: 'Cloud Architect (AWS/Azure)', type: 'Contract', location: 'Remote', department: 'Engineering' },
  { title: 'Product Manager — IoT', type: 'Full-time', location: 'Hybrid', department: 'Product' },
]

export default function CareersPage() {
  return (
    <section className="section-padding pt-40 bg-off-white min-h-screen">
      <div className="container-max">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ background: 'var(--color-gold)', color: '#111' }}>
            We&apos;re Hiring!
          </div>
          <h1 className="text-5xl font-bold text-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Build the Future of <span className="gradient-text-red-gold">IoT With Us</span>
          </h1>
          <p className="text-lg text-gray-text leading-relaxed">
            Join a team of passionate engineers working on cutting-edge IoT products. Remote-friendly,
            equity-included, and mission-driven.
          </p>
        </div>

        <div className="space-y-4">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="group bg-white rounded-card px-8 py-6 shadow-card border border-gray-light hover:border-primary hover:shadow-card-hover transition-all duration-300 flex items-center justify-between gap-4"
            >
              <div>
                <h2 className="text-xl font-bold text-dark mb-1">{role.title}</h2>
                <p className="text-sm text-gray-text">
                  {role.department} · {role.type} · {role.location}
                </p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
              >
                Apply <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-text text-sm">
          Don&apos;t see a role? Send your CV to{' '}
          <a href="mailto:careers@auspreiot.com" className="text-primary font-semibold hover:underline">
            careers@auspreiot.com
          </a>
        </p>
      </div>
    </section>
  )
}
