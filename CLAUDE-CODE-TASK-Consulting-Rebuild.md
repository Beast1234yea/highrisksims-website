# Claude Code Task: Rebuild highrisksims-website as Consulting-First

## Overview

Rebuild the High Risk Sims website to focus on **consulting services** rather than product subscriptions. Nick is selling his expertise and building solutions for clients, not selling SaaS subscriptions (yet).

## Project Location

```
C:\Users\nickb\Projects\highrisksims-website
```

## Tech Stack (keep as-is)
- Vite + React + TypeScript
- Tailwind CSS (via CDN in index.html)
- React Router DOM
- Lucide React icons

## Brand Colors (keep as-is)
- Primary (Deep Purple): `#2D1B4E`
- Accent (Gold): `#D4AF37`
- Cyan: `#00BCD4`
- Elite Orange: `#FF6B00`
- Elite Blue: `#004B8D`
- Dark Background: `#1A102E`

---

## New Site Structure

```
/ (HomePage)           → Consulting-focused landing page
/services              → Detailed services with pricing
/about                 → Nick's background & credentials
/contact               → Booking & contact
/case-studies          → Portfolio/examples (can keep existing)
```

**Remove or deprioritise:**
- `/pricing` (product subscription tiers) → Replace with `/services`
- `/simulators` → Fold into services as "what we can build"
- `/lms` → Fold into services as capability
- `/roadmap` → Remove (product-focused)

---

## Page Specifications

### 1. HomePage.tsx - Complete Rewrite

**Hero Section:**
- Headline: "Transform Your RTO Training"
- Subhead: "Expert consulting • Interactive eLearning • 3D Simulations"
- Body: "Stop losing learners to outdated PDFs. I help RTOs modernise their training delivery with engaging digital experiences."
- CTA: "Book a Free Discovery Call" → /contact
- Secondary: "View Services" → /services

**Problem Section (keep similar to current but reframe):**
- Title: "Is Your Training Stuck in 2010?"
- Problems:
  - Paper learner guides that bore students
  - Generic PowerPoints that send people to sleep
  - Spreadsheet nightmares for compliance tracking
  - No safe way to practice high-risk skills

**Services Overview (NEW - replaces products):**
- Title: "How I Help RTOs Modernise"
- 4 service cards with brief descriptions and starting prices:
  1. Audit & Strategy - $1,500+
  2. Course Transformation - $6,000+
  3. Simulation Development - $25,000+
  4. LMS Implementation - $5,000+
- CTA: "View All Services" → /services

**Credibility Section:**
- Title: "Built by Someone Who's Done the Job"
- Key points:
  - 23 years operational experience (crane operator, rigger, dogman)
  - TAE40122 Certificate IV in Training and Assessment
  - SafeWork NSW Accredited Assessor
  - Major projects: Enlarged Cotter Dam, Sydney Desalination Plant, Law Courts of Canberra
  - Clients: Royal Navy, Australian Army, John Holland, NSW Transport
- Photo placeholder (optional)

**What I Build With (replaces product showcase):**
- Title: "Technology That Powers Modern Training"
- Brief showcase of capabilities (not products to buy):
  - Interactive eLearning (SCORM compliant)
  - 3D Training Simulations (Unity-based)
  - Modern LMS Platforms
  - Digital Assessment Tools
  - VOC Systems
- Frame as: "These are the tools I use to transform your training"

**CTA Section:**
- "Ready to Modernise Your Training?"
- "Book a free 30-minute discovery call. No hard sell. No obligation."
- Button: "Book Your Free Call" → /contact

**Footer:** Keep existing but update nav links

---

### 2. NEW: ServicesPage.tsx (replaces PricingPage)

**Route:** `/services`

**Hero:**
- Title: "Services"
- Subtitle: "From strategy to implementation, I've got you covered"

**Service 1: Modernisation Audit & Strategy**
```
Price: $1,500 - $3,000
Timeline: 2-3 weeks

What's Included:
- 2-4 hour discovery session (video call)
- Review of existing training materials
- Gap analysis against ASQA standards
- Detailed modernisation roadmap
- Prioritised recommendations with ROI
- Budget estimates for each recommendation

Best for: RTOs who know they need to modernise but aren't sure where to start.
```

**Service 2: Course Transformation**
```
Price: $6,000 - $25,000 per unit
Timeline: 4-8 weeks

What's Included:
- Complete redesign of learner guide content
- Interactive eLearning module (SCORM compliant)
- Digitised assessment tools
- LMS integration support
- Trainer delivery guide
- 30 days post-delivery support

Best for: RTOs with existing courses that need to be brought into the 21st century.
```

**Service 3: Simulation Development**
```
Price: From $25,000 (custom quoted)
Timeline: 8-12 weeks

What's Included:
- Custom Unity-based training simulator
- Realistic 3D environments & equipment
- Interactive scenarios & assessments
- Multiple deployment options (web, desktop, VR)
- Trainer guide & documentation
- Ongoing technical support

Best for: High-risk work training where practical experience is difficult, expensive, or dangerous to provide.
```

