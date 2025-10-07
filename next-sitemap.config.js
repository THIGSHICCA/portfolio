/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // ✅ Use environment variable or fallback to your deployed site
  siteUrl: process.env.SITE_URL || 'https://yourdomain.com',

  // ✅ Generate both sitemap.xml and robots.txt
  generateRobotsTxt: true,

  // ❌ false disables index sitemap — recommended to keep it true
  generateIndexSitemap: true,

  // ✅ Better structured robots.txt options
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://yourdomain.com'}/sitemap.xml`,
    ],
  },
};
