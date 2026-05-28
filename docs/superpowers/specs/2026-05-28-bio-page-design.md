# Bio page design — phasheen.github.io

**Date:** 2026-05-28
**Owner:** Xianghui Xin (phasheen)
**Status:** Approved, ready for implementation planning

## Context

The repository `phasheen.github.io` was reset on 2026-05-28 (commit `a27ac11`) to focus on the personal bio page only. Experimental viewers (three.js point-cloud viewer; planned 3DGS viewer) were moved out to separate locations and will be linked as outbound demos rather than hosted in this repo.

Before this spec, the repo contained:

- `DESIGN.md` — style direction notes with four candidate directions (A minimal academic / B project-first / C tool builder portfolio / D editorial). The recommendation was "start from B with restraint from A."
- `index.html` — a first-pass page already aligned with direction B, but using a polished-academic visual style (eyebrow labels, hero with CTA buttons, card-styled work items).
- `homepage-concepts.html` — removed; the repo should have one HTML page only.
- `main.css` — ~200-line stylesheet supporting the polished-academic look.

This spec supersedes the visual direction implied by the current `index.html` and `main.css` — see "Aesthetic" below.

## Goals

- Deliver a **stable front door** for `phasheen.github.io` — a personal homepage that introduces Xianghui Xin and points visitors to viewers, papers, and code hosted elsewhere.
- Use a **geek-minimal with light structure** aesthetic: stripped, text-first, real H1/H2 hierarchy, small inline nav, sans-serif body, near-monochrome palette. Reference flavor: `nullprogram.com`, `drewdevault.com`.
- Keep the build **dependency-free**: plain HTML and CSS, no JS, no build step, no CDN.
- Make it cheap to update: adding a new publication or project is editing one file.

## Non-goals

- Not building a publications database, a blog/news feed, or a CMS.
- Not adopting a Jekyll/Hugo/Astro template — volume does not justify the tooling (see "Stack decision").
- Not designing project detail pages on this repo. Viewers and demos live as separate deployments and are linked outbound.
- Not introducing JavaScript for any feature on the bio page (no dark mode toggle, no search, no analytics widget).
- Not adding Open Graph / Twitter card meta tags in this pass. Can be added later if needed.
- Not adding a portrait/headshot. Not required for the aesthetic.

## Stack decision

**Plain HTML + CSS**, served directly by GitHub Pages from the `main` branch root. No generator, no build step.

Rationale (from diagnostic Q&A on 2026-05-28):

- Expected publications in next ~12 months: **3–9**. Hand-written `<li>` entries are tractable.
- Expected internal project pages in next ~12 months: **1–3**. No need for shared layout machinery.
- Writing cadence: **occasional notes every few months**. Not enough volume to justify Markdown tooling.

al-folio / Academic Pages / Hugo would all be defensible choices if any of those three numbers grew. Migrating later is cheap; over-engineering now is not.

## Aesthetic

**Geek-minimal with light structure** — stripped, text-first, with real H1/H2 hierarchy and a small inline text nav. Explicitly NOT the polished-academic-personal look the current `index.html` is heading toward.

### Visual rules

- **Layout:** single column, `max-width: 680px`, centered, ~64px top/bottom padding. Line-height 1.6.
- **Typography:** system sans-serif stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`), 16–17px base. Headings same family, weight 600, modest size step-up (H1 ~1.8rem, H2 ~1.2rem). No display fonts. No `@font-face`. No Google Fonts.
- **Color:** near-monochrome. Dark ink (target `#1a1a1a` or similar) on warm paper (target `#fafaf7` or similar). One muted secondary text color (target `#666`). One accent color for links — default to classic blue `#0033cc`; can be swapped at implementation time for a muted green consistent with `DESIGN.md`'s palette. No gradients. No tinted card backgrounds.
- **Section separators:** one thin `<hr>` between each top-level section. No card backgrounds, no shadows, no rounded boxes.
- **Nav:** small inline text links at top of `<main>`, separated by `·`. No logo box, no sticky header.
- **Links:** inline text `<a>` everywhere. No `.button` styled CTAs.
- **Project entries:** `<li>` with bold title + one-line summary + inline outbound link. No kicker/category labels, no thumbnails on day one.

### Patterns to remove from the current build

These exist in the current `index.html`/`main.css` and should be deleted, not tweaked:

- `.hero` block with `.hero-content` and `.hero-actions`
- `.button.primary` / `.button.secondary`
- `.eyebrow` / `.section-label` kicker labels
- `.work-item` card grid with paragraph + kicker
- `.section` background-toned containers
- "Current focus" filler section

The new `main.css` is a fresh ~80-line stylesheet, not an edit of the current ~200-line one.

## Page structure

Single page `index.html`, sections in order top-to-bottom:

