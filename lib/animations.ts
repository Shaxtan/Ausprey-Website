import type { Variants } from 'framer-motion'

// Fade up (most common scroll reveal)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

// Stagger container
export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

// Fade in from left
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// Fade in from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// Navbar item (y: -20 → 0)
export const navItem: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// Navbar container
export const navContainer: Variants = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.08,
    },
  },
}

// Hero section text items
export const heroItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

// Hero visual (slides from right with rotation)
export const heroVisual: Variants = {
  hidden: { opacity: 0, x: 100, rotate: 3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
  },
}

// Quote card (from right)
export const quoteCard: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 1 },
  },
}

// Card hover props (use as whileHover)
export const cardHover = {
  y: -8,
  boxShadow: 'var(--shadow-card-hover)',
  transition: { duration: 0.3, ease: 'easeOut' },
}

// Button micro-interactions
export const btnHover = { scale: 1.04 }
export const btnTap = { scale: 0.97 }

// Mobile menu overlay
export const mobileMenu: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: '100vh',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

// Mobile menu link stagger
export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: { opacity: 0, x: -30 },
}

// Tab content transition
export const tabContent: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

// Testimonial card transition
export const testimonialCard: Variants = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: { duration: 0.35, ease: 'easeIn' },
  },
}

// Viewport settings (use with whileInView)
export const viewportOnce = { once: true, amount: 0.2 }
