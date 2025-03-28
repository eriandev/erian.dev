import type { ButtonProps, IconProps, ImageProps, TextProps } from '@/components/types'

export interface PgMainContent {
  name: string
  slug?: string
  headTitle: string
  headLang: 'en' | 'es'
  headThemeColor: string
  headDescription: string
  actions?: Array<{
    fields: {
      href: string
      label: string
      asButton: boolean
      external: boolean
      featured: boolean
      image?: ImageProps
      icon?: {
        fields: Pick<IconProps, 'name'>
      }
      buttonType?: ButtonProps['styleType']
    }
  }>
  description?: Array<{
    fields: {
      label: string
      featured: boolean
      tag: TextProps['as']
    }
  }>
  currentlyLearning?: Array<{
    fields: {
      href: string
      label: string
      asButton: boolean
      external: boolean
      featured: boolean
      image?: ImageProps
      icon?: {
        fields: Pick<IconProps, 'name'>
      }
      buttonType?: ButtonProps['styleType']
    }
  }>
  socials: Array<{
    fields: {
      href: string
      label: string
      asButton: boolean
      external: boolean
      featured: boolean
      image?: ImageProps
      icon?: {
        fields: Pick<IconProps, 'name'>
      }
      buttonType?: ButtonProps['styleType']
    }
  }>
  asideImage: {
    fields: {
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
