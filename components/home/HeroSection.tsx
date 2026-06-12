'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Code2, Lightbulb, Users2, ShieldCheck } from 'lucide-react'
import { staggerContainer, heroItem, quoteCard, btnHover, btnTap } from '@/lib/animations'

const FEATURES = [
  { icon: Code2,       category: 'CUSTOM',         label: ['SOFTWARE', 'SOLUTIONS'] },
  { icon: Lightbulb,   category: 'INNOVATION',     label: ['DRIVEN', 'APPROACH'] },
  { icon: Users2,      category: 'CLIENT FOCUSED', label: ['COLLABORATION', '& EXCELLENCE'] },
  { icon: ShieldCheck, category: 'SCALABLE',       label: ['SECURE', '& RELIABLE'] },
]

/* The curved seam shared by the photo clip-path and the swoosh.
   Clip path uses 0–1 (objectBoundingBox); the swoosh SVG uses the same curve at 0–100. */
const PHOTO_CLIP =
  'M 0.24 0 L 1 0 L 1 1 L 0.18 1 C 0.14 0.84, 0.08 0.62, 0.06 0.45 C 0.04 0.30, 0.10 0.14, 0.24 0 Z'

function Quote({ className = '' }: { className?: string }) {
  return (
    <motion.figure
      variants={quoteCard}
      initial="hidden"
      animate="visible"
      className={`flex gap-3 ${className}`}
      style={{ maxWidth: '230px' }}
    >
      <span
        className="select-none"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '70px',
          lineHeight: 0.7,
          fontWeight: 700,
          color: 'var(--color-gold-light)',
          textShadow: '0 1px 12px rgba(255,255,255,0.95)',
        }}
      >
        &ldquo;
      </span>
      <blockquote style={{ borderLeft: '2px solid var(--color-gold-light)', paddingLeft: '14px' }}>
        <p style={{ fontSize: '17px', lineHeight: 1.4, fontWeight: 600, color: '#1a1a1a', textShadow: '0 1px 12px rgba(255,255,255,0.95)' }}>
          Small choices today.
        </p>
        <p style={{ fontSize: '19px', lineHeight: 1.4, fontWeight: 800, color: 'var(--color-primary)', textShadow: '0 1px 12px rgba(255,255,255,0.95)' }}>
          Big impact tomorrow.
        </p>
      </blockquote>
    </motion.figure>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[76px] overflow-hidden noise"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #FAF6F2 55%, #F3EBE5 100%)' }}
    >
      {/* clip-path definition for the curved photo edge */}
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id="heroPhotoClip" clipPathUnits="objectBoundingBox">
            <path d={PHOTO_CLIP} />
          </clipPath>
        </defs>
      </svg>

      {/* Ambient glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 30% 80%, rgba(201,154,83,0.07) 0%, transparent 65%)' }}
      />

      {/* ── DESKTOP VISUAL: photo clipped to a curved edge + swoosh tracing the curve ── */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[54%] z-0">
        <div className="absolute inset-0" style={{ clipPath: 'url(#heroPhotoClip)' }}>
          <Image
            src="/images/hero-laptop.jpg"
            alt="Auspre IoT – custom software and IoT solutions"
            fill
            priority
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, transparent 35%)' }}
          />
        </div>

        {/* Swoosh — same curve as the clip, constant-width stroke */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 24 0 C 10 14, 4 30, 6 45 C 8 62, 14 84, 18 100"
            stroke="var(--color-primary)"
            strokeWidth="18"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 20 0 C 6 14, 0 30, 2 45 C 4 62, 10 84, 14 100"
            stroke="var(--color-gold-light)"
            strokeWidth="6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <Quote className="absolute z-10 top-[90px] right-[40px]" />
      </div>

      <div className="container-max w-full relative z-10">
        <div className="lg:w-[50%] lg:pr-6">
          {/* ── LEFT CONTENT ── */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 py-16"
          >
            {/* Eyebrow */}
            <motion.span variants={heroItem} className="section-label">
              Innovate. Build. Transform.
            </motion.span>

            {/* H1 — 3 lines, 3 colors, Poppins. Sized to keep each phrase on one line. */}
            <motion.h1
              variants={heroItem}
              className="flex flex-col uppercase leading-[1.04] tracking-[-0.02em]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <span style={{ fontSize: 'clamp(26px, 2.9vw, 38px)', fontWeight: 800, color: 'var(--color-dark)' }}>
                Specialize in Delivering
              </span>
              <span style={{ fontSize: 'clamp(26px, 2.9vw, 38px)', fontWeight: 800, color: 'var(--color-primary)' }}>
                Innovative, Custom
              </span>
              <span style={{ fontSize: 'clamp(26px, 2.9vw, 38px)', fontWeight: 800, color: 'var(--color-gold)' }}>
                Software Solutions.
              </span>
            </motion.h1>

            {/* Divider — 3 bars (gold · red · gold) */}
            <motion.div variants={heroItem} className="flex items-center gap-2" aria-hidden="true">
              <span style={{ display: 'block', width: '60px', height: '3px', borderRadius: '2px', background: 'var(--color-gold)' }} />
              <span style={{ display: 'block', width: '60px', height: '3px', borderRadius: '2px', background: 'var(--color-primary)' }} />
              <span style={{ display: 'block', width: '60px', height: '3px', borderRadius: '2px', background: 'var(--color-gold)' }} />
            </motion.div>

            {/* Body */}
            <motion.p variants={heroItem} className="text-base leading-[1.75] max-w-[460px]" style={{ color: 'var(--color-gray-text)' }}>
              We partner with businesses to build scalable, secure, and future-ready
              software solutions that drive growth and create lasting impact.
            </motion.p>

            {/* Feature row — gold ring, red icon, dark title, red sub */}
            <motion.div variants={staggerContainer(0.08)} className="grid grid-cols-4 gap-3 pt-1">
              {FEATURES.map(({ icon: Icon, category, label }, i) => (
                <motion.div
                  key={category}
                  variants={heroItem}
                  className={`flex flex-col items-center gap-2.5 text-center group cursor-default px-1 ${
                    i < 3 ? 'border-r border-gray-200' : ''
                  }`}
                >
                  <div
                    className="w-[56px] h-[56px] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ border: '1.6px solid var(--color-gold)', background: 'transparent' }}
                  >
                    <Icon size={21} strokeWidth={1.6} style={{ color: 'var(--color-primary)' }} />
                  </div>

                  <h3
                    className="uppercase leading-tight"
                    style={{ fontFamily: 'var(--font-poppins)', fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.02em', color: 'var(--color-dark)' }}
                  >
                    {category}
                  </h3>

                  <div className="-mt-1">
                    {label.map((l) => (
                      <p
                        key={l}
                        className="uppercase leading-snug"
                        style={{ fontFamily: 'var(--font-poppins)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.02em', color: 'var(--color-primary)' }}
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={heroItem} className="flex flex-wrap items-center gap-5 pt-2">
              {/* Explore — soft 12px rectangle, red gradient */}
              <motion.div whileHover={btnHover} whileTap={btnTap}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 text-white font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, #C0392B 0%, #D8463A 100%)',
                    borderRadius: '12px',
                    padding: '15px 30px',
                    fontSize: '16px',
                    boxShadow: '0 14px 28px rgba(192,57,43,0.28)',
                  }}
                >
                  Explore Our Services
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Watch — outline play ring */}
              <motion.button
                whileHover={btnHover}
                whileTap={btnTap}
                className="group/watch flex items-center gap-3.5 text-base font-medium bg-transparent border-none cursor-pointer"
                style={{ color: 'var(--color-dark)' }}
              >
                <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center flex-shrink-0 border-[1.5px] border-[#cfcfcf] text-[#222] transition-all duration-200 group-hover/watch:border-[#C0392B] group-hover/watch:text-[#C0392B] group-hover/watch:scale-110">
                  <Play size={14} fill="currentColor" color="currentColor" style={{ marginLeft: 2 }} />
                </span>
                Watch Our Story
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ── MOBILE / TABLET VISUAL: simple rounded photo ── */}
          <div className="lg:hidden relative aspect-[4/3] rounded-2xl overflow-hidden mt-4 mb-8 shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/hero-laptop.jpg"
              alt="Auspre IoT – custom software and IoT solutions"
              fill
              priority
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, transparent 40%)' }}
            />
            <Quote className="absolute z-10 top-4 right-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
