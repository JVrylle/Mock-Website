# EireneOps — Content & Component Extraction
Source: https://eireneops.nypzim.com/
Purpose: Reference for top-to-bottom redesign

---

## Component 1: Navigation Bar
- Logo/Brand: "EIRENEOPS"
- Link: Log In
- Button: Get Started

**Loading state (on initial page load):**
- Text: "EIRENEOPS"
- Progress label: "Calibrating Estate 0%"

---

## Component 2: Hero Section
- Background: video (hero-bg.mp4, muted/looping)
- Eyebrow text: "EST. 2026 — NYPZIM HOLDINGS"
- Headline: "EIRENEOPS"
- Subheadline: "The Executive Operations Platform"
- Tagline: "Built for operators who run the room — not react to it."
- Button (primary/CTA): "Request Early Access"
- Scroll indicator: "Scroll"

---

## Component 3: Product Demo Video (Embedded)
- YouTube embed (autoplay, muted, looping, no controls) — video ID: MPw-5ZFkuVo

---

## Section 1: Problem Statement
- Headline: "Every hour you spend managing the machine — is an hour not leading it."
- Supporting lines (appears as separate stacked statements):
  - "Inbox overload erodes executive bandwidth."
  - "Missed follow-ups cost deals."
  - "Scattered assets slow execution."
  - "EireneOps was built to solve this."

---

## Component 4: Scrolling Marquee / Ticker
Repeating text banner (infinite scroll style), separated by "✦":
- EXECUTIVE CONTROL
- ZERO INBOX
- GUARDED HOURS
- VERIFIED INTELLIGENCE
- SILENT PRECISION
- ESTATE LEVEL OPERATIONS

(Note: appears twice in source — likely two duplicate rows for seamless looping animation)

---

## Section 2: The Platform (Module Showcase)
- Eyebrow: "THE PLATFORM"
- Headline: "Six modules. One command center."
- Subtext: "Each module is engineered as a discipline of its own — and composed into a single, coherent operating system for the executive day."

### Module Card 1
- Status tag: "LIVE · 01"
- Number: 01
- Label: "MODULE 01"
- Title: "Global Overview Dashboard"
- Subhead: "Every signal. One pane."
- Description: "A real-time command surface that consolidates the operational health of your entire estate — telemetry, throughput, exceptions — visible the moment you sign in."
- Feature bullets:
  - Live KPI rings & sparkline telemetry
  - Geo-distributed activity map
  - Exception alerts surfaced first
- Image: dashboard interface preview

### Module Card 2
- Status tag: "LIVE · 02"
- Number: 02
- Label: "MODULE 02"
- Title: "Operations Inbox"
- Subhead: "Zero inbox. Without compromise."
- Description: "Email triaged, categorized, and routed by intent. Drafts pre-written in your voice. The noise is gone before you arrive."
- Feature bullets:
  - VIP, Needs Reply, FYI auto-routing
  - Voice-matched AI drafts
  - One-tap approve & send
- Image: inbox interface preview

### Module Card 3
- Status tag: "LIVE · 03"
- Number: 03
- Label: "MODULE 03"
- Title: "Media Vault"
- Subhead: "Every asset, archived with intent."
- Description: "A meticulously indexed archive of every file, frame, and reference your operation touches — pulled in from every source, retrievable in a breath."
- Feature bullets:
  - Cross-source unified library
  - Semantic search across all media
  - Version & rights tracking
- Image: vault interface preview

### Module Card 4
- Status tag: "LIVE · 04"
- Number: 04
- Label: "MODULE 04"
- Title: "Calendar & Foundation Matrix"
- Subhead: "Guard the hours that matter."
- Description: "Foundational blocks — the deep work, the family, the recovery — are protected by design. Every meeting request is measured against what you've already chosen to protect."
- Feature bullets:
  - Foundation blocks shielded by default
  - Conflict detection before acceptance
  - Smart hold slots for pending replies
- Image: calendar interface preview

### Module Card 5
- Status tag: "LIVE · 05"
- Number: 05
- Label: "MODULE 05"
- Title: "Intelligence & Research Hub"
- Subhead: "Briefings on demand."
- Description: "Deep-dive research synthesized into decision-ready briefings — citations intact, sources verified, delivered without breaking your workflow."
- Feature bullets:
  - Verified sources & live citations
  - Comparison tables & trade-off matrices
  - Export to PDF or paste into draft
- Image: research hub interface preview

### Module Card 6
- Status tag: "LIVE · 06"
- Number: 06
- Label: "MODULE 06"
- Title: "AI Notetaker"
- Subhead: "Meetings become action."
- Description: "An identified AI assistant joins your calls, transcribes faithfully, then converts the conversation into structured notes, decisions, and assigned action items."
- Feature bullets:
  - Transparent, identified AI participant
  - Speaker-attributed transcripts
  - Auto-extracted action items & owners
- Image: notetaker interface preview

---

## Section 3: Audience Segments (Individuals vs Business)

### Card A: For Individuals
- Title: "FOR INDIVIDUALS"
- Subtext: "Solo EAs, fractional COOs, operations managers, executive assistants."
- Bullets:
  - Running 1–3 principals
  - Managing multiple platforms from one place
  - Need structure, not more tools

### Card B: For Business
- Title: "FOR BUSINESS"
- Subtext: "EA agencies, family offices, multi-principal firms."
- Bullets:
  - Teams of operators, one shared command center
  - Custom dashboards and white-glove onboarding
  - Scalable from 3 to unlimited principals

---

## Section 4: Pricing ("INVESTMENT")
- Eyebrow: "INVESTMENT"

### Plan 1: Solo Operator
- Price: "$25/month"
- Subtext: "For freelance EAs & solo entrepreneurs"
- Features:
  - Core Sidekick UI
  - Inbox Triage (500 syncs/mo)
  - Calendar Sync
  - Local Notetaker
- Button: "Get Started"

### Plan 2: Executive Suite
- Price: "$89/month"
- Subtext: "For dedicated EAs & fractional operators"
- Features:
  - Unlimited Inbox + Calendar syncs
  - Research Assistant
  - Video Downloader
  - Media Vault
  - Full backend sync
- Button: "Get Started"

### Plan 3: Enterprise Hub
- Price: "Custom"
- Subtext: "For EA agencies & multi-principal firms"
- Features:
  - Multi-seat licensing
  - Shared Media Vaults
  - SOP generation
  - White-glove onboarding
  - Custom API integrations
- Button: "Contact Us"

---

## Section 5: Early Access Request (Lead Form)
- Headline: "REQUEST EARLY ACCESS"
- Subtext: "Individual or business — we're onboarding selectively."
- Toggle/Tab options: "individual" | "business"
- Button: "Submit Request"

(Note: actual form fields — name, email, etc. — were not captured in the static extraction; likely rendered dynamically. Worth inspecting the live site directly for exact input fields.)

---

## Component 5: Footer
- Logo/Brand: "EIRENEOPS"
- Copyright: "© 2026 Nypzim Holdings LLC. All rights reserved."
- Links: "Privacy" | "Terms"

---

## Notes on Structure
- This appears to be a **single-page site** — Login, Privacy, and Terms are client-side routes (likely SPA/React via a builder platform, given the `/__l5e/` asset path and "Lovable" meta tags) and did not return separate static content when fetched directly.
- If you need the actual content of the Login, Privacy, or Terms pages, those will need to be captured via browser (screenshots/view-source) since they render client-side.
- Colors, fonts, and exact spacing were not extracted here (text-only extraction) — flag those separately as you review the live site visually.