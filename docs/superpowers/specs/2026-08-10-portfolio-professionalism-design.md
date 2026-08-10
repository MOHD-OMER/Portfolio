# Portfolio professionalism pass — design

**Date:** 2026-08-10
**Status:** approved, ready for implementation planning

## Goal

Make the portfolio read as the work of a professional engineer rather than a
student project, for a visitor who spends about thirty seconds on the page.

**Primary audience:** recruiters and HR screeners first, hiring managers and
engineers second. The page must survive a thirty-second skim, with depth
available one click deeper.

**Hard constraint:** code-only. No screenshots, headshots, case-study writing,
or third-party account signups. Everything here is achievable without the
author producing new assets.

## Current state

The site is a single-page Next.js 16 App Router portfolio, already through a
correctness and performance pass (commit `245c5ca`): resume caching, form
validation, hero jank, SEO metadata, and accessibility are fixed.

What remains, found by inspection:

| Gap | Evidence |
| --- | --- |
| Resume buried | It is the sixth of six identical icon tiles in the hero |
| No footer | The page stops after the Contact section |
| Unbranded 404 | No `app/not-found.js`; Next.js serves its default |
| No structured data | Google has no `Person` entity to render |
| Emoji as icons | 37 emoji icon entries across projects, skills, certifications, experience, and contact |
| Unused icon library | `lucide-react` is a dependency but is never imported |
| Gradient saturation | About 21 elements use gradient-clipped text, including small card titles |
| Orphan card | The seventh skill card sits alone on the last row of a three-column grid |

## Phase A — credibility layer

Additive apart from the hero button rearrangement. Ships as one commit.

### Hero restructure

The action hierarchy is the core problem: a recruiter scanning for a resume
finds six visually identical tiles, one of which happens to be the resume.

- Promote **Download Resume** to a filled primary button, beside the existing
  outline **Get in Touch**.
- Remove Resume from the social tile row, leaving GitHub, LinkedIn,
  HuggingFace, Email, WhatsApp.
- Tighten the hero's vertical rhythm so name, rotating title, tagline, and both
  CTAs fit above the fold at 1080p.
- Add one status line reusing facts already on the site: *Open to AI/ML
  Engineer roles · Hyderabad, India*.

### `app/components/Footer.js`

New server component, no client JavaScript. Contains name and role, quick
section links, the social set, a resume link, and copyright. The year is
computed server-side to avoid a hydration mismatch.

### `app/not-found.js`

Branded 404 matching the dark theme, with a link home.

### `Person` JSON-LD in `layout.js`

Injected as `application/ld+json`. Fields: `name`, `jobTitle`, `url`,
`sameAs` (GitHub, LinkedIn, HuggingFace), `address` (Hyderabad, India),
`alumniOf` (Lords Institute of Engineering & Technology). Every value already
appears on the site; nothing is invented.

### Skip-to-content link

Standard visually-hidden-until-focused anchor in `layout.js`, targeting the
`<main>` element.

## Phase B — visual maturity

Ships as a second, independently revertable commit.

### Emoji to `lucide-react` icons

There are 37 emoji icon entries. Two are HuggingFace and are kept (see below),
so 35 are replaced with semantic line icons: `Target` for AI Orchestrator,
`Users` for the multi-agent system, `Dna` for LLM fine-tuning, `Activity` for
PulmoScan, `Flame` for smoke detection, and so on.

Distribution: Projects 16 (10 project icons plus 6 highlight icons inside the
TruthLens card), Skills 7, Certifications 6, Contact 5, Experience 2, Hero 1.

Beyond looking more considered, this fixes a real cross-platform problem: emoji
render differently on Windows, macOS, and Android, so the site currently looks
different to every visitor. Icons render at consistent weight and inherit the
card's accent colour. Imports are tree-shaken, so bundle cost is negligible and
the dependency is already installed.

**Deliberate exception:** HuggingFace keeps 🤗 in both places it appears as an
icon (Hero social link, Contact card), plus the inline "🤗 Model" link label in
Projects. That emoji is their brand mark; replacing it makes the link less
recognisable, not more professional.

### Gradient restraint

Keep gradient-clipped text on the six section headings, where it reads as an
accent. Switch card titles to solid near-white. This is also a legibility fix —
gradient text at card-title size reduces effective contrast.

### Orphan skill card

Centre the seventh card on the last row on large screens with a CSS-only rule.
Content is not restructured.

## Verification

Every criterion is measured, not eyeballed.

1. **Resume CTA above the fold** at 1920×1080 and 390×844, asserted in a real
   browser without scrolling. This is the point of Phase A.
2. **Production build green**, zero console errors, zero horizontal overflow on
   both viewports.
3. **No performance regression** — re-run the timer-lag probe used to diagnose
   the hero jank. Must stay at roughly 2.0–2.5s per 40 ticks of a 50ms
   interval, not drift toward the pre-fix 8.5s.
4. **Contrast** — compute WCAG ratios for every card title changed; each must
   clear 4.5:1. Report any current gradient that fails.
5. **JSON-LD parses** and contains the required `Person` fields.
6. **Zero emoji remaining** as icons, apart from the HuggingFace exception.
7. **Skip-link works** under keyboard focus; `/404` renders branded.

Before and after screenshots on both viewports accompany Phase B so the visual
change can be judged before it reaches `main`.

## Delivery

A new branch carrying two commits, Phase A then Phase B, so either phase can be
merged or reverted independently. Commits are authored as
`MOHD ABDUL OMER <mohammedabdulomer99@gmail.com>` with no agent attribution,
consistent with the existing history.

## Out of scope

Deliberately excluded, and why:

- **Project screenshots and case studies** — need assets the author is not
  producing in this pass. Noted as the single biggest remaining credibility
  win if that constraint ever changes.
- **A real contact-form backend** — the form still opens the visitor's mail
  client. Replacing it needs a third-party service and an API key.
- **Analytics** — needs an account.
- **Dead-link audit** — the live demo and certificate URLs remain unverified;
  the cloud sandbox blocks those hosts. This needs a manual check.
