import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import logo from '../../public/images/main-logo.png'

const SERVICES = [
  { label: 'Custom IoT Development', href: '/services/custom-iot' },
  { label: 'Software Solutions', href: '/services/software-solutions' },
  { label: 'Embedded Systems', href: '/services/embedded-systems' },
  { label: 'Cloud Platforms', href: '/services/cloud-platforms' },
  { label: 'AI/ML Integration', href: '/services/ai-ml-integration' },
]

const COMPANY = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers', badge: "We're Hiring!" },
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/solutions' },
  { label: 'Contact Us', href: '/contact' },
]

const SOCIAL = [
  { icon: FaLinkedin, href: 'https://linkedin.com/company/auspreiot', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/auspreiot', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com/auspreiot', label: 'Instagram' },
  { icon: FaGithub, href: 'https://github.com/auspreiot', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white" role="contentinfo">
      <div className="container-max !pt-20 !pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Branding */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <Image
                src={logo}
                alt="Auspre logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  ausprey
                </span>
                <span
                  className="text-[9px] font-semibold tracking-[0.2em] uppercase"
                  style={{ color: 'var(--color-gold-light)' }}
                >
                  Igniting Possibilities
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We build scalable, secure, and future-ready IoT and software solutions that drive real business growth.
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-6"
              style={{ color: 'var(--color-gold-light)' }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary">→</span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-6"
              style={{ color: 'var(--color-gold-light)' }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-primary">→</span>
                    {c.label}
                    {c.badge && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: 'var(--color-gold)', color: '#111' }}
                      >
                        {c.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-widest mb-6"
              style={{ color: 'var(--color-gold-light)' }}
            >
              Contact
            </h3>
            <address className="not-italic space-y-4">
              <a
                href="mailto:ausprey@iot.com"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>ausprey@iot.com</span>
              </a>

              <a
                href="tel:+919758057500"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Phone size={16} className="text-primary flex-shrink-0" />
                +91 97580 57500
              </a>

              <p className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                Gurgaon, India
              </p>
            </address>

            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Stay updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors hover:opacity-90"
                  style={{ background: 'var(--gradient-red-gold)' }}
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Ausprey IoT. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Sitemap', href: '/sitemap.xml' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}