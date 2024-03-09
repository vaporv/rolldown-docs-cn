---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Rolldown'
  text: '基于 Rust 的 JavaScript 快速打包工具'
  tagline: '与 Rollup 兼容的 API'
  image:
    src: /rolldown-round.svg
    alt: Rolldown
  actions:
    - theme: brand
      text: 为何选择 Rolldown ？
      link: /about
    - theme: alt
      text: 贡献
      link: /contrib-guide/

features:
  - title: Rust 的速度
    icon:
      src: /ferris.svg
  - title: 兼容 Rollup
    icon:
      src: /rollup.svg
      width: 32px
      height: 32px
  - title: 专为 Vite 设计
    icon:
      src: /vite.svg
      width: 32px
      height: 32px
---

:::warning Work in Progress
Rolldown 正在积极开发中，尚不适用于生产环境。 我们鼓励您了解 [我们开发它的原因](/about.md) 并欢迎社区贡献。 如果您有兴趣参与其中，请查看 [贡献指南](/contrib-guide/) 并加入我们的 [Discord](https://discord.gg/vsZxvsfgC5)!
:::

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(90deg, #FF5D13, #F0DB4F);
}
</style>
