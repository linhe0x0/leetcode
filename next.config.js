const nextra = require('nextra')

const isProd = process.env.NODE_ENV === 'production'

const withNextra = nextra('nextra-theme-docs', './theme.config.js')

module.exports = withNextra({
  basePath: isProd ? '/leetcode' : '',
  assetPrefix: isProd ? '/leetcode/' : '',
  pageExtensions: ['mdx', 'md', 'jsx', 'page.js'],
})