**Service 4: LMS Implementation**
```
Price: $5,000 - $15,000
Timeline: 2-4 weeks

What's Included:
- LMS platform setup & configuration
- Branding & customisation
- User account structure setup
- Course & assessment integration
- Admin training (2-4 hours)
- 30 days post-launch support

Best for: RTOs still tracking learners in spreadsheets or using clunky legacy systems.
```

**Packages Section:**

Package 1: "RTO Modernisation Starter" - $4,500 - $6,500
- 4-hour discovery audit
- Written modernisation roadmap
- 1 sample unit converted to interactive format
- Demo of simulation possibilities
- Perfect for: Testing the waters before full commitment

Package 2: "Full Unit Transformation" - $12,000 - $25,000
- Complete learner guide redesign
- Interactive eLearning module (SCORM)
- Digital assessment tools
- LMS integration
- Trainer training session
- Perfect for: Complete modernisation of a single unit

**Hourly Rates Table:**
| Service Type | Rate |
|--------------|------|
| General consulting & advisory | $150/hr |
| Instructional design & content | $120/hr |
| Technical development (Unity, LMS, web) | $150/hr |
| Train-the-trainer sessions | $180/hr |
| On-site visits | $1,200/day + travel |

**Remote Delivery Note:**
- ✅ 100% Remote Delivery
- All services delivered remotely via video call and screen share
- Australia-wide coverage, no travel costs

**CTA:**
- "Ready to Get Started?"
- Button: "Book Your Free Discovery Call" → /contact

---

### 3. AboutPage.tsx - Update

Keep existing structure but ensure it emphasises:

**Operational Background:**
- 23 years in construction (2000-2023)
- Crane operator, rigger, dogman
- Major infrastructure projects

**Training Credentials:**
- TAE40122 Certificate IV (2023)
- SafeWork NSW Accredited Assessor
- Elite Licensing partner

**Major Projects:**
- Enlarged Cotter Dam
- Sydney Desalination Plant
- Law Courts of Canberra

**Clients Trained:**
- Royal Navy
- Australian Army
- John Holland
- NSW Transport

**The Story:**
"After 23 years operating cranes and training workers in the field, I saw how far behind the training industry was. Paper guides, boring PowerPoints, no way to practice safely. So I started building the systems I wished existed - and now I help other RTOs do the same."

---

### 4. ContactPage.tsx - Update

**Hero:**
- Title: "Let's Talk About Your Training"
- Subtitle: "Book a free 30-minute discovery call to discuss your current setup and see how modernisation could work for your RTO."

**Two Cards:**

Card 1: Book a Call
- Icon: Calendar
- Title: "Book a Discovery Call"
- Text: "Schedule a free 30-minute call at a time that suits you."
- Button: "Book Now" (link to Calendly - placeholder for now)

Card 2: Email
- Icon: Mail
- Title: "Send an Email"
- Text: "Prefer to write? I'll get back to you within 24 hours."
- Button: "nickbeashel@hotmail.com" (mailto link)

**What to Expect Section:**
- Your current training setup and pain points
- What you're hoping to achieve
- A quick overview of what's possible
- Whether we're a good fit to work together
- "No hard sell. No obligation. Just straight talk."

**Contact Details:**
- Email: nickbeashel@hotmail.com
- Location: Based in Australia, delivering 100% remotely nationwide

---

### 5. Update Navbar.tsx

**New Navigation:**
- Logo: "High Risk Sims" → /
- Services → /services
- About → /about
- Contact → /contact
- CTA Button: "Book a Call" → /contact

**Remove:**
- Products dropdown
- Simulators
- Pricing
- Roadmap

---

### 6. Update App.tsx Routes

```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/case-studies" element={<CaseStudiesPage />} /> // Keep if has content
</Routes>
```

Remove routes for: /pricing, /simulators, /lms, /roadmap

---

## Content Tone

- **Direct and practical** - No corporate fluff
- **Confident but not arrogant** - Let experience speak
- **Industry language** - Use terms RTOs know
- **Problem-focused** - Lead with their pain, not your features
- **Personal** - "I" not "We" - this is Nick's expertise

---

## Placeholders to Add

These need real values before going live:
- Calendly booking link
- Email: nickbeashel@hotmail.com
- Phone (if desired)
- Headshot photo (optional)
- Case study content (if available)

---

## Testing Checklist

After implementing:
- [ ] Homepage loads with consulting focus
- [ ] /services shows all 4 services with pricing
- [ ] /about shows credentials and background
- [ ] /contact has booking and email options
- [ ] Navigation works correctly
- [ ] Mobile responsive
- [ ] All CTAs link to /contact
- [ ] Old product-focused pages removed or redirected

---

## Summary of Changes

| Before | After |
|--------|-------|
| Product subscription tiers | Consulting services with fixed pricing |
| "Buy our software" | "Hire me to build your solution" |
| SaaS features list | Project deliverables |
| /pricing | /services |
| Product showcase | "What I build with" capabilities |
| Generic corporate | Personal expertise positioning |
