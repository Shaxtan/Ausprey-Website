'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Radio, Monitor, Cpu, Cloud, Lock, Brain } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const SERVICES = [
  {
    icon: Radio,
    number: '01',
    title: 'Custom IoT Development',
    description: 'End-to-end IoT ecosystems — from sensor hardware to cloud dashboards. We design, build, and deploy smart connected devices for industrial and consumer applications.',
    href: '/services/custom-iot',
  },
  {
    icon: Monitor,
    number: '02',
    title: 'Custom Software Solutions',
    description: 'Bespoke web and mobile applications on scalable cloud-native architecture. Performance-first, built to grow with your business from day one.',
    href: '/services/software-solutions',
  },
  {
    icon: Cpu,
    number: '03',
    title: 'Embedded Systems Design',
    description: 'Low-level firmware and RTOS development for microcontrollers. From STM32 to ESP32 — clean, memory-efficient embedded code delivered on time.',
    href: '/services/embedded-systems',
  },
  {
    icon: Cloud,
    number: '04',
    title: 'Cloud IoT Platforms',
    description: 'AWS IoT, Azure IoT Hub, and custom MQTT architectures. Real-time device management, OTA updates, and analytics dashboards at scale.',
    href: '/services/cloud-platforms',
  },
  {
    icon: Lock,
    number: '05',
    title: 'Cybersecurity & Compliance',
    description: 'IoT security architecture, penetration testing, and regulatory compliance (ISO 27001, GDPR, IEC 62443) for connected device ecosystems.',
    href: '/services/cybersecurity',
  },
  {
    icon: Brain,
    number: '06',
    title: 'AI / ML Integration',
    description: 'Predictive maintenance, anomaly detection, and edge AI inference for IoT devices. We bring intelligence directly to the edge.',
    href: '/services/ai-ml-integration',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--color-surface-warm)' }}>
      <div className="container-max">
        <SectionHeader
          label="Our Expertise"
          title="Comprehensive IoT &"
          highlightedTitle="Software Services"
          subtitle="From embedded firmware to cloud-scale platforms, Auspre delivers end-to-end solutions that power the connected world."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group card-base bg-white p-8 flex flex-col gap-5 relative overflow-hidden cursor-pointer"
            >
              {/* Top accent bar — slides in on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
                style={{
                  background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-gold) 100%)',
                  transitionTimingFunction: 'var(--ease-out-expo)',
                }}
              />

              {/* Number + Icon row */}
              <div className="flex items-center justify-between">
                <div className="icon-ring">
                  <service.icon
                    size={24}
                    strokeWidth={1.5}
                    style={{ color: 'var(--color-primary)' }}
                    className="transition-colors duration-300"
                  />
                </div>
                <span
                  className="text-[13px] font-black opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ fontFamily: 'var(--font-hero)', color: 'var(--color-primary)' }}
                >
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3
                  className="text-lg font-bold leading-snug text-dark group-hover:text-primary transition-colors duration-300"
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-[1.75]"
                  style={{ color: 'var(--color-gray-text)' }}
                >
                  {service.description}
                </p>
              </div>

              {/* Learn more */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[13px] font-semibold mt-auto w-fit group/lnk"
                style={{ color: 'var(--color-primary)' }}
              >
                Learn More
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
