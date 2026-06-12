import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { buildMeta } from '@/lib/metadata'
import CTASection from '@/components/home/CTASection'

const SERVICES: Record<
  string,
  { title: string; description: string; body: string; keywords: string[] }
> = {
  'custom-iot': {
    title: 'Custom IoT Development',
    description:
      'End-to-end custom IoT development services: hardware prototyping, firmware, cloud connectivity, and dashboards.',
    body: 'We design and build complete IoT ecosystems — from PCB design and firmware development to cloud connectivity and user dashboards. Our team has delivered industrial, commercial, and consumer IoT products across 20+ verticals.',
    keywords: ['custom IoT development', 'IoT hardware', 'firmware development', 'IoT prototyping'],
  },
  'software-solutions': {
    title: 'Custom Software Solutions',
    description:
      'Bespoke web and mobile application development on scalable, cloud-native architecture.',
    body: 'We craft custom web and mobile applications using modern frameworks — Next.js, React Native, Node.js — with cloud-native architecture on AWS or Azure. Every application is built for performance, security, and scale.',
    keywords: ['custom software development', 'web application development', 'mobile app development'],
  },
  'embedded-systems': {
    title: 'Embedded Systems Design',
    description:
      'Expert firmware and RTOS development for STM32, ESP32, ARM Cortex, and more.',
    body: 'Our firmware engineers write clean, memory-efficient code for microcontrollers and SoCs. From bare-metal drivers to full RTOS integration, we handle the full embedded software stack.',
    keywords: ['embedded systems', 'firmware development', 'RTOS', 'STM32', 'ESP32'],
  },
  'cloud-platforms': {
    title: 'Cloud IoT Platforms',
    description:
      'AWS IoT, Azure IoT Hub, and custom MQTT architectures for enterprise device management.',
    body: 'We architect and deploy cloud IoT platforms that manage thousands of devices at scale. From real-time telemetry ingestion to OTA update pipelines and analytics dashboards — we build robust, observable platforms.',
    keywords: ['cloud IoT platform', 'AWS IoT', 'Azure IoT Hub', 'MQTT broker'],
  },
  'cybersecurity': {
    title: 'Cybersecurity & Compliance',
    description:
      'IoT security architecture, penetration testing, and compliance for ISO 27001, GDPR, IEC 62443.',
    body: 'Security is not an afterthought at Auspre. We implement security-by-design across all our projects and offer dedicated IoT security assessments, threat modelling, penetration testing, and regulatory compliance consulting.',
    keywords: ['IoT security', 'cybersecurity', 'ISO 27001', 'IEC 62443', 'penetration testing'],
  },
  'ai-ml-integration': {
    title: 'AI/ML Integration',
    description:
      'Edge AI inference, predictive maintenance, and anomaly detection for IoT ecosystems.',
    body: 'We integrate machine learning models directly onto edge devices and into IoT cloud pipelines. Use cases include predictive maintenance, anomaly detection, computer vision, and natural language interfaces for industrial equipment.',
    keywords: ['AI IoT', 'edge AI', 'predictive maintenance', 'anomaly detection', 'machine learning'],
  },
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES[params.slug]
  if (!service) return {}
  return buildMeta({
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    path: `/services/${params.slug}`,
  })
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES[params.slug]
  if (!service) notFound()

  return (
    <>
      <section className="section-padding bg-off-white pt-40">
        <div className="container-max max-w-3xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-text hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">Service</p>
          <h1
            className="text-5xl font-bold text-dark mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {service.title}
          </h1>
          <p className="text-xl text-gray-text leading-relaxed">{service.description}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <p className="text-lg text-gray-text leading-relaxed">{service.body}</p>
          <div className="mt-12 flex gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link href="/services" className="btn-outline">
              All Services
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
