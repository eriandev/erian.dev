import type { ButtonProps, IconProps, ImageProps, TextProps } from '@/components/types.ts'
import type { AboutMeProps, IdSection, MyExperienceProps } from '@/components/sections/types.ts'

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

export interface PgMainAction {
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

export interface PgMainDescription {
  fields: {
    label: string
    featured: boolean
    tag: TextProps['as']
  }
}

export interface PgMainCurrentlyLearning {
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

export interface PgMainSocial {
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

export interface PgMainAsideImage {
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

export type PgMainSection =
  | PgMainContentSection<IdSection.ABOUT_ME, AboutMeProps['additional']>
  | PgMainContentSection<IdSection.MY_EXPERIENCE, MyExperienceProps['additional']>
  | PgMainContentSection<IdSection.MY_EXPERIENCE_DETAILED, MyExperienceProps['additional']>
  | PgMainContentSection<IdSection.PROJECTS_MADE, MyExperienceProps['additional']>

export interface PgMainContentSection<I extends IdSection, A = unknown> {
  fields: {
    id: I
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
    additional: A
  }
}
