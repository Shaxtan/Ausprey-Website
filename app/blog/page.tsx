import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMeta } from '@/lib/metadata'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = buildMeta({
  title: 'IoT & Software Development Blog',
  description:
    'Insights, tutorials, and case studies on IoT development, embedded systems, cloud architecture, and software engineering from the Auspre IoT team.',
  keywords: ['IoT blog', 'IoT development insights', 'embedded systems tutorials', 'software engineering articles'],
  path: '/blog',
})

// Replace with your CMS / MDX data source
const POSTS = [
  { slug: 'getting-started-with-mqtt', title: 'Getting Started with MQTT for IoT', excerpt: 'A practical guide to MQTT protocol fundamentals for IoT developers — brokers, topics, QoS levels, and real-world patterns.', date: 'May 2024', tag: 'IoT Fundamentals' },
  { slug: 'nextjs-iot-dashboard', title: 'Building a Real-Time IoT Dashboard with Next.js', excerpt: 'Step-by-step walkthrough of creating a real-time sensor dashboard using Next.js 14, WebSockets, and shadcn/ui.', date: 'Apr 2024', tag: 'Software Development' },
  { slug: 'esp32-freertos-deep-dive', title: 'ESP32 + FreeRTOS: A Deep Dive into Task Management', excerpt: 'How to architect multi-task firmware on ESP32 with FreeRTOS — priorities, queues, semaphores, and memory safety.', date: 'Mar 2024', tag: 'Embedded Systems' },
]

export default function BlogPage() {
  return (
    <section className="section-padding bg-off-white min-h-screen pt-40">
      <div className="container-max">
        <div className="max-w-xl mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">Knowledge Hub</p>
          <h1 className="text-5xl font-bold text-dark mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            IoT & Software <span className="gradient-text-red-gold">Insights</span>
          </h1>
          <p className="text-gray-text text-lg">Practical articles and deep dives from the Auspre engineering team.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-card p-8 shadow-card border border-gray-light hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit" style={{ background: 'rgba(192,57,43,0.08)', color: 'var(--color-primary)' }}>
                {post.tag}
              </span>
              <h2 className="text-xl font-bold text-dark leading-snug group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                {post.title}
              </h2>
              <p className="text-sm text-gray-text leading-relaxed flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{post.date}</span>
                <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
