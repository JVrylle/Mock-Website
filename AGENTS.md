# AGENTS.md — EIRENEOPS Project Guide

## Project Overview
EIRENEOPS is a SaaS platform for **executive operations** — inbox, calendar,
media, research and note-taking for executive assistants, operators, agencies,
family offices and multi-principal firms. This repository is the **static
mockup** of the marketing website (no backend, no build step).

> Note: content and structure mirror `REFERENCE.md`, a text/component
> extraction of the EireneOps site (https://eireneops.nypzim.com/), per the
> owner's authorization. Brand copy is adopted as-is.

## Tech Stack
- **HTML5** — single-page structure (`index.html`)
- **CSS3** — custom properties, no frameworks (`css/style.css`)
- **Vanilla JS** — progressive enhancement (`js/main.js`)
- Fonts: Google Fonts (Playfair Display for headings, Inter for body) with system fallbacks.

## Brand Rules

### Color Theme — 60-30-10 (Black-Gold-White)
| Role | Color | Hex | Usage |
|---|---|---|---|
| 60% Dominant | Black | `#0A0A0A` | Body backgrounds, nav, footer, dark sections |
| 30% Secondary | White / Off-white | `#FFFFFF` / `#F5F5F3` | Cards, text, light alternating sections |
| 10% Accent | Gold | `#D4AF37` | CTAs, highlights, active states — **use sparingly** |

- Gold is for **action & emphasis only**: primary buttons, key highlights, active tab/option.
- Never use gold for large background areas or body copy.
- All colors are defined once as CSS custom properties in `:root` (see `css/style.css`).
- Hover: gold darkens to `#B8962E`; black surfaces lighten to `#141414`.

### Typography & Tone
- Headings: Playfair Display (serif) — executive gravitas.
- Body/UI: Inter (sans-serif) — operational SaaS clarity.
- Copy tone: precise, confident, understated ("silent precision"). Short, decisive lines.

## Page Structure (fixed order — do not reorder)
1. Nav bar (EIRENEOPS text wordmark — no icon; links: The Problem, The Platform, For You, Investment, Early Access; **Log In** ghost + **Get Started** gold buttons)
2. Hero (full-viewport; eyebrow "EST. 2026 — NYPZIM HOLDINGS", headline `EIRENEOPS` with
   gold-gradient accent, divider rule, subhead, tagline, **Request Early Access** +
   ghost **Explore the Platform** CTAs, small-caps note, "Scroll" indicator with
   travelling gold dot, layered drifting smoke animation, parallax pixel stars)
3. Problem Statement ("Every hour you spend managing the machine…" + 4 stacked lines)
4. The Platform (intro heading: "Six modules. One command center." — first slide of the carousel)
6. Module slides 01–06 (scroll-scrubbed sticky horizontal carousel: an intro slide + six
   full-viewport slides inside `.modules-scroll` → `.modules-scroll__viewport` (sticky) →
   `.modules-scroll__track`, driven by `--modules-progress`; each slide is a
   `<section class="modules-slide module-section" id="module-0N">` alternating dark/light via
   `module-section--light`, label "Module 0N", title, subhead, description, 3 bullets, empty
   placeholder preview box; gold dot progress indicator bottom-center; below 768px or under
   `prefers-reduced-motion` the track falls back to stacked vertical sections)
7. About Us (added trust section — not in reference)
8. Audience Segments (two cards: For Individuals / For Business)
9. Pricing ("INVESTMENT") — Solo Operator $25, Executive Suite $89, Enterprise Hub Custom
10. Early Access Request (form with individual/business toggle + validation)
11. Footer (tagline, "© 2026 Nypzim Holdings LLC", Privacy | Terms)

## Conventions
- Class naming: `block__element--modifier` (BEM-lite), prefixed by block (`nav__`, `hero__`, `module__`...).
- Sections: `<section>` with `id` + `section` class; container class `container` (max-width 1180px).
- JS hooks: `data-` attributes for mobile nav (`data-nav-toggle`), early-access toggle
  (`data-ea`), and validation (`data-error-for`, `data-ea-success`).
- Do not add comments to code unless genuinely clarifying non-obvious logic.
- Keep JS dependency-free; no jQuery, no frameworks.
- Mobile-first: test at 375px, 768px, 1280px.

## Verification
- Open `index.html` directly in a browser or serve locally (e.g. `python -m http.server`).
- Check: all 9 sections in order, nav smooth-scrolls, module cards render,
  early-access toggle switches + form validates, contrast OK (gold `#D4AF37` on black
  `#0A0A0A` passes WCAG AA for large/bold text).

## Changelog
| Date | Change |
|---|---|
| 2026-08-16 | Loader + login responsive polish: loader bar gets `max-width: calc(100vw − 48px)` (was fixed 400px — overflowed below 400px viewports); login gains two short-screen tiers — `max-height: 700px` (panel/aside padding 40px/56px, brand-name capped `clamp(2.6rem, 5.5vw, 4.4rem)`, eyebrow/sub margins tightened) and `max-height: 620px` (panel becomes internally scrollable via `overflow-y: auto` + `place-items: start center`, page stays scroll-free); phone-landscape tier `(max-width: 900px) and (max-height: 520px)` — aside grows to content (`min-height: auto`), brand-name sized by `6vh`, tagline hidden. |
| 2026-08-16 | Responsive pass across 4 tiers (desktop >1280 / laptop 901–1280 / tablet 601–900 / phone ≤600): hamburger dropdown (≤1200) now includes Log In + Get Started CTA row (`.nav__cta`, hidden on desktop) on `index.html`; duplicate nav-dropdown rules removed from the ≤860 block; audience cards go 1-col at ≤767 (was ≤600); old ≤540 block deleted (dead selectors); new ≤600 phone tier — container padding 16px, section padding 64px, hero eyebrow tightened + CTAs stack full-width, hero note 12.5px, module ghost numbers 2.6rem at `top/right: 20px`, early-access toggle stacks full-width, footer 1-col, about-value/price-card padding tightened, login aside/panel padding + brand-name floor `clamp(2.6rem, 12vw, 5.4rem)`. |
| 2026-08-16 | Login page polish: `#loader` removed from `login.html` (no loading screen on login; `main.js` guards on element existence); back button text changed to "Go Back" (arrow dropped); success phrase now "✓ Successfully Logged In" with `margin-top: 18px` clearance below the submit button; desktop `.login` locked to `height: 100svh; overflow: hidden` (zero vertical scroll; ≤900px stack resets to `height: auto; overflow: visible`), plus `@media (max-height: 780px)` padding tightening; login CSS/JS comment headers de-dashed. |
| 2026-08-16 | `login.html` restructured: header removed — replaced by a ghost "← Back to site" button (`.login__back`, top-left); layout is now a full-viewport split — left brand filler (`.login__aside`, flex 1): parallax star field, gold-dash eyebrow, oversized Cormorant EIRENEOPS wordmark with gold-gradient accent, hero rule, subhead + tagline, legal line bottom-left; right full-height panel (`.login__panel`, `min(480px, 50vw)` — ~1/3 on desktop, ~1/2 on smaller): form placed directly on the panel (`--black-soft` + hairline left border, no card). ≤900px stacks: aside becomes a 44svh brand teaser, panel goes full-width below. |
| 2026-08-16 | Added `login.html`: standalone Log In page reusing the site design system — same head/fonts, `#loader` (1.5s), custom cursor, nav (links prefixed `index.html#…`, ghost Log In + gold Get Started), centered card on black with gold radial washes (`.login` / `.login__card`), Playfair title + tag eyebrow, email/password fields reusing `.earlyaccess__*` classes, show/hide password toggle (`[data-login-toggle]`), gold custom checkbox (Remember me), gold "Forgot password?" link, mock submit validation in `main.js` (`#loginForm`, email format + required, success note `[data-login-success]`), selective-onboarding note linking back to early access, slim legal footer. Header **Log In** ghost button on `index.html` now links to `login.html`. |
| 2026-08-16 | Loader tuned: duration cut to 1.5s with ease-out-expo pacing — bar uses `cubic-bezier(0.16,1,0.3,1)`, counter driven by rAF with `1 − 2^(−10t)` easing (fast start, slow finish); fade-out replaced with a shutter reveal — the screen slides up `translateY(-100%)` (0.65s, no opacity change), 500ms hold after 100% then slide at 2s, node removed 2.65s; bar widened to 460px, status phrase shrunk to 10.5px. |
| 2026-08-16 | Loader refined: sequential phrases removed, replaced by "Establishing secure connection…" (under the bar, left, small-caps) with staggered jumping-dot ellipsis; 01%–100% gold counter (under the bar, right, tabular-nums, 20ms tick synced to the 2s bar); both now live in `.loader__meta` row directly beneath the progress line; wordmark fades/rises in on load; 100% holds 500ms before the upward fade-out (translateY −4vh at 2.5s, node removed 3.15s); progress bar widened to 330px. |
| 2026-08-16 | Hero eyebrow: middle "—" em dash replaced with a CSS-drawn bar (`.hero__eyebrow-line`, 18×1px gold) so all three dashes match. Added a 2s loading screen (`#loader`): EIRENEOPS wordmark, two sequential phrases ("Built for operators who run the room." → "Not react to it.") crossfading at 1s, gold hairline progress bar filling over 2s, smooth 0.6s fade-out at 2s then node removal at 2.65s; `html.is-loading` locks scroll during the load. |
| 2026-08-16 | Polish pass: removed all "Module 0N" label pills (HTML + dead `.module-section__label` CSS); ghost module numbers pushed in from the edge (`top 48px / right 56px`, 28px on mobile); global custom scrollbar (8px WebKit thumb, `scrollbar-width: thin` for Firefox, gold on hover); problem section: taller y spacing (140px block padding, 24px list gap), first 3 items muted gray with dim dashes, final item as positive modifier (gold ✓, 19px white bold, gold divider above). |
| 2026-08-16 | Intro hold removed: leaving "The Platform" transitions immediately (hold-intro state deleted, `INTRO_HOLD_MS`/`holdElapsed` dropped). |
| 2026-08-16 | Walk-completes pacing for the module carousel (freeze-on-stop removed): the walk keeps stepping toward the scroll zone until caught up, even after scroll events stop; frenzy tier while actively scrolling — tween 280ms + settle 280ms (~0.56s/module, full sweep ~3.4s); brisk walk tier when stopped — tween 450ms + settle 900ms; arrival settle 2600ms with normal reveal (`is-fast` off); intro hold now time-based (1000ms, completes after stop); rAF loop runs until `state === 'idle'`. |
| 2026-08-16 | Carousel pacing rebuilt as a magnetic stepped state machine (free scrub removed): steps only start while actively scrolling (smoothed velocity > 60px/s — otherwise the walk freezes on the current slide and resumes on fresh input); leaving the intro slide holds "The Platform" for 1000ms (timer accumulates only while scrolling); per-step tween 500ms fast / 700ms normal; module reveal is accelerated via `.modules-slide.is-fast` (durations 0.45s, delays 0) with settle 900ms while still scrolling, 2600ms at rest; symmetric reverse stepping with mid-tween direction flips; `#module-0N` snaps set state directly and suppress the machine for 1.2s. |
| 2026-08-16 | Frenzy pacing for the module carousel: scroll velocity (smoothed px/s) above 2000 engages a stepped mode — the track advances exactly one module per cycle (700ms ease-out slide-in tween + ~1.9s freeze so the staged reveal finishes) before the next module can enter; free 1:1 scrub is preserved for calm scrolling; a self-perpetuating rAF loop keeps timers alive after scroll events stop; footer `#module-0N` snaps bypass the lock; state resets when falling back to stacked mode. |
| 2026-08-16 | Modules rebuilt as a scroll-scrubbed sticky horizontal carousel: `.platform` wraps `.modules-scroll` (tall scroll region) → sticky `.modules-scroll__viewport` (100svh, edge fade via CSS mask) → `.modules-scroll__track` translated by `--modules-progress` (1:1 with scroll — speed matches scroll speed, reverses on scroll-up); 7 slides (intro + modules 01–06, `modules-slide`), dimmed when inactive, staged per-slide reveal via `is-active`; gold progress dots + counter bottom-center; footer `#module-0N` links snap to the matching slide; below 768px or `prefers-reduced-motion` falls back to stacked vertical sections. |
| 2026-08-16 | Removed marquee/ticker (the "carousel") from HTML + CSS; About "Request Early Access" button switched to gold; brand wordmark (nav + hero + footer) re-set to Cormorant Garamond via new `--font-brand`; hero subhead "The Executive Operations Platform" lightened to `--gray` at weight 400. |
| 2026-08-14 | Initial build: AGENTS.md, single-page `index.html`, `css/style.css`, `js/main.js` — nav, hero, about, individual/business tabs, pricing, contact, footer (LAWOPS brand). |
| 2026-08-14 | Accent color changed from `#FFD700` to metallic gold `#D4AF37` (hover `#B8962E`); all glows/borders updated to matching `rgba(212, 175, 55, …)`. |
| 2026-08-14 | Major redesign per `REFERENCE.md`: rebranded to **EIRENEOPS** (Nypzim Holdings), rewrote `index.html` to reference structure (hero → problem → marquee → 6-module platform → about → audience cards → 3-tier pricing → early-access form → footer); added CSS for scroll indicator, marquee, module previews, audience cards, early-access toggle; updated `main.js` (early-access toggle + form validation); replaced contact/pricing/audience sections. |
| 2026-08-14 | Modules split into six standalone full-width sections (`module-01`…`module-06`), alternating dark/light; "LIVE · 0N" tags removed and replaced by "Module 0N" labels; nav + footer now carry per-module links; hamburger breakpoint raised to 1200px. |
| 2026-08-15 | Logo removed site-wide (header + footer); nav links consolidated to 5 (per-module anchors replaced by single "The Platform" link to `#platform`); unused `.nav__logo*` CSS removed. |
| 2026-08-15 | EIRENEOPS wordmark restored in header + footer (text only — no SVG icon); `.nav__logo` / `.nav__logo-accent` CSS restored, `.nav__logo-icon` stays removed. |
| 2026-08-15 | Module previews emptied (no more CSS mock content) and resized to a taller, narrower portrait box (360px h × max 420px w, centered in column; full-width 240px on mobile); dead `.module-section__preview-*` child rules removed. |
| 2026-08-15 | Hero eyebrow dashes replaced with CSS-drawn single lines (28px/18px gold bars); middle hyphen upgraded to em dash ("Est. 2026 — Nypzim Holdings"); smoke animation made prominent — 7 wisps, 12–16s cycles, negative delays (mid-flight on load), stronger gradients, sway turbulence, and forced on even under `prefers-reduced-motion`. |
| 2026-08-15 | Hero redesigned: full-viewport centered layout, faint blueprint grid + gold glows, oversized outlined ghost wordmark, gold gradient title accent with glow, divider rule under title, second ghost CTA ("Explore the Platform"), small-caps note under CTAs; scroll indicator reworked to a travelling gold dot on a fading line. Smoke reworked from rising streaks to slow layered drifting atmosphere (blur 40px, 19–27s ease-in-out cycles, sway/rotate/scale turbulence, opacities 0.08–0.5). |
| 2026-08-15 | Blueprint grid background and ghost wordmark removed; replaced with full-CSS parallax pixel-star field (3 layers, 1–2px dots incl. gold accents, repeating tiles 190/260/340px drifting at 40/64/96s for parallax depth), also forced on under `prefers-reduced-motion`. |
| 2026-08-15 | Star field rebuilt as classic box-shadow pixel stars (Codepen-style): 1px/2px/3px gold dots (`#D4AF37` alphas 0.35/0.55/0.85) generated randomly across a 2000×2000px field (450/140/65 stars), duplicated via `::after` at 2000px for seamless `translateY(-2000px)` loops at 50s/100s/150s parallax speeds. |