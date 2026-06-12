'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import {
  navContainer,
  navItem,
  staggerContainer,
  mobileMenu,
  mobileMenuItem,
} from '@/lib/animations'
import mainlogo from '../../public/images/main-logo.png'

const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'About Us',     href: '/about' },
  { label: 'Services',     href: '/services' },
  { label: 'Solutions',    href: '/solutions' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Careers',      href: '/careers' },
  { label: 'Contact Us',   href: '/contact' },
]

/* Uses your real logo image (gold "au" / red "spre" + eagle + tagline). */
function AuspreLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center group flex-shrink-0" aria-label="Auspre — Igniting Possibilities">
      <Image
        src={mainlogo}
        alt="Auspre — Igniting Possibilities"
        height={52}
        priority
        className={`transition-all duration-300 group-hover:scale-105 ${dark ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  )
}

/* Solid gold "Let's Talk" CTA — matches the reference (filled gold, 8px radius). */
const goldCtaBase: React.CSSProperties = {
  background: 'var(--color-gold)',
  color: '#fff',
  borderRadius: '8px',
  padding: '11px 26px',
}

function LetsTalk({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200"
      style={goldCtaBase}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.background = 'var(--color-gold-deep, #B8863F)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.background = 'var(--color-gold)'
      }}
    >
      Let&apos;s Talk
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <motion.header
        variants={navContainer}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.07)] border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-max flex items-center justify-between h-[76px]">
          {/* Brand */}
          <motion.div variants={navItem}>
            <AuspreLogo />
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            variants={staggerContainer(0.07)}
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.href} variants={navItem}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div variants={navItem} className="hidden lg:block">
            <LetsTalk />
          </motion.div>

          {/* Mobile Hamburger */}
          <motion.button
            variants={navItem}
            className="lg:hidden p-2 rounded-lg text-dark hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 overflow-hidden"
          >
            {/* Mobile brand */}
            <div className="absolute top-5 left-8">
              <AuspreLogo />
            </div>

            <motion.nav
              variants={staggerContainer(0.07, 0.1)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={mobileMenuItem}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-3xl font-black uppercase tracking-tight text-dark hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div variants={mobileMenuItem} initial="hidden" animate="visible" className="mt-8">
              <LetsTalk onClick={() => setMenuOpen(false)} />
            </motion.div>

            {/* Decorative blobs */}
            <div
              className="absolute bottom-0 right-0 w-56 h-56 rounded-tl-full opacity-[0.06]"
              style={{ background: 'var(--color-primary)' }}
            />
            <div
              className="absolute bottom-12 right-12 w-32 h-32 rounded-full opacity-[0.05]"
              style={{ background: 'var(--color-gold)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
