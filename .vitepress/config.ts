import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Rolldown',
  description:
    'Fast Rust-based bundler for JavaScript with Rollup-compatible API',

  lastUpdated: true,
  cleanUrls: true,

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/lightning-down.svg' }],
    ['meta', { name: 'theme-color', content: '#ff7e17' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Rolldown | Rust bundler for JavaScript' }],
    ['meta', { property: 'og:site_name', content: 'Rolldown' }],
    ['meta', { property: 'og:url', content: 'https://rolldown.rs/' }],
  ],

  themeConfig: {
    logo: { src: '/lightning-down.svg', width: 24, height: 24 },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about.md' },
      { text: '贡献', link: '/contrib-guide/' },
      {
        text: '路线图',
        link: 'https://github.com/rolldown-rs/rolldown/discussions/153',
      },
    ],

    sidebar: {
      '/contrib-guide/': [
        { text: 'Overview', link: '/contrib-guide/' },
        { text: 'Setup', link: '/contrib-guide/setup.md' },
        { text: 'Build', link: '/contrib-guide/build.md' },
        { text: 'Test', link: '/contrib-guide/test.md' },
        { text: 'Benchmark', link: '/contrib-guide/benchmark.md' },
        { text: 'Release', link: '/contrib-guide/release.md' },
      ],
    },

    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/rolldown_rs' },
      { icon: 'discord', link: 'https://discord.gg/vsZxvsfgC5' },
      { icon: 'github', link: 'https://github.com/rolldown-rs/rolldown' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Rolldown Team & Contributors',
    },
  },
})
