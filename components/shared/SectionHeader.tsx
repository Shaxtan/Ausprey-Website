'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

interface SectionHeaderProps {
  label: string
  title: string
  highlightedTitle?: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeader({
  label,
  title,
  highlightedTitle,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 ${alignClass} mb-16`}
    >
      <motion.p
        variants={fadeUp}
        className="text-xs font-bold tracking-[0.25em] uppercase"
        style={{ color: 'var(--color-gold)' }}
      >
        {label}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className={`text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight ${dark ? 'text-white' : 'text-dark'}`}
        style={{ fontFamily: 'var(--font-hero)' }}
      >
        {title}{' '}
        {highlightedTitle && (
          <span className="gradient-text-red-gold">{highlightedTitle}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-lg max-w-2xl ${dark ? 'text-gray-400' : 'text-gray-text'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
