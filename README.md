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

- `src/content/landing.ts`: all landing page copy, Hebrew (default) and English, in one file with one shape (`Landing`).
- `src/components/landing/`: the landing page. `landing.tsx` sets the section order: hero, pains, Effi's morning message and log, cost calculator, why now, ideas by industry, how we work, contact.
- `src/app/globals.css`: the landing styles are scoped under `.lp` at the end of the file (colors, type, animations). The accent color is `--acc`.
- `src/content/he.ts`, `src/content/en.ts`: metadata, privacy page and other shared text (`Shell` in `src/content/types.ts`).
- `src/app/(he)` and `src/app/(en)`: the two language trees, each with its own root layout (`lang` and `dir`).
- `src/app/actions.ts`: contact form handler. `src/lib/leads.ts`: database and notification email.
- `src/components/he/`, `src/components/en/`: the previous landing layouts, no longer routed. Safe to delete in a follow-up.

## Contact form and leads

Each submission is validated on the server, rate limited per IP (5 per 10 minutes) and saved before the visitor sees the success message. Storage is picked automatically:

1. **Postgres (Neon)** when `DATABASE_URL` is set: rows in the `leads` table, created on first use (`db/schema.sql` has the same schema).
2. **Vercel Blob** otherwise, when `BLOB_READ_WRITE_TOKEN` is set: one private JSON file per lead under `leads/YYYY-MM-DD/`. The store `effi-leads` is connected to the project.

| Variable | Purpose |
| --- | --- |
| `BLOB_READ_WRITE_TOKEN` | Set automatically by the connected Blob store `effi-leads`. |
| `DATABASE_URL` | Optional. Neon connection string; when set, leads go to Postgres instead. |
| `LEAD_NOTIFY_EMAIL` | Optional. Where to email each new lead. Several addresses can be comma separated. Without it, no email is sent. |
| `RESEND_API_KEY` | Needed only with `LEAD_NOTIFY_EMAIL`. |
| `CONTACT_FROM_EMAIL` | Optional sender, for example `Effi <hello@useeffi.com>`, once the domain is verified in Resend. |

To see leads in Blob: Vercel dashboard → Storage → `effi-leads` → Browser → `leads/`, then open a date folder and a file. With Postgres: Storage → the Neon database → Open in Neon → Tables → `leads`.

## Analytics

Vercel Web Analytics and Speed Insights are mounted in both root layouts. CTA clicks (`cta_click`), industry tab changes (`industry_tab`) and saved form submissions (`contact_submitted`) are sent as custom events.
