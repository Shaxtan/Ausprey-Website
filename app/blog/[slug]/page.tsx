import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { buildMeta } from '@/lib/metadata'

const POSTS: Record<string, { title: string; description: string; date: string; body: string }> = {
  'getting-started-with-mqtt': {
    title: 'Getting Started with MQTT for IoT',
    description: 'A practical guide to MQTT protocol fundamentals for IoT developers.',
    date: 'May 2024',
    body: 'MQTT (Message Queuing Telemetry Transport) is the backbone of most IoT communication architectures. This lightweight publish-subscribe protocol excels where bandwidth is constrained and latency matters...',
  },
  'nextjs-iot-dashboard': {
    title: 'Building a Real-Time IoT Dashboard with Next.js',
    description: 'Step-by-step guide to building a real-time IoT sensor dashboard with Next.js 14.',
    date: 'Apr 2024',
    body: 'Real-time dashboards are at the heart of most IoT applications. In this guide, we'll build a full-stack IoT dashboard using Next.js 14 App Router, WebSocket connections, and a clean component architecture...',
  },
  'esp32-freertos-deep-dive': {
    title: 'ESP32 + FreeRTOS: Task Management Deep Dive',
    description: 'How to architect multi-task firmware on ESP32 using FreeRTOS.',
    date: 'Mar 2024',
    body: 'The ESP32 paired with FreeRTOS is a powerhouse for complex embedded applications. In this article, we explore task priorities, inter-task communication with queues, mutex/semaphore patterns, and memory safety...',
  },
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = POSTS[params.slug]
  if (!post) return {}
  return buildMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${params.slug}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = POSTS[params.slug]
  if (!post) notFound()

  return (
    <article className="section-padding pt-40 bg-off-white min-h-screen">
      <div className="container-max max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-text hover:text-primary transition-colors mb-10">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <header className="mb-12 space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">{post.date}</p>
          <h1 className="text-5xl font-bold text-dark leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {post.title}
          </h1>
          <p className="text-xl text-gray-text">{post.description}</p>
          <div className="h-0.5 w-16 rounded" style={{ background: 'var(--gradient-red-gold)' }} />
        </header>

        <div className="prose prose-lg max-w-none text-gray-text leading-relaxed">
          <p>{post.body}</p>
          <p className="mt-6 text-gray-400 italic">
            This is a placeholder article. Replace <code>POSTS</code> in{' '}
            <code>app/blog/[slug]/page.tsx</code> with your CMS or MDX source.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-light flex items-center justify-between">
          <Link href="/blog" className="btn-outline text-sm">← All Articles</Link>
          <Link href="/contact" className="btn-primary text-sm">Talk to Our Team →</Link>
        </div>
      </div>
    </article>
  )
}
