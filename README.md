# Abdullah Taufiq — Portfolio

A Next.js static portfolio for **https://abdullah91111.github.io/portfolio/**.
Adapted from [Paras's MIT-licensed portfolio](https://github.com/Paras-ydv/portfolio), with Abdullah's own biography, projects, photograph, and profile data.

## Development and preview

Requires Node.js 22.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000/portfolio/`. To preview the actual static files served by GitHub Pages:

```sh
npm run typecheck
npm run lint
npm run build
npm run check-export
npm run preview
```

Open `http://localhost:3017/portfolio/`. `out/` is the deployment artifact; there is no production Node server. The original `index.html` and `assets/` remain as the previous design, but the workflow publishes only `out/`.

## Features

- Light/dark/system theme, command palette, animated banner, and pointer-reactive dot background.
- Original generated landscape artwork compressed to a 76 KB WebP. Prompt direction: a quiet illustrated alpine lake, blue mountains, wildflowers, and a small traveler; no franchise characters. Decorative canvas animation pauses offscreen and in hidden tabs, with reduced-motion support.
- GitHub contribution calendar and LeetCode statistics from the configured accounts. Snapshots include refresh dates. A failed upstream refresh keeps the previous snapshot; it never fills in made-up activity.
- Copy-email button with a visible fallback, plus a `mailto:` link to the visitor's configured email app. No contact-form backend or email credentials.
- Shared **page-view** badge supplied by [Hits](https://github.com/silentsoft/hits). No account or API key. This is approximate hit counting, not verified unique people. Browser blocking/caching and service availability can affect totals. Localhost previews do not increment the live counter.
- Live [giscus](https://giscus.app) guestbook backed by [Discussion #2](https://github.com/abdullah91111/portfolio/discussions/2). Comments are public immediately. Delete unwanted comments on GitHub; the widget reads the live discussion, with no separately cached copy in the portfolio.

## Guestbook activation

Discussions and the guestbook thread have been created. The owner must install the [giscus GitHub app](https://github.com/apps/giscus) and grant access to **only `abdullah91111/portfolio`**. The repository/category IDs and discussion number are already in `portfolio.config.ts`.

Until the app is installed, visitors can use the direct GitHub guestbook link. Widget sign-in, posting, and deletion propagation require verification after installation. No GitHub token belongs in browser code.

## GitHub Pages deployment

After the redesign is approved, change repository **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, then merge to `main` or run the **Build and deploy portfolio** workflow.

The workflow installs dependencies, refreshes public profile data, checks TypeScript/lint, builds the static site, validates its internal links/assets, and publishes `out/`. It also runs every six hours to refresh the statistics. GitHub may delay scheduled runs or disable schedules on inactive public repositories.

The default workflow `GITHUB_TOKEN` is used only during the build to read the GitHub contribution calendar. LeetCode's public GraphQL endpoint is not a guaranteed API, so the dated snapshot is a fallback. Scheduled builds do not change source commits.

To refresh snapshots locally, sign in to `gh` and run `npm run refresh-stats`. No credential is printed or saved by the refresh script.

## Editing content

- `portfolio.config.ts`: identity, email, profile handles, guestbook settings.
- `src/data/experienceData.ts`, `projectsData.ts`, `educationData.ts`, `skillsData.ts`: professional content.
- `public/`: optimized artwork, portrait, and project architecture illustrations.
- `.env.example`: optional base-path and canonical-URL overrides. Never put secrets in a `NEXT_PUBLIC_` variable.

The stack retains Next.js, React, TypeScript, Tailwind, shadcn/Radix components, Framer Motion, and next-themes from the reference. Unused animation modules are not imported into the homepage. The shadcn stylesheet is vendored from version 4.22.0 to avoid shipping the CLI dependency; see `SHADCN-LICENSE.md`. The original template's MIT notice is preserved in `LICENSE`.
