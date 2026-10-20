/**
 * The one file to edit when you fork this portfolio.
 *
 * Everything here is identity: who the site is about and where to find them.
 * Page *content* - roles, projects, skills, highlights - lives in `src/data/`.
 * See README.md for the full list and what each file expects.
 */

export const portfolio = {
  /** Shown in the hero, page titles and social cards. */
  name: "Abdullah Taufiq",
  /** One line under the name. Keep it short - it is also the meta description. */
  tagline: "AI engineer building agents, retrieval pipelines, and knowledge systems.",
  /** Longer form, used for Open Graph and the social hover cards. */
  description:
    "AI engineer in Dubai working across multi-agent orchestration, persistent memory, RAG, knowledge graphs, and production APIs.",
  location: "Dubai, UAE",
  /** IANA zone for the live clock in the banner. */
  timeZone: "Asia/Dubai",
  /** UTC offset label shown on the social hover cards. */
  utcOffset: "UTC +04:00",

  /** Canonical origin. NEXT_PUBLIC_SITE_URL overrides this at build time. */
  url: "https://abdullah91111.github.io/portfolio",

  /**
   * Usernames only, never full URLs - the code builds the links and the stats
   * fetchers query these directly. Leave a value empty to hide that profile.
   */
  handles: {
    github: "abdullah91111",
    linkedin: "abdullah-taufiq-5975b4171",
    x: "",
    leetcode: "Abdullah91111",
    codeforces: "",
    codechef: "",
  },

  /**
   * Guestbook, backed by GitHub Discussions via giscus. Entries live as
   * comments in your repo, so no custom database is needed. Signing
   * requires a GitHub account. Get these from giscus.app after installing the
   * giscus app on the repo. Leave `repoId` empty to hide the guestbook.
   */
  giscus: {
    repo: "abdullah91111/portfolio" as `${string}/${string}`,
    repoId: "R_kgDOTYLsPw",
    category: "Announcements",
    discussionNumber: 2,
    discussionUrl: "https://github.com/abdullah91111/portfolio/discussions/2",
    categoryId: "DIC_kwDOTYLsP84DJKAY",
  },

  /** This site's own source, linked in the footer. Set to "" to hide the link. */
  repo: "https://github.com/abdullah91111/portfolio",

  email: "taufiq44@hotmail.com",
  /** Path under /public. Swap the file and this string together. */
  resume: "",
  /** "Book an intro call" button. Set to "" to hide it. */
  bookingLink: "",

  /**
   * Search Console verification. Paste the `content` value from Google's
   * "HTML tag" method here - just the token, not the whole <meta> tag. Left
   * empty, no verification tag is emitted.
   */
  googleSiteVerification: "",

  /**
   * Toggle optional sections off without deleting their code. The components
   * and routes stay in place, so flipping one back to true is the whole job.
   */
  sections: {
    /** Off until the first post is written - an empty list reads as neglect. */
    blog: false,
    anime: false,
  },

  /**
   * Profile blurbs for the hover cards. GitHub's is replaced by the live bio
   * when the API answers; the other two are always read from here because
   * X and LinkedIn block unauthenticated requests.
   */
  bios: {
    github: "Agents, retrieval, persistent memory, and knowledge graphs",
    x: "AI Engineer | Agents, RAG, GraphRAG, and production AI systems",
    linkedin: "AI Engineer | Agents, RAG, GraphRAG, and production AI systems",
  },

  /**
   * X and LinkedIn give no public follower count, so there is nothing to fetch.
   * Put real numbers here to show them, or leave null to show no stat row.
   */
  followers: {
    x: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export type PortfolioConfig = typeof portfolio;
