'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { testimonialCard } from '@/lib/animations'

const TESTIMONIALS = [
  {
    quote:
      'Ausprey IoT transformed our factory floor with their Industrial IoT platform. Real-time sensor data and predictive maintenance alerts cut our downtime by 42%.',
    name: 'Rajesh Kumar',
    title: 'VP Operations',
    company: 'ManuTech Industries',
    initials: 'RK',
  },
  {
    quote:
      'The custom software solution Auspre built for us handles 2 million daily transactions with zero downtime. Their architecture is truly future-ready.',
    name: 'Sarah Mitchell',
    title: 'CTO',
    company: 'FinServe Global',
    initials: 'SM',
  },
  {
    quote:
      'From the first call to go-live was just 8 weeks. The Auspre team\'s agile approach and deep IoT expertise made all the difference.',
    name: 'Marco Rossi',
    title: 'Product Director',
    company: 'SmartCity Solutions',
    initials: 'MR',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1)
    setCurrent((next + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const variants = {
    hidden: (d: number) => ({ opacity: 0, x: d * 300 }),
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (d: number) => ({
      opacity: 0,
      x: d * -300,
      transition: { duration: 0.35, ease: 'easeIn' },
    }),
  }

  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--color-surface-warm)' }}>
      <div className="container-max">
        <SectionHeader
          label="Client Success"
          title="What Our Clients"
          highlightedTitle="Say About Us"
        />

        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-card">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-card p-10 shadow-card border border-gray-light"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                    >
                      <Star size={18} fill="#D4A017" color="#D4A017" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-lg leading-relaxed text-dark mb-8"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: 'var(--gradient-red-gold)' }}
                  >
                    {TESTIMONIALS[current].initials}
                  </div>
                  <div>
                    <p className="font-bold text-dark">{TESTIMONIALS[current].name}</p>
                    <p className="text-sm" style={{ color: 'var(--color-gray-text)' }}>
                      {TESTIMONIALS[current].title} · {TESTIMONIALS[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(current - 1)}
              className="w-10 h-10 rounded-full border border-gray-light flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => go(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  animate={{ width: i === current ? 24 : 8 }}
                  style={{
                    background:
                      i === current ? 'var(--color-primary)' : 'var(--color-gray-light)',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(current + 1)}
              className="w-10 h-10 rounded-full border border-gray-light flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
