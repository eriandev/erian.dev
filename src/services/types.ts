import type { IconName } from 'virtual:icon'

export interface PgMainContent {
  name: string
  headTitle: string
  headDescription: string
  headLang: 'en' | 'es'
  headThemeColor: string
  slug?: string
  actions?: Array<{
    fields: {
      name: string
      href: string
      label: string
      asButton: boolean
      external: boolean
      featured: boolean
    }
  }>
  description?: Array<{
    fields: {
      name: string
      label: string
      tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'span' | 'p'
      featured: boolean
    }
  }>
  currentlyLearning?: Array<{
    fields: {
      name: string
      href: string
      label: string
      asButton: boolean
      external: boolean
      featured: boolean
    }
  }>
  socials: Array<{
    fields: {
      name: string
      href: string
      label?: string
      iconName?: IconName
      asButton: boolean
      external: boolean
      featured: boolean
    }
  }>
  asideImage: {
    fields: {
      name: string
      source: {
        fields: {
          title: string
          description: string
          file: {
            url: string
            details: {
              size: number
              image: {
                width: number
                height: number
              }
            }
            fileName: string
            contentType: string
          }
        }
      }
      alt: string
      width: number
      height: number
    }
  }
}
