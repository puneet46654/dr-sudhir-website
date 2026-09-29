# Dr. Sudhir Srivastava — developer handoff

Latest published website source, including the Associations, Media and expanded innovation updates of 22 September 2026.

## Stack
Next.js 16.2.6 App Router, React 19.2.6, TypeScript 5.9, Tailwind CSS 4.2. Static export with local WebP photographs and a public PDF CV. No database, API key or environment variable is required for the portfolio.

## Start locally
Use Node.js 22.13 or newer compatible with the pinned package manager. Install pnpm 11.19.0 (the packageManager field in package.json is authoritative).

```sh
npm install --global pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev:next
```

Open the address printed by Next.js. Use `dev:next` for normal development; the default `dev` command is reserved for Sites preview integration.

## Production build
```sh
pnpm build
```
The complete static website is generated in `out/`. Serve it with a static server that resolves directory index.html files. Do not use `next start` for this static export. The existing `start` script targets a separate managed Worker workflow and is not the standalone portfolio preview command.

## Routes
- `/` — Home, including SSICRS preview
- `/journey/` — Journey and CV
- `/legacy/` — Surgery & Innovation
- `/associations/` — SS Innovations, international corporate journey and SSICRS
- `/academic/` — Ideas & Recognition
- `/media/` — photographic journey framework, professional gallery, blogs and enquiries
- `/gallery/` — backwards-compatible browser redirect to Media
- `/media/blog/[slug]/` — generated pages for approved published articles

## Content map
- `data/associations.ts`: institutional copy, SSICRS training layers, inaugural figures, faculty, specialties and public address.
- `data/innovations.ts`: innovation records, publication flags and internal verification notes. Only the public projection is passed to the interactive client component.
- `data/media.ts`: archival chapter definitions, photograph schema, blog categories, article records and reading-time calculation.
- `data/gallery.ts`: existing professional photographs and captions.
- `data/cv.ts`: career, timeline, corporate milestones, awards and programme records.
- `data/stories.ts`: telesurgery milestones.
- `data/academic.json`: academic archive.
- `app/globals.css`: established palette, typography and responsive layouts.
- `components/site-shell.tsx`: main navigation and footer.
- `public/images/`: current approved website imagery.
- `public/documents/Dr-Sudhir-Srivastava-CV.pdf`: existing public CV copy; not regenerated in this update.

## Publishing content
Archival photographs must include supplied captions, appropriate dimensions and explicit publication approval. Only approved entries render. Preserve original aspect ratios, and use approximateDate for circa dates. Do not expose the internal people field.

Blogs are intentionally empty. Add approved articles to blogArticles with unique slugs, ISO publication dates, an author, content paragraphs and status `published`; rebuild to generate article pages. Drafts are excluded from route generation and the public list. Reading time uses 200 words per minute. The unlinked `no-published-articles` sentinel satisfies static route generation when the archive is empty and renders not-found; it is not a sample article.

NADI and CardioSnap are grouped pending confirmation of their relationship. Product quantities, unverified technical claims and unapproved family/spiritual photographs remain withheld. See REVIEW-NOTES.md for the detailed review queue and missing images. The Journey timeline still ends in 2022, so no 2026 milestone was inserted there.

## Existing hosting
Production URL: https://sudhir-srivastava-professional-portfolio.ss-innovatio-5620.chatgpt.site

Keep this existing site and URL. `.openai/hosting.json` identifies the registered site; publishing to that URL requires authorized Sites access. The package contains no publishing credentials. Deploying the exported files elsewhere will not update the existing Sites URL. Retain the current audience/access settings.

The legacy Gallery redirect uses client location.replace plus an HTML refresh fallback because this project is a static export. JavaScript preserves query strings and fragment anchors; the fallback opens /media/. A future host migration can replace this with a server-level permanent redirect.

## Validation and scope
The published source passed TypeScript and the Next.js production build. Browser checks covered desktop navigation, 390 px mobile and 820 px tablet frames, menu Escape behavior, /gallery redirection, lightbox arrows/Escape, SSICRS tabs, innovation keyboard selection and blog empty-state filters. Exported internal targets and the CV PDF were checked. See VALIDATION.md.

Existing Sites preview, database and example scaffolding is retained to keep the repository portable back into its original environment; it is not required to add a database to this portfolio. Dependencies and the lockfile have not been pruned.

This archive excludes Git history, dependencies, build output, caches and runtime credentials. Install dependencies and rebuild locally. SOURCE-MANIFEST.json records the original source commit and SHA-256 for each included file. This README replaces the stale five-page README in the archive only; application code is unchanged from the published commit.
