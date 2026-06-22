'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import { staggerContainer, fadeUp, viewportOnce, btnHover, btnTap } from '@/lib/animations'

const TRUST_POINTS = [
  'No commitment required',
  'Free 30-min strategy call',
  'Response within 24 hours',
]

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-28 overflow-hidden noise"
      style={{ background: 'linear-gradient(150deg, #0F0F0F 0%, #1C0806 45%, #0F0F0F 100%)' }}
    >
      {/* Radial glow — red center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 65%)',
        }}
      />

      {/* Gold glow — bottom left */}
      <div
        className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none blur-3xl opacity-15"
        style={{ background: 'var(--color-gold)' }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container-max relative z-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center gap-7 max-w-3xl mx-auto"
        >
          {/* Eyebrow pill */}
          <motion.div variants={fadeUp} className="tag-red" style={{
            background: 'rgba(192,57,43,0.18)',
            borderColor: 'rgba(192,57,43,0.35)',
            color: '#FF8070',
          }}>
            🚀 Ready to Ignite Possibilities?
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(36px,5vw,64px)] font-black uppercase leading-[1.0] tracking-tight text-white"
            style={{ fontFamily: 'var(--font-hero)' }}
          >
            Let&apos;s Build Something{' '}
            <span style={{ color: 'var(--color-primary)' }}>Extraordinary</span>{' '}
            Together.
          </motion.h2>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-[17px] leading-[1.75] max-w-xl"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Whether you&apos;re starting your IoT journey or scaling an existing platform,
            Auspre&apos;s certified engineers are ready to make it happen — on time and on budget.
          </motion.p>

          {/* Trust checklist */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-5">
            {TRUST_POINTS.map((pt) => (
              <span key={pt} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--color-gold-light)' }} />
                {pt}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <motion.div whileHover={btnHover} whileTap={btnTap}>
              <Link href="/contact" className="btn-primary px-9 py-4 text-base">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={btnHover} whileTap={btnTap}>
              <Link href="/contact" className="btn-ghost-white px-9 py-4 text-base">
                <Calendar size={18} />
                Book a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating stat pills — glass */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {[
            { num: '100+', label: 'Happy Clients' },
            { num: '30+', label: 'Projects Shipped' },
            { num: '12+', label: 'Years Experience' },
            { num: '20+', label: 'Countries Served' },
          ].map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="card-glass-dark px-6 py-3 flex items-center gap-3"
            >
              <span
                className="text-xl font-black"
                style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-hero)' }}
              >
                {s.num}
              </span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
