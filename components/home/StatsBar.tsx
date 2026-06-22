'use client'

import { motion } from 'framer-motion'
import { Users, FileCheck, Briefcase, Globe } from 'lucide-react'
import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const STATS = [
  { icon: Users,     value: 20,  suffix: '+', label: 'Happy Clients' },
  { icon: FileCheck, value: 30,  suffix: '+', label: 'Projects Delivered' },
  { icon: Briefcase, value: 10,   suffix: '+', label: 'Skilled Professionals' },
  { icon: Globe,     value: null, suffix: '',  label: 'Global Clientele', isGlobal: true },
]

export default function StatsBar() {
  return (
<section id="stats" className="relative z-20 -mt-8 lg:-mt-12 pb-0" style={{ background: 'var(--color-surface-warm)' }}>
      <div className="container-max">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-white rounded-[22px] shadow-[0_12px_38px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 grid grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={[
                'flex items-center gap-4 px-8 py-7 border-gray-100',
                i % 2 === 0 ? 'border-r' : '',          // mobile: left-column divider
                i < 2 ? 'border-b' : '',                // mobile: top-row divider
                'lg:border-b-0',                        // desktop: no horizontal dividers
                i === 3 ? 'lg:border-r-0' : 'lg:border-r', // desktop: column dividers
              ].join(' ')}
            >
              {/* Icon circle — gold border + gold icon */}
              <div className="stat-icon-circle flex-shrink-0" style={{ borderColor: 'var(--color-gold)' }}>
                <stat.icon size={22} strokeWidth={1.5} style={{ color: 'var(--color-gold)' }} />
              </div>

              {/* Text — red value (Poppins) + muted label */}
              <div>
                <div
                  className="leading-none mb-0.5"
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: '28px', fontWeight: 800, color: 'var(--color-primary)' }}
                >
                  {stat.isGlobal ? 'Global' : <AnimatedCounter target={stat.value!} suffix={stat.suffix} />}
                </div>
                <p className="text-[13px] font-medium" style={{ color: 'var(--color-gray-text)' }}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
