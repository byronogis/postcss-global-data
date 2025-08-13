import { describe, expect, it } from 'vitest'
import { defineConfig } from '.'

describe('postcss-global-data', () => {
  it('should define config', () => {
    const _config = {}
    const config = defineConfig(_config)

    expect(config).toBeDefined()
    expect(config).toEqual(_config)
  })
})
