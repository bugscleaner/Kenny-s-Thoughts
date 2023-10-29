const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Kenny",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Development Engineer",
    bio: "I develop everything using Java.",
    email: "",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `Kenny's blog`,
      href: "https://github.com/bugscleaner",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Kenny's blog",
    description: "welcome to Kenny's blog!",
    theme: "light"
  },

  // CONFIG configration (required)
  link: "https://kenny-s-blog-udtk.vercel.app",
  since: 2021, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords : ["Blog", "Software", "Kenny", "Notion", "软件开发", "技术分享", "生活分享"]
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 86400, // revalidate time for [slug], index
}

module.exports = { CONFIG }
