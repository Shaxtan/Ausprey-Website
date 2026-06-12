# Auspre IoT — Next.js Website

> "Igniting Possibilities" — A world-class Next.js 14+ website for Auspre IoT.

## Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + CSS custom properties
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Fonts:** Playfair Display + DM Sans + JetBrains Mono (via `next/font`)
- **SEO:** Next.js Metadata API + JSON-LD structured data
- **Sitemap:** `next-sitemap` (auto-generated on build)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/app              → Next.js App Router pages
/components
  /layout         → Navbar, Footer
  /home           → Homepage sections
  /shared         → Reusable components (SectionHeader, AnimatedCounter…)
/lib
  animations.ts   → Framer Motion variants (import and reuse everywhere)
  metadata.ts     → buildMeta() helper for per-page SEO
  schema.ts       → JSON-LD schema generators
/public           → Static assets, robots.txt
```

## Environment Variables

Create `.env.local` (none required to run locally, add as needed):

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Adding Real Images

Replace the placeholder `<div>` in `HeroSection.tsx` with:

```tsx
import Image from 'next/image'
<Image
  src="/images/laptop-mockup.png"
  alt="Auspre IoT Dashboard — custom IoT software platform"
  width={480}
  height={320}
  priority
  className="rounded-2xl shadow-card"
/>
```

All images go in `/public/images/`. Use descriptive, keyword-rich `alt` text.

## Adding Blog Posts

Edit the `POSTS` object in `app/blog/[slug]/page.tsx`, or connect an MDX / CMS
source (Contentlayer, Sanity, Notion, etc.).

## Sitemap

Auto-generated on `npm run build` via `next-sitemap`. Configure in `next-sitemap.config.js`.

## Deployment

Deploy to Vercel (recommended):

```bash
vercel --prod
```

After deploying, replace `YOUR_GOOGLE_VERIFICATION_CODE` in `app/layout.tsx` with
the code from [Google Search Console](https://search.google.com/search-console).

## Checklist Before Launch

- [ ] Replace placeholder images in `/public/images/`
- [ ] Update contact details in `Footer.tsx` and `contact/page.tsx`
- [ ] Add real testimonials in `TestimonialsSection.tsx`
- [ ] Connect a contact form backend (Resend, Formspree, etc.)
- [ ] Add Google Analytics / Plausible
- [ ] Set Google Search Console verification code
- [ ] Update `foundingDate` and `numberOfEmployees` in `lib/schema.ts`
- [ ] Test on mobile (375px) and verify all animations degrade gracefully
- [ ] Run `npm run build` and check for TypeScript errors
- [ ] Verify Lighthouse scores (target: Performance 90+, SEO 100)
