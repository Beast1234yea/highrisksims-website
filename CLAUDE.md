# High Risk Sims - Consulting Services Website

## IMPORTANT: This is a CONSULTING website, not a product/SaaS site

Nick sells **consulting services** (audit, course transformation, simulation development, LMS implementation), NOT software subscriptions. The tech (LMS, sims) is what he builds WITH, not what he sells.

## Project Location
`C:\Users\nickb\Projects\highrisksims-website`

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS (CDN)
- React Router DOM
- Lucide React icons
- Deployed on Railway

## Brand Colors
- Primary (Deep Purple): `#2D1B4E`
- Accent (Gold): `#D4AF37`
- Cyan: `#00BCD4`
- Dark Background: `#1A102E`

## Site Structure

| Route | Purpose |
|-------|---------|
| `/` | Landing - consulting services focus |
| `/services` | Detailed services & pricing |
| `/about` | Nick's credentials & background |
| `/contact` | Booking & contact |

## Services & Pricing

| Service | Price | Timeline |
|---------|-------|----------|
| Audit & Strategy | $1,500 - $3,000 | 2-3 weeks |
| Course Transformation | $6,000 - $25,000/unit | 4-8 weeks |
| Simulation Development | From $25,000 | 8-12 weeks |
| LMS Implementation | $5,000 - $15,000 | 2-4 weeks |

**Packages:**
- Starter: $4,500 - $6,500
- Full Transformation: $12,000 - $25,000

## Nick's Credentials

- 23 years operational experience (crane, rigging, dogging)
- TAE40122 Certificate IV in Training and Assessment
- SafeWork NSW Accredited Assessor
- Major projects: Enlarged Cotter Dam, Sydney Desalination Plant, Law Courts of Canberra
- Clients: Royal Navy, Australian Army, John Holland, NSW Transport

## Related Projects

- **RTOWebLMS** (`C:\Users\nickb\Projects\RTOWebLMS`) - The LMS product Nick builds for clients
- **simutrain** (`C:\Users\nickb\Projects\simutrain`) - Unity simulation streaming

See `C:\Users\nickb\MASTER_PROJECT_MAP.md` for full architecture.

## Development

```bash
npm install
npm run dev
```

## Deployment

Railway auto-deploys. Uses Dockerfile with nginx.
