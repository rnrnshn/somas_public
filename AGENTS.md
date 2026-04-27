# AGENTS.md

Best practices for working in `somas_public`, the public SOMAS landing page and marketing site.

## Project Context

- This is a TanStack Start + React public site for SOMAS.
- The main goal is to communicate the product clearly, load quickly, rank well in search, and convert visitors through strong calls to action.
- Treat this app as a public-facing website, not an internal dashboard.
- Prioritize trust, clarity, accessibility, performance, and SEO in every change.

## Package Manager

- Use `pnpm` for all package-manager commands.
- Use `pnpm dev`, `pnpm build`, `pnpm test`, and `pnpm dlx shadcn@latest add <component>`.
- Do not use `npm`, `yarn`, or `bun` unless explicitly requested by the user.

## File And Component Size

- Keep components at or below 250 lines of code.
- If a component approaches 250 lines, split it before adding more logic or markup.
- Prefer focused files such as `hero-section.tsx`, `features-section.tsx`, `seo.ts`, `site-header.tsx`, and `section-heading.tsx`.
- Route files should stay thin. Move page sections into `src/components` or feature-specific folders.
- Avoid large all-in-one landing page files.

## Section Architecture

- Build landing pages as composed sections.
- Each major visual block should be its own component.
- Suggested structure:
  - `src/components/layout/` for header, footer, navigation, and page shell.
  - `src/components/sections/` for hero, problem, solution, features, compliance, metrics, testimonials, FAQ, and CTA sections.
  - `src/components/ui/` for Shadcn or low-level reusable primitives.
  - `src/lib/` for copy helpers, metadata helpers, constants, and utilities.
- Keep copy data separate from complex markup when it improves readability.
- Do not create abstractions until there are at least two real uses or the file is becoming hard to read.

## Copy And Content

- Use clear, institutional language suitable for governments, NGOs, implementation partners, and social protection programs.
- Avoid vague SaaS hype, exaggerated claims, and generic startup phrasing.
- Preferred tone: professional, calm, direct, trustworthy, and operational.
- Keep bilingual content consistent between English and Portuguese when both are present.
- Do not invent certifications, customers, integrations, security claims, or impact numbers unless provided by the user or present in the repo.

## SEO Requirements

- Every public route must define meaningful metadata.
- Include a unique title and description for each route.
- Use semantic HTML: one `h1` per page, ordered headings, real `nav`, `main`, `section`, and `footer` elements.
- Add Open Graph and Twitter metadata for shareable pages.
- Use canonical URLs when the deployment domain is known.
- Add structured data only when it accurately represents visible content.
- Keep important marketing copy in server-rendered HTML where possible.
- Images must have useful `alt` text unless decorative.
- CTAs should use descriptive accessible labels, not only visual text.

## Performance Requirements

- Keep the landing page fast on mobile and low-bandwidth connections.
- Prefer static/server-rendered content over client-only rendering for marketing sections.
- Avoid unnecessary client state, effects, and runtime JavaScript.
- Do not add large animation, carousel, charting, or analytics libraries without a clear need.
- Use responsive images and avoid shipping oversized assets.
- Lazy-load non-critical media below the fold.
- Keep above-the-fold content lightweight and stable to protect LCP and CLS.
- Avoid layout shifts from images, fonts, banners, or dynamically inserted content.
- Prefer CSS transitions over JavaScript animation for simple interactions.

## Accessibility Requirements

- Build keyboard-accessible navigation and controls.
- Maintain visible focus states.
- Use accessible contrast, especially for muted text and CTA buttons.
- Do not rely on color alone to communicate state or meaning.
- Use descriptive link and button text.
- Make forms usable with labels, error messages, and autocomplete where relevant.
- Test responsive layouts for desktop and mobile widths.

## Styling And UI

- Use Tailwind CSS and existing Shadcn conventions.
- Prefer composition of Shadcn primitives before creating custom UI primitives.
- Preserve an institutional visual language: restrained color, clean spacing, subtle borders, readable typography.
- Avoid decorative gradients, heavy shadows, excessive animation, and generic AI-looking layouts.
- Keep layout responsive by default; design mobile, tablet, and desktop states intentionally.

## React And TanStack Practices

- Prefer simple server-friendly React components for static marketing content.
- Use TanStack Router file routes as routing boundaries, not as large page implementations.
- Use `Link` from `@tanstack/react-router` for internal navigation.
- Use TanStack Query only for real remote data needs, not static landing copy.
- Avoid `useEffect` for content that can be rendered directly.
- Do not add `useMemo` or `useCallback` by default; use them only when they solve a measured or obvious rendering issue.

## Assets

- Store public static assets in `public/` when they need stable URLs.
- Optimize images before adding them to the repo.
- Prefer SVG for simple logos and icons when appropriate.
- Do not add large videos or image sets without confirming they are needed.
- Ensure brand assets are named clearly and consistently.

## Verification

- After meaningful changes, run `pnpm build` from `somas_public`.
- Run `pnpm test` when changing tested logic or adding tests.
- Manually check the page at mobile and desktop sizes when changing layout.
- For SEO or metadata changes, inspect the rendered document head if feasible.

## Safety Rules

- Make the smallest change that solves the request.
- Do not rewrite the app structure unless the current structure blocks the task.
- Do not remove existing user work or unrelated files.
- Do not add secrets, API keys, tracking IDs, or production domains unless explicitly provided.
- If adding a third-party script, analytics tool, or tracking pixel, ask the user first.
