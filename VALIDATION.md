# Validation

## September 2026 redesign

- Next.js production build, TypeScript checking and static export passed for all five routes.
- Public HTML checked for the source-document phrases criticised by the user; none remained in rendered copy.
- All rendered internal links and asset paths resolved, with one H1 per page and page-specific metadata.
- Desktop hero visually reviewed. Phone (390 px frame) and tablet (768 px frame) compositions visually reviewed using a temporary local QA harness, removed before the final build. Phone journey measured 375 px scroll/client width with no overflow (frame scrollbar accounts for the difference).
- Mobile navigation and education accordion exercised. Technology tab selection and keyboard arrow navigation exercised. June 2026 telesurgery panel verified.
- Academic archive opens on demand; search empty state, reset and Publications category filter passed (198 total entries; 13 publications).
- Gallery category filter, lightbox next control and left-arrow keyboard navigation exercised. No broken gallery images or desktop horizontal overflow found.
- CV PDF remains present (1,774,390 bytes), linked with the download attribute. The previously verified redacted PDF is unchanged.
- Reduced-motion CSS disables transitions and animations; reveal code checks the motion preference. Print styles expose force-mounted professional details. Operating-system preference changes and physical print output were not separately tested.
- Self-hosted, subset WOFF fonts total approximately 48 KB; licences included. No external font request is needed.
- All original factual-review items remain in REVIEW-NOTES.md, with approved research additions recorded separately.

## Original build checks (historical)

- Next.js production compilation, TypeScript checking and static export passed for all five routes.
- Exported internal links, cross-page anchors and image-file references checked; no missing targets found.
- Every page has one H1 and a page-specific title and description. Exported navigation marks the correct active route.
- Desktop browser inspected: home, journey/CV, academic archive and gallery.
- Academic category + year filtering, no-result state and filter reset exercised successfully.
- Gallery next-button and right-arrow navigation, Escape dismissal and category filtering exercised successfully. Focus return is explicitly implemented for the initiating photograph button.
- CV download anchor has a real local PDF target and the HTML download attribute. The PDF opens locally and retains all 24 pages. A browser download-event wait timed out; completion through the browser download manager was not independently confirmed.
- Private contact text was permanently redacted from the public PDF and its cover was rendered for visual inspection. Original uploaded CV remains untouched.
- Mobile and tablet layouts reviewed in the responsive CSS (including narrow-screen heading sizes, stacked columns, navigation, filters and gallery). The supported browser interface did not expose a viewport-resize control, so mobile device emulation was not visually verified.
- Reduced-motion and print styles included; print-dialog output was not separately rendered.
- External company and DOI links were supplied by the addendum; no additional personal information or external photography was introduced.

## 22 September 2026
- Production Next.js static export and TypeScript check passed.
- Browser: all six desktop navigation links rendered; mobile (390 px frame) and tablet (820 px frame) menus open and show all six items. Escape closes mobile navigation. No horizontal document overflow at either size.
- /gallery redirected to /media in browser.
- SSICRS training tabs changed content correctly.
- Gallery opens; ArrowRight advances to the next image; Escape closes. Blog category selection updates pressed state and preserves approved empty state.
- Exported HTML internal-link/asset audit: no missing targets. Public CV target exists and has a valid PDF header.
- Empty blog route uses an unlinked not-found sentinel for static export; no fabricated published content.
