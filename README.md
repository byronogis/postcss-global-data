# postcss-global-data

<!-- automd:badges name="@byronogis/postcss-global-data" license codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/@byronogis/postcss-global-data)](https://npmjs.com/package/@byronogis/postcss-global-data)
[![npm downloads](https://img.shields.io/npm/dm/@byronogis/postcss-global-data)](https://npm.chart.dev/@byronogis/postcss-global-data)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@byronogis/postcss-global-data)](https://bundlephobia.com/package/@byronogis/postcss-global-data)
[![install size](https://badgen.net/packagephobia/install/@byronogis/postcss-global-data)](https://packagephobia.com/result?p=@byronogis/postcss-global-data)
[![codecov](https://img.shields.io/codecov/c/gh/byronogis/postcss-global-data)](https://codecov.io/gh/byronogis/postcss-global-data)
[![license](https://img.shields.io/github/license/byronogis/postcss-global-data)](https://github.com/byronogis/postcss-global-data/blob/main/LICENSE)

<!-- /automd -->

[![JSDocs][jsdocs-src]][jsdocs-href]

Forked from [@csstools/postcss-global-data@3.0.0](https://github.com/csstools/postcss-plugins/tree/27b9126dc2f049aa20b02f7e3dbbb2c5c6c87f43/plugins/postcss-global-data), motivated by [this issue](https://github.com/csstools/postcss-plugins/issues/1657)

**Changes:**
- can also pass a object to the `files` element to control the behavior of the plugin

<!-- automd:file src="./packages/postcss-global-data/src/type.ts" code -->

```ts [type.ts]
export interface FileConfig {
  file: string
  /**
   * Whether to remove the inject CSS after processing.
   * @default true to respect original plugin `@csstools/postcss-global-data` behavior
   */
  remove?: boolean
  /**
   * Position to insert the CSS.
   * @default 'append' to respect original plugin `@csstools/postcss-global-data` behavior
   */
  position?: 'append' | 'prepend'
}
```

<!-- /automd -->

## Installation

<!-- automd:pm-install name="@byronogis/postcss-global-data" -->

```sh
# ✨ Auto-detect
npx nypm install @byronogis/postcss-global-data

# npm
npm install @byronogis/postcss-global-data

# yarn
yarn add @byronogis/postcss-global-data

# pnpm
pnpm install @byronogis/postcss-global-data

# bun
bun install @byronogis/postcss-global-data

# deno
deno install @byronogis/postcss-global-data
```

<!-- /automd -->

## Basic Usage

```ts
postcssGlobalData({
  files: [
    'path/to/file.css',
    // now you can also pass an object to control the behavior
    // of the plugin for each file
    {
      file: 'path/to/file.css',
      remove: false,
      position: 'prepend',
    }
  ],
})
```

<!-- automd:fetch url="gh:byronogis/.github/main/snippets/readme-contrib-node-pnpm.md" -->

## Contribution

<details>
  <summary>Local development</summary>

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run tests using `pnpm dev` or `pnpm test`

</details>

<!-- /automd -->

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/byronogis/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/byronogis/static/sponsors.svg'/>
  </a>
</p>

## License

<!-- automd:contributors author="byronogis" license="MIT" -->

Published under the [MIT](https://github.com/byronogis/postcss-global-data/blob/main/LICENSE) license.
Made by [@byronogis](https://github.com/byronogis) and [community](https://github.com/byronogis/postcss-global-data/graphs/contributors) 💛
<br><br>
<a href="https://github.com/byronogis/postcss-global-data/graphs/contributors">
<img src="https://contrib.rocks/image?repo=byronogis/postcss-global-data" />
</a>

<!-- /automd -->

<!-- automd:with-automd lastUpdate -->

---

_🤖 auto updated with [automd](https://automd.unjs.io) (last updated: Sat Aug 16 2025)_

<!-- /automd -->

<!-- Badges -->

[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@byronogis/postcss-global-data
