'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'

const ROW1 = [
  'React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Azure',
  'MQTT', 'Docker', 'Kubernetes', 'TensorFlow', 'PostgreSQL', 'MongoDB',
]

const ROW2 = [
  'ESP32', 'STM32', 'Raspberry Pi', 'FreeRTOS', 'Zephyr OS', 'LoRaWAN',
  'Zigbee', 'BLE 5.0', 'UART/SPI/I2C', 'C/C++', 'Rust', 'Go',
]

function MarqueeRow({
  items,
  direction = 'left',
}: {
  items: string[]
  direction?: 'left' | 'right'
}) {
  const doubled = [...items, ...items]
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="overflow-hidden marquee-container">
      <div className={`flex gap-4 w-max marquee-track ${animClass}`}>
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="group flex-shrink-0 px-6 py-3 bg-white rounded-full border border-gray-light cursor-default transition-all duration-300 hover:scale-105 hover:shadow-card hover:-translate-y-1"
          >
            <span
              className="text-sm font-semibold transition-colors duration-300 group-hover:text-primary"
              style={{
                color: 'var(--color-gray-text)',
                fontFamily: 'var(--font-mono)',
                filter: 'grayscale(1)',
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="technologies" className="section-padding bg-off-white overflow-hidden">
      <div className="mb-16">
        <SectionHeader
          label="Built with the Best"
          title="Technologies"
          highlightedTitle="We Master"
          subtitle="Our engineers are certified experts across the full IoT and software stack."
        />
      </div>

      <div className="space-y-4">
        <MarqueeRow items={ROW1} direction="left" />
        <MarqueeRow items={ROW2} direction="right" />
      </div>
    </section>
  )
}
