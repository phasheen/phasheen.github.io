# DESIGN.md

Design system guidance for `phasheen.github.io`.

This follows the DESIGN.md idea from `VoltAgent/awesome-design-md`: a plain
Markdown design system that coding agents can read before changing UI. It is not
a second mockup page and it is not a template import.

## 1. Visual Theme & Atmosphere

The site is a personal research/developer homepage, not a company landing page.
The public identity is `phasheen`; do not put the real name in visible homepage
copy unless the user explicitly asks for it.

Target atmosphere:

- Geek-minimal with light structure.
- Text-first, calm, direct, and durable.
- Closer to a small researcher homepage or technical note index than to a SaaS
  homepage.
- Real content should carry the page: publications, project links, real viewer
  screenshots, real figures, and real model captures.
- A live model preview is allowed when it embeds a real deployed viewer and is
  presented as a work item, not as a marketing background.

Avoid:

- Marketing hero sections.
- Product-style feature grids.
- CTA-heavy button rows.
- Decorative gradients, fake diagrams, AI-generated images, stock photos, and
  placeholder model renders.
- Video-only model backgrounds when the user expects the real interactive viewer.
- Over-polished "startup personal brand" styling.

## 2. Color Palette & Roles

Use a near-monochrome palette.

| Token | Hex | Role |
| --- | --- | --- |
| `paper` | `#fafaf7` | Page background. Slightly warm, still mostly white. |
| `ink` | `#1a1a1a` | Primary text. |
| `muted` | `#666666` | Navigation and secondary text. |
| `line` | `#dddddd` | Section dividers only. |
| `link` | `#0033cc` | Default link color. Classic, readable, not branded. |
| `visited` | `#551a8b` | Browser-like visited link color. |

Rules:

- Do not add gradients.
- Do not add tinted card backgrounds.
- Do not use accent color as decoration.
- Links are the only strong color on the page.

## 3. Typography Rules

Use only system fonts:

```css
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
```

Type scale:

| Element | Size | Weight | Notes |
| --- | ---: | ---: | --- |
| Body | `17px` desktop, `16px` mobile | `400` | Line-height `1.6`. |
| H1 | `1.8rem` | `600` | Name only. No display typography. |
| H2 | `1.2rem` | `600` | Section titles. |
| Nav | `0.95rem` | `400` | Inline text links. |
| List text | body size | `400` | Use bold only for project/paper titles and own name. |

Rules:

- No imported fonts.
- No all-caps eyebrow labels.
- No giant display headline.
- No negative letter spacing.

## 4. Component Styling

Components should be plain HTML first.

### Navigation

- Inline text links at the top of `<main>`.
- Separator is `&middot;` in HTML.
- No sticky header.
- No logo box.

### Links

- Inline `<a>` elements.
- Underlined by default.
- Visible focus ring with `:focus-visible`.
- No "click here" link text.

### Work Entries

- Use a normal `<ul>`.
- Each item starts with `<b>Title</b> - summary`.
- Add an outbound link only when the destination exists.
- No cards, thumbnails, labels, category pills, or buttons on day one.

### Live Model Preview

- Use the deployed 3DGS page as an `<iframe>` source.
- The iframe should stay interactive by default. Do not add an extra
  interact/release button.
- Keep a normal text link to the full viewer nearby.
- Do not copy the full viewer stack into this GitHub Pages repo.
- Place live previews inside the relevant work item, after a text description.
- Do not place a glossy viewer above the identity text; it breaks the minimal
  tone of the page.
- Best long-term fix: add an `embed` mode to the deployed viewer that hides
  loading/help/camera overlays and uses a neutral background.

### Contact Icons

- Contact links should be small linked icons with accessible labels.
- Use inline SVG icons to avoid external icon dependencies.
- Keep icons monochrome and aligned with text color.
- Do not use plain email/GitHub label text in the contact section.

### Publications

Use this format:

```html
<li>
  <b>Paper title.</b>
  A. Author, <b>Author Name</b>, B. Author.
  <i>Venue Name</i>, Year.
  [<a href="...">paper</a>] [<a href="...">code</a>]
</li>
```

Rules:

- Bold the user's publication name in every publication entry if publications
  are added later.
- Reverse chronological order.
- Do not include placeholder links.

## 5. Layout Principles

- Single column.
- `max-width: 680px`.
- Centered page.
- Desktop page padding: `64px 20px`.
- Mobile page padding: `36px 18px`.
- Use `<hr>` between top-level sections.
- No nested sections, cards, sidebars, or split hero layouts.

Page order:

1. Inline nav.
2. Identity.
3. Work, with optional live preview inside a specific item.
4. Publications, only when real entries exist.
5. Contact.

## 6. Depth & Elevation

There is no elevation system.

Rules:

- No shadows.
- No glass effects.
- No floating panels.
- No rounded cards.
- Only use thin divider lines for structure.

## 7. Do's and Don'ts

Do:

- Keep copy factual and modest.
- Prefer real links over placeholders.
- Keep the page easy to edit by hand.
- Add real assets only when they clarify a project.
- Keep total page weight small.

Don't:

- Add a second HTML concept page.
- Add JavaScript for navigation, theming, search, or analytics.
- Add generated imagery.
- Add a template framework unless the publication/project volume grows.
- Add "coming soon" links or dead `#` links.

## 8. Responsive Behavior

- One column at every viewport.
- Minimum supported width: `320px`.
- Body text must remain readable without horizontal scrolling.
- Navigation may wrap naturally.
- Touch targets should remain easy to tap through normal line height and spacing.

## 9. Agent Prompt Guide

When modifying the homepage, follow this prompt:

> Build a plain personal research homepage for phasheen. Use one centered
> text column, system fonts, near-monochrome colors, inline links, thin section
> dividers, and no JavaScript. Do not create a marketing hero, cards, buttons,
> gradients, stock imagery, AI-generated imagery, or placeholder links. Use real
> project/publication content only.

If more content is added later:

- Add publications as list items.
- Add project links inline.
- Add real screenshots only when the user provides them.
- Keep all additions inside the single `index.html` page unless there is a real
  need for a separate project page.
