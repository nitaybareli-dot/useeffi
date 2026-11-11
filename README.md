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

- `src/content/he.ts`, `src/content/en.ts`: all copy. Hebrew follows `HeDict`, English follows `Dict` (both in `src/content/types.ts`).
- `src/components/he/`: the Hebrew landing page. `he/landing.tsx` sets the section order.
- `src/components/en/`: the English landing page (original layout).
- `src/components/` (top level): header, footer, buttons and layout pieces shared by both.
- `src/app/(he)` and `src/app/(en)`: the two language trees, each with its own root layout (`lang` and `dir`).
- `src/app/actions.ts`: contact form handler. `src/lib/leads.ts`: database and notification email.
- `src/app/globals.css`: color tokens and type scale.

## Contact form and leads

Each submission is validated on the server, rate limited per IP (5 per 10 minutes) and saved to the `leads` table in Postgres (Neon). The visitor sees the success message only after the row is saved. Tables are created on first use; `db/schema.sql` has the same schema.

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Neon connection string. Set automatically when a Neon database is connected to the Vercel project. |
| `LEAD_NOTIFY_EMAIL` | Optional. Where to email each new lead. Several addresses can be comma separated. Without it, no email is sent. |
| `RESEND_API_KEY` | Needed only with `LEAD_NOTIFY_EMAIL`. |
| `CONTACT_FROM_EMAIL` | Optional sender, for example `Effi <hello@useeffi.com>`, once the domain is verified in Resend. |

To see leads: Vercel dashboard → Storage → the Neon database → Open in Neon → Tables → `leads`, or run `SELECT * FROM leads ORDER BY created_at DESC;` in the SQL editor. Pull the variables locally with `vercel env pull`.

## Analytics

Vercel Web Analytics and Speed Insights are mounted in both root layouts. CTA clicks, industry tab changes and form submissions are sent as custom events.
