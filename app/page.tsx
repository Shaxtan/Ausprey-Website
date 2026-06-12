import type { Metadata } from 'next'
import { Suspense } from 'react'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import ServicesSection from '@/components/home/ServicesSection'
import IoTShowcase from '@/components/home/IoTShowcase'
import TechStack from '@/components/home/TechStack'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'Auspre IoT | Igniting Possibilities — Custom IoT & Software Solutions',
  description:
    'Auspre IoT delivers innovative, custom IoT and software solutions for industrial, commercial, and enterprise use cases. 100+ clients, 250+ projects. IoT solutions company India.',
  keywords: ['IoT solutions company', 'custom software development', 'Auspre IoT'],
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <Suspense fallback={<div className="h-screen bg-dark" />}>
        <IoTShowcase />
      </Suspense>
      <TechStack />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
