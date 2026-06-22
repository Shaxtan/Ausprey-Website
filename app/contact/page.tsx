import type { Metadata } from 'next'
import { buildMeta } from '@/lib/metadata'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = buildMeta({
  title: 'Contact Us — Hire IoT Developers & Get a Quote',
  description:
    'Get in touch with Ausprey IoT. Hire expert IoT developers, request a custom software quote, or book a free 30-minute IoT consulting call. Response within 24 hours.',
  keywords: ['hire IoT developers', 'IoT consulting', 'software development quote', 'contact Auspre'],
  path: '/contact',
})

export default function ContactPage() {
  return (
    <section className="section-padding pt-40 bg-off-white min-h-screen">
      <div className="container-max">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">Get In Touch</p>
          <h1
            className="text-5xl font-bold text-dark mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let&apos;s Build Something <span className="gradient-text-red-gold">Together</span>
          </h1>
          <p className="text-gray-text text-lg">
            Tell us about your project. We&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-card p-10 shadow-card border border-gray-light">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-dark">Full Name</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-light text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-dark">Email Address</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-light text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-dark">Company</label>
                <input
                  id="company" name="company" type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-xl border border-gray-light text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-dark">Service Interested In</label>
                <select
                  id="service" name="service"
                  className="w-full px-4 py-3 rounded-xl border border-gray-light text-dark focus:outline-none focus:border-primary transition-colors text-sm bg-white"
                >
                  <option value="">Select a service…</option>
                  <option>Custom IoT Development</option>
                  <option>Custom Software Solutions</option>
                  <option>Embedded Systems Design</option>
                  <option>Cloud IoT Platforms</option>
                  <option>Cybersecurity & Compliance</option>
                  <option>AI/ML Integration</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-dark">Message</label>
                <textarea
                  id="message" name="message" rows={5} required
                  placeholder="Tell us about your project, goals, and timeline…"
                  className="w-full px-4 py-3 rounded-xl border border-gray-light text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-4">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, title: 'Email Us', value: 'ausprey@iot.com', href: 'mailto:hello@auspreiot.com' },
              { icon: Phone, title: 'Call Us', value: '+91 97580 57500', href: 'tel:+1xxxxxxxxxx' },
              { icon: MapPin, title: 'Visit Us', value: 'Gurgaon, India', href: '#' },
              { icon: Clock, title: 'Response Time', value: 'Within 24 hours', href: null },
            ].map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="flex items-start gap-4 bg-white rounded-card p-6 shadow-card border border-gray-light">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(192,57,43,0.1)' }}>
                  <Icon size={20} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{title}</p>
                  {href ? (
                    <a href={href} className="font-semibold text-dark hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="font-semibold text-dark">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
