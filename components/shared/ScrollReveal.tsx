'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/animations'
import type { Variants } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
}

export default function ScrollReveal({
  children,
  variants = fadeUp,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const v: Variants = delay
    ? {
        hidden: variants.hidden ?? {},
        visible: {
          ...(typeof variants.visible === 'object' ? variants.visible : {}),
          transition: {
            ...(typeof variants.visible === 'object' &&
            'transition' in variants.visible
              ? (variants.visible as { transition?: object }).transition
              : {}),
            delay,
          },
        },
      }
    : variants

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  )
}
