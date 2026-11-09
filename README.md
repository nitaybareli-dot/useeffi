# Effi website

Marketing site for Effi (useeffi.com): a bilingual landing page, Hebrew (RTL) at `/` and English at `/en`.

Built with Next.js (App Router), Tailwind CSS v4 and deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `src/content/he.ts`, `src/content/en.ts`: all copy. Both files follow the shape in `src/content/types.ts`.
- `src/components/`: page sections. `landing.tsx` sets their order.
- `src/app/(he)` and `src/app/(en)`: the two language trees, each with its own root layout (`lang` and `dir`).
- `src/app/actions.ts`: contact form handler.
- `src/app/globals.css`: colors and fonts (Tailwind theme).

## Contact form

The form emails each lead through [Resend](https://resend.com). It needs these environment variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (set by the Vercel Marketplace integration). |
| `CONTACT_TO_EMAIL` | Where leads are sent. Several addresses can be comma separated. |
| `CONTACT_FROM_EMAIL` | Optional sender, for example `Effi <hello@useeffi.com>`, once the domain is verified in Resend. Defaults to Resend's test sender. |

Without the first two, the form shows an error instead of sending. Pull them locally with `vercel env pull`.

## Analytics

Vercel Web Analytics and Speed Insights are mounted in both root layouts. CTA clicks, industry tab changes and form submissions are sent as custom events.
