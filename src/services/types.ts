import type { IdSection, MyExperienceProps } from '@/components/sections/types'
import type { ButtonProps, IconProps, ImageProps, TextProps } from '@/components/types'

export interface PgMainContent {
  name: string
  slug?: string
  headTitle: string
  headLang: 'en' | 'es'
  headThemeColor: string
  headDescription: string
  actions?: PgMainAction[]
  description?: PgMainDescription[]
  currentlyLearning?: PgMainCurrentlyLearning[]
  socials: PgMainSocial[]
  asideImage: PgMainAsideImage
  sections?: PgMainSection[]
}

interface PgMainAction {
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
}

interface PgMainDescription {
  fields: {
    label: string
    featured: boolean
    tag: TextProps['as']
  }
}

interface PgMainCurrentlyLearning {
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
}

interface PgMainSocial {
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
}

interface PgMainAsideImage {
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
    title: string
    width: number
    height: number
  }
}

interface PgMainSection {
  fields: {
    id: IdSection
    title: {
      fields: {
        label: string
        featured: boolean
        tag: TextProps['as']
      }
    }
    description: Array<{
      fields: {
        label: string
        featured: boolean
        tag: TextProps['as']
      }
    }>
    featured: Array<{
      fields: {
        href: string
        label: string
        external: boolean
        featured: boolean
        asButton: boolean
        image: {
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
            title: string
            width: number
            height: number
          }
        }
      }
    }>
    additional: MyExperienceProps['additional']
  }
}
