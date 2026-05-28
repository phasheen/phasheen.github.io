# Design Direction

This site uses Academic Pages as the base template, with a minimal dark academic style.

## Decisions

- Public identity: use `phasheen` on the homepage and sidebar.
- Language: English is the default. Chinese is available through an instant in-page toggle; `/zh/` remains available as a direct Chinese entry point.
- Bio structure: compact academic intro inspired by Lixin Xu's Academic Pages site, but with only confirmed information.
- Project presentation: use curated project cards from structured data, inspired by the source repo's hand-built project/publication cards without copying its content.
- Real content only: no fake publications, fake CV entries, stock profile photos, or AI-generated project images.
- Projects stay separate: interactive viewers such as the 3DGS viewer and point-cloud viewer should live in their own repos or deployments, then be linked from this homepage.
- Tone: concise, technical, and research-oriented rather than corporate.
- Visuals: add real figures, real screenshots, or real model captures when they are ready.

## Structure

- `/` is the short personal homepage.
- `/projects/` lists external or separately maintained project pages.
- `/publications/` is ready for real publication entries.
