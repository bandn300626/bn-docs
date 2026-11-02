const scripts = require('./scripts');

// The deploy workflow passes the address GitHub Pages gives this repository
const url = process.env.SITE_URL || 'http://localhost:3000';
const baseUrl = process.env.BASE_PATH ? `${process.env.BASE_PATH.replace(/\/$/, '')}/` : '/';

module.exports = {
  title: 'B&N Docs',
  tagline: 'Documentation for B&N scripts',
  url,
  baseUrl,
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: { format: 'md', hooks: { onBrokenMarkdownLinks: 'throw' } },
  presets: [['classic', {
    docs: { routeBasePath: '/', sidebarPath: './sidebars.js' },
    blog: false,
    theme: { customCss: './src/css/custom.css' },
  }]],
  themes: [['@easyops-cn/docusaurus-search-local', { docsRouteBasePath: '/', indexBlog: false, indexPages: false, hashed: true }]],
  themeConfig: {
    colorMode: { defaultMode: 'dark', disableSwitch: true, respectPrefersColorScheme: false },
    navbar: {
      items: [
        { type: 'html', position: 'left', value: `<a class="bn-logo" href="${baseUrl}">B<span>&amp;</span>N <small>Docs</small></a>` },
        ...scripts.map((s) => ({ type: 'docSidebar', sidebarId: s.id, label: s.name, position: 'left' })),
      ],
    },
    footer: { copyright: 'B&N' },
  },
};
