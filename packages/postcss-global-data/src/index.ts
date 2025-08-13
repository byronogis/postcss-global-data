import type { Config } from '@postcss-global-data/core'

export * from '@postcss-global-data/cli'
export * from '@postcss-global-data/core'

export function defineConfig(config: Config): Config {
  return config
}
