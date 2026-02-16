# Cherry's Closet

Vintage designer clothing popup shop in LA. Informational site only — no e-commerce. Events, about, contact.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Zero extra dependencies — no date libs, no icon libs, no animation libs

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Architecture

### Pages

| Route | File | Type |
|-------|------|------|
| `/` | `app/page.tsx` | Server — hero with logo, tagline, CTA |
| `/events` | `app/events/page.tsx` | Server — renders EventList + FAQ |
| `/about` | `app/about/page.tsx` | Server — story + photo placeholder |
| `/contact` | `app/contact/page.tsx` | Server — emails, form, Instagram |

### Client Components (only 5 ship JS)

- `MobileMenu` — hamburger toggle, fullscreen overlay, scroll lock
- `Calendar` — month grid, prev/next nav, date selection
- `EventList` — orchestrates Calendar + EventCards, filtering, scroll-to
- `ContactForm` — name/email/message form (UI only, TODO: backend)
- `NewsletterSignup` — email input (UI only, TODO: backend)

Everything else is server-rendered.

### Data

- `data/config.ts` — site name, tagline, announcement bar config (set to `null` to hide), emails, social links, nav items
- `data/events.ts` — `PopupEvent` interface + event array. Add/remove events here.

## Brand Colors

```
Cherry Red (primary accent):  #991C1A
Cream (background):           #FDF8E2
Sky Blue (tertiary):          #B6F2FA  — currently unused, reserved for future accent use
Near Black (text):            #1A1A1A
Warm Gray (dividers):         #E8E0D4
Light Gray (secondary text):  #999999
```

Defined as CSS custom properties in `app/globals.css` and exposed to Tailwind via `@theme inline`.

## Style Rules

- ALL visible text is uppercase — enforced via CSS defaults on headings and explicit `uppercase` classes on body text
- Font: Inter via `next/font/google`
- Minimal whitespace-heavy editorial aesthetic
- No header logo/wordmark — just centered nav links (HOME, EVENTS, ABOUT, CONTACT) with Instagram icon pinned right
- Nav links use `justify-evenly` to auto-scale spacing across screen sizes
- Mobile breakpoint at `md` (768px) — hamburger menu replaces nav

## Key Patterns

- Announcement bar: toggle via `siteConfig.announcement` — set to `null` to hide, set `{ text, link }` to show
- Calendar: pure JS date math, no libraries. Event dates in `Set<string>` for O(1) lookup
- Icons: all inline SVG (InstagramIcon, arrow chevrons in Calendar). No icon library
- All colors use Tailwind classes (`bg-cherry-red`, `text-cream`, etc.), not raw hex values
