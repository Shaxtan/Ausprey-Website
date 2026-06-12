'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import { staggerContainer, fadeUp, tabContent, viewportOnce } from '@/lib/animations'

const TABS = [
  {
    id: 'industrial',
    label: 'Industrial IoT',
    title: 'Smart Manufacturing & Industry 4.0',
    body: 'Real-time machine monitoring, predictive maintenance alerts, and automated quality control — connecting factory floors to cloud intelligence.',
    stats: ['40% reduction in downtime', '99.9% uptime SLA'],
  },
  {
    id: 'buildings',
    label: 'Smart Buildings',
    title: 'Intelligent Building Management',
    body: 'Energy optimization, occupancy sensing, HVAC automation, and unified facilities management through our IoT building platform.',
    stats: ['35% energy savings', '200+ sensors per deployment'],
  },
  {
    id: 'healthcare',
    label: 'Connected Healthcare',
    title: 'Remote Patient Monitoring',
    body: 'FDA-compliant IoT devices for vital sign monitoring, medication adherence, and telehealth integration with hospital information systems.',
    stats: ['HIPAA compliant', 'Real-time alerts'],
  },
]

// SVG IoT network nodes
const NODES = [
  { cx: 80, cy: 80, r: 14, label: 'Sensor', active: true },
  { cx: 200, cy: 50, r: 10, label: 'Sensor', active: false },
  { cx: 310, cy: 90, r: 18, label: 'Gateway', active: true },
  { cx: 60, cy: 200, r: 10, label: 'Device', active: false },
  { cx: 170, cy: 180, r: 12, label: 'Edge', active: true },
  { cx: 290, cy: 210, r: 14, label: 'Cloud', active: false },
  { cx: 380, cy: 170, r: 22, label: 'Server', active: true },
  { cx: 80, cy: 310, r: 10, label: 'Sensor', active: false },
  { cx: 200, cy: 290, r: 12, label: 'Hub', active: false },
  { cx: 350, cy: 300, r: 14, label: 'Dashboard', active: true },
  { cx: 460, cy: 120, r: 10, label: 'App', active: false },
  { cx: 450, cy: 260, r: 10, label: 'DB', active: false },
]

const EDGES = [
  [0, 4], [1, 4], [2, 6], [3, 4], [4, 5], [4, 6],
  [5, 6], [6, 10], [6, 11], [7, 8], [8, 9], [9, 11],
]

export default function IoTShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="iot-showcase" className="section-padding" style={{ background: '#1A1A1A' }}>
      <div className="container-max">
        <SectionHeader
          label="IoT Verticals"
          title="Powering the Connected"
          highlightedTitle="World"
          subtitle="Enterprise-grade IoT solutions across industries — from factory floors to hospital rooms."
          align="center"
          dark
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: IoT Network SVG */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative w-full aspect-square max-w-lg mx-auto"
          >
            <svg viewBox="0 0 520 380" className="w-full h-full" aria-label="IoT network visualization">
              <defs>
                <radialGradient id="nodeGrad1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C0392B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#C0392B" stopOpacity="0.4" />
                </radialGradient>
                <radialGradient id="nodeGrad2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4A017" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D4A017" stopOpacity="0.4" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Edges */}
              {EDGES.map(([from, to], i) => {
                const a = NODES[from], b = NODES[to]
                return (
                  <motion.line
                    key={i}
                    x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
                    stroke="rgba(212,160,23,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    style={{
                      strokeDashoffset: 0,
                      animation: `marqueeLeft ${8 + i * 0.7}s linear infinite`,
                    }}
                  />
                )
              })}

              {/* Nodes */}
              {NODES.map((node, i) => (
                <motion.g
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                >
                  {/* Pulse ring for active nodes */}
                  {node.active && (
                    <>
                      <circle
                        cx={node.cx} cy={node.cy} r={node.r + 8}
                        fill="none" stroke={i % 3 === 0 ? '#C0392B' : '#D4A017'}
                        strokeWidth="1" opacity="0"
                        style={{
                          animation: `pulseRing 2s ease-out infinite ${i * 0.4}s`,
                        }}
                      />
                      <circle
                        cx={node.cx} cy={node.cy} r={node.r + 16}
                        fill="none" stroke={i % 3 === 0 ? '#C0392B' : '#D4A017'}
                        strokeWidth="0.5" opacity="0"
                        style={{
                          animation: `pulseRing 2s ease-out infinite ${i * 0.4 + 0.3}s`,
                        }}
                      />
                    </>
                  )}
                  <circle
                    cx={node.cx} cy={node.cy} r={node.r}
                    fill={node.active ? 'url(#nodeGrad1)' : 'rgba(255,255,255,0.08)'}
                    stroke={node.active ? '#C0392B' : 'rgba(212,160,23,0.3)'}
                    strokeWidth="1.5"
                    filter="url(#glow)"
                  />
                  <text
                    x={node.cx} y={node.cy + node.r + 14}
                    textAnchor="middle"
                    fontSize="9"
                    fill="rgba(255,255,255,0.5)"
                    fontFamily="var(--font-mono)"
                  >
                    {node.label}
                  </text>
                </motion.g>
              ))}
            </svg>
          </motion.div>

          {/* RIGHT: Tabs */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8"
          >
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-3">
              {TABS.map((tab, i) => (
                <motion.button
                  key={tab.id}
                  variants={fadeUp}
                  onClick={() => setActiveTab(i)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative"
                  style={{
                    background: activeTab === i ? 'var(--gradient-red-gold)' : 'rgba(255,255,255,0.08)',
                    color: activeTab === i ? 'white' : 'rgba(255,255,255,0.6)',
                    border: activeTab === i ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={tabContent}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <h3
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {TABS[activeTab].title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {TABS[activeTab].body}
                </p>
                <div className="flex flex-wrap gap-4">
                  {TABS[activeTab].stats.map((stat) => (
                    <div
                      key={stat}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold"
                      style={{
                        background: 'rgba(192,57,43,0.15)',
                        color: '#F87171',
                        border: '1px solid rgba(192,57,43,0.3)',
                      }}
                    >
                      ✦ {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
