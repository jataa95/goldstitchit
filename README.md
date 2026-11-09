# Gold Stitch It — Website

Marketing site for **Gold Stitch It Services**, a CAC-registered fashion design & tailoring studio in Yaba, Lagos
(custom cloth making, bulk/brand production and tailoring training).

Built with Next.js (App Router) + Tailwind CSS. Fully static — deploys to Vercel with zero config.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| All text content, contact details, services, stats, courses, reviews | `src/lib/site.ts` |
| Page sections | `src/components/*.tsx` (assembled in `src/app/page.tsx`) |
| Colours / theme | `src/app/globals.css` (`--color-gold`, etc.) |
| SEO title/description | `src/app/layout.tsx` |
| Images & videos | `public/images`, `public/videos` |

All "order", "enrol" and contact buttons open **WhatsApp (+234 906 682 4196)** with a pre-filled message —
no backend or email service needed. Change the number in `src/lib/site.ts` (`whatsappNumber`).

## ⚠️ Placeholders to replace before launch

Search the code for `PLACEHOLDER`. Currently placeholder:

- [ ] **Email** — `hello@goldstitchit.com` (`site.email`)
- [ ] **Instagram handle** (`site.socials`)
- [ ] **Opening hours** (`site.hours`)
- [ ] **Stats** — pieces stitched, clients, students, brands (`stats`) and the "1.5k+" card in `About.tsx`
- [ ] **Training courses** — names, durations, fees (`₦XX,XXX`) and topics (`courses`)
- [ ] **Testimonials** — real customer quotes, names and locations (`testimonials`)
- [ ] Optional: un-watermarked versions of the photos/videos (current media carries the TikTok watermark)

## Deploy (Vercel)

1. Import `jataa95/goldstitchit` at <https://vercel.com/new>.
2. Framework preset: **Next.js** (auto-detected). No environment variables required.
3. Deploy. Add a custom domain under *Project → Settings → Domains* when ready.
