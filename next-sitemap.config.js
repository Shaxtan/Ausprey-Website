/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.auspreiot.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://www.auspreiot.com/sitemap.xml'],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*'],
}
