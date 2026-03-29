const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "happysmile | Full Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://twitter.com/happysmile_type",
    github: "https://github.com/happysmile01/the-portfolio",
  },
  mailSupport: "happysmile.type@gmail.com",
};