| # | Section | Purpose | Content |
|---|---|---|---|
| 1 | **Nav** (small) | Quick links | `github · scholar · email · cv` (inline text, no logo, no sticky bar) |
| 2 | **Identity** | Who you are | H1 name + 1–2 sentence intro paragraph. No eyebrow line. No CTA buttons. |
| 3 | **Work** | Selected work | H2 + `<ul>` of 3 project entries (`<b>title</b> — one-line summary, optional outbound link). Text-only on day one. |
| 4 | **Publications** | Hand-written list | H2 + `<ol>` of 3–9 entries in reverse chronological order. See entry format below. |
| 5 | **Contact** | Full link list | H2 + paragraph with email and inline links (github, scholar, cv pdf, etc.). No CTA buttons. |

### Publication entry format

Each `<li>`:

```html
<li>
  <b>Paper title.</b>
  A. Author, <b>X. Xin</b>, B. Author.
  <i>Venue Name</i>, Year.
  [<a href="…">paper</a>] [<a href="…">code</a>] [<a href="…">project</a>] [<a href="…">bibtex</a>]
</li>
```

Rules:

- Bold the user's own name (`<b>X. Xin</b>`) in every entry.
- Omit any link in the inline link row that does not exist. Do not publish "coming soon" or `#` placeholder links.
- Reverse chronological order (newest first).

### Sections explicitly NOT on the page

- No "Notes" / "Current focus" section (user dropped it on 2026-05-28 — site has nothing to say there yet).
- No "News" / dated entries feed.
- No headshot / portrait.
- No thumbnails per project (text-only; can be added later if a real screenshot warrants it).

## File and asset layout

```
phasheen.github.io/
├── index.html                # bio page (refined, geek-minimal)
├── main.css                  # fresh ~80-line stylesheet (rewrite, not tweak)
├── assets/                   # NEW directory, optional on day one
│   ├── work/                 # real project screenshots if/when added (WebP, ≤80 KB each)
│   └── cv/
│       └── xianghui-xin-cv.pdf  # when ready
├── DESIGN.md                 # private notes, not linked from index.html
├── README.md                 # repo readme
└── docs/superpowers/specs/   # this spec and future specs
```

**Asset rules** (carried forward from `DESIGN.md`):

- Real assets only: actual project screenshots, paper figures, capture photos, model renders, or measured data visuals.
- No AI-generated imagery. No stock photos. No decorative tech gradients.
- If a real asset does not exist yet for a project, the corresponding entry runs text-only — no placeholder image.
- WebP for thumbnails when added. Target ≤80 KB per thumbnail.

## Content sources

These are the content fields that the implementation phase needs the user to supply:

| Section | Field | Provided by | Status |
|---|---|---|---|
| Identity | Name, 1–2 sentence intro | User | To be drafted at implementation time |
| Work | 3 project entries: title, one-line summary, outbound URL | User | URLs to viewer deployments needed |
| Publications | 3–9 entries: title, authors, venue, year, link URLs | User | Needed at implementation time; list may start short |
| Contact | Email, GitHub URL, Scholar URL, optional CV PDF | User | Email is `phasheen@snu.ac.kr`; rest to be confirmed |

The implementation phase should NOT block on having all final content. Reasonable initial copy can be drafted from the existing `index.html` and adjusted with the user.

## Verification

Manual checks on every change to `index.html` or `main.css`:

1. Open `index.html` directly in Chrome and Firefox. No dev server needed (no JS, no build).
2. Resize the window to 320 / 768 / 1280 px. One-column layout must not break.
3. Click every link. No 404s, no broken anchors, no `#` placeholders.
4. View source: no commented-out code, no `lorem ipsum`, no `TODO` strings.
5. Pass the markup through `validator.w3.org` (or `vnu.jar` locally). Fix all errors before publishing.

One-time accessibility checks before initial ship:

- Heading order: one H1, then H2s, no skipped levels.
- All links have meaningful text (no "click here").
- Color contrast ≥ 4.5:1 on body text (trivial with the near-monochrome palette, but verify).
- Tab through the page; focus order is logical, focus rings are visible.

One-time performance check before initial ship:

- Total page weight < 50 KB without images, < 250 KB if any images are added.
- Lighthouse in Chrome DevTools: Performance ≥ 95, Accessibility ≥ 95.

### What is NOT set up

- No unit tests (nothing to unit-test on a static page).
- No CI pipeline (GitHub Pages serves the repo directly; nothing to build).
- No automated visual regression tests.
- No HTML/CSS linter in CI — the manual W3C validator step covers correctness for a single-page bio.

## Deployment

GitHub Pages, source = `main` branch root. Push to `main` → site updates within ~1 minute. No build step.

Custom domain is out of scope for this spec; current URL is `https://phasheen.github.io`.

## Decisions log (this spec)

| Decision | Value | Rationale |
|---|---|---|
| Stack | Plain HTML + CSS | Volume (3–9 pubs, 1–3 projects, occasional notes) does not justify a generator |
| Approach | Refine current `index.html` in place | 80% of structure already exists; work is content + visual rewrite |
| Aesthetic | Geek-minimal with light structure (nullprogram/drewdevault flavor) | User explicitly chose this over polished-academic, pure-terminal, or single-screen-card |
| Sections | Nav, Identity, Work, Publications, Contact | Notes section dropped (user: "nothing to say there yet") |
| Thumbnails | Text-only on day one | Real assets pending; placeholders are forbidden by `DESIGN.md` ground rules |
| OG/Twitter meta | Deferred | Not required for the bio to function; can add later |
| Verification | Manual checks + W3C validator step | Static page, no test infrastructure needed |
