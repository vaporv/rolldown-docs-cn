<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/Brooooooklyn.png',
    name: 'Yinan Long (Brooooooklyn)',
    links: [
      { icon: 'github', link: 'https://github.com/Brooooooklyn' },
      { icon: 'twitter', link: 'https://twitter.com/Brooooook_lyn' }
    ]
  },
  {
    avatar: 'https://www.github.com/hyf0.png',
    name: 'Yunfei He',
    links: [
      { icon: 'github', link: 'https://github.com/hyf0' },
      { icon: 'twitter', link: 'https://twitter.com/_hyf0' }
    ]
  },
  {
    avatar: 'https://www.github.com/underfin.png',
    name: 'Kui Li (underfin)',
    links: [
      { icon: 'github', link: 'https://github.com/underfin' }
    ]
  }
]
</script>

# 关于 Rolldown

## 摘要

Rolldown 是一个使用 Rust 编写的 JavaScript 打包工具，旨在未来作为 Vite 中使用的打包工具。它提供与 Rollup 兼容的 API 和 插件接口，但在适用范围上更接近 [esbuild](https://github.com/evanw/esbuild)。

:::warning 🚧 Work in Progress
Rolldown 正在积极开发中，尚不适用于生产环境。但现在我们已将其开源，以便能与社区贡献者们共同协作。
:::

## 为何要开发 Rolldown ？

Rolldown 旨在未来成为 [Vite](https://vitejs.dev/) 的底层打包工具。

目前， Vite 内部依赖两个打包工具:

- [esbuild](https://github.com/evanw/esbuild)，由 [Evan Wallace](https://github.com/evanw) 创立。Vite 将 esbuild 用于 [依赖预构建](https://cn.vitejs.dev/guide/dep-pre-bundling)、TypeScript / JSX 转换、target lowering 和 minification.

- [Rollup](https://github.com/rollup/rollup)，由 [Rich Harris](https://github.com/Rich-Harris) 创立，并由 [Lukas Taegert-Atkinson](https://github.com/lukastaegert) 维护。 Vite 将 Rollup 用于生产构建，并且支持与 Rollup 兼容的插件接口。

Vite **必须** 使用两个不同的打包工具，尽管二者都很棒, 但它们各自都缺少对方能提供的东西:

- esbuild 速度极快且功能丰富，但其输出，尤其是在块分割限制方面，对于捆绑应用程序来说并不理想。

- Rollup 是一个成熟的且经过实战测试的应用程序打包工具，但是与其他用编译成本地代码的语言编写的打包工具相比，其运行速度明显较慢。

使用两个不同的打包工具，多个方面看来都不是最好的选择：

- 输出产物的细微差别可能导致开发版本和生产版本之间的行为差异。

- 在生产构建过程中，用户的源码会被不同的工具反复解析、转换和序列化，这导致产生了许多本可以避免的额外开销。

理想情况下，我们希望 Vite 能够只使用单一打包工具，该工具可提供原生级的性能，且内置转换功能以避免解析和序列化的额外开销，又同时拥有与 Rollup 兼容的插件接口，以及适合大型应用程序的高级构建输出控制功能。

**这就是为什么我们开发 Rolldown 的原因。**

Rolldown 使用 [Rust](https://www.rust-lang.org/) 语言编写，在 [Oxc](https://oxc-project.github.io/) 的基础上构建， 目前主要利用了 Oxc 的 parser 和 resolver。我们还打算在 Oxc 的 transformer 和 minifier 可用后，也使用它们。

我们的长期目标是让当前 Vite 用户（直接或通过某个框架间接使用）能够尽可能顺滑的过渡到由 Rolldown 作为内部打包工具的 Vite 。

同时， Rolldown 也可作为独立的打包工具直接使用。

## Rollup 兼容性与差异

Rolldown 旨在尽可能与 Rollup 的 API 和插件接口保持一致，以简化采纳过程。 在简单用例中，它可能能够直接作为替代品使用。 然而，在一些边界情况下，尤其是涉及高级选项时，两者间可能存在细微差异。

我们最初计划将 JS 移植到 Rust ，但很快就意识到，为了获得最佳性能，我们必须优先考虑按照 Rust 的工作方式来编写代码。Rolldown 的内部架构更接近 esbuild ，而非 Rollup ，因此我们的代码拆分逻辑可能与 Rollup 有所不同。

此外，Rolldown 的适用范围也比 Rollup 更广，更接近于 esbuild 。 它内置了对CommonJS的支持， `node_modules` 解析， 并且未来还将支持 TypeScript / JSX 转换和压缩功能。

## 路线图

请查看 GitHub 讨论区上的 [路线图](https://github.com/rolldown-rs/rolldown/discussions/153) 。

## 加入我们！

Rolldown 仍处于早期阶段。我们还有很多工作要做，而要做到这一点，离不开社区贡献者的帮助。同时，我们也在积极寻找更多长期致力于用 Rust 改进 JavaScript 工具链的团队成员。

### 链接

- [GitHub](https://github.com/rolldown-rs/rolldown)
- [Contribution Guide](/contrib-guide/)
- [Discord Chat](https://discord.gg/vsZxvsfgC5)

### 团队

Rolldown 项目最初由 [Yinan Long](https://github.com/Brooooooklyn) (Brooooooklyn， [NAPI-RS](https://napi.rs/) 作者) 创立，现由 [Evan You](https://github.com/yyx990803) ( [Vite](https://vitejs.dev/) 创始人) 领导 。

<VPTeamMembers size="small" :members="members" />
