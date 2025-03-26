import { join } from 'node:path'
import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import type { AstroIntegration, AstroIntegrationLogger } from 'astro'

export const iconTyping = (): AstroIntegration => ({
  name: 'icon-types',
  hooks: {
    'astro:config:done': ({ logger }) => {
      generateIconTypes(logger)
    },
  },
})

function generateIconTypes(logger: AstroIntegrationLogger): void {
  try {
    const iconsDir = join(process.cwd(), 'src/icons')
    const files = readdirSync(iconsDir)
    const svgFiles = files.filter((file) => file.endsWith('.svg'))
    const iconNames = svgFiles.map((file) => file.replace('.svg', ''))

    const typeDefinitions = `declare module 'virtual:icon' {
  export type IconName =
    | ${iconNames.map((name) => `'${name}'`).join('\n    | ')}
}
`

    const outputDir = join(process.cwd(), 'src')
    const outputFile = join(outputDir, 'icon.d.ts')

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true })
    }

    writeFileSync(outputFile, typeDefinitions)
    logger.info('Types generated')
  } catch (error) {
    logger.error('Failed to generate types: ' + (error as Error).message)
  }
}
