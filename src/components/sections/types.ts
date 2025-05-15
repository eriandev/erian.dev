import type { IconProps, ImageProps, LinkProps, TextProps } from '@/components/types'

export const enum IdSection {
  ABOUT_ME = 'about-me',
  MY_EXPERIENCE = 'my-experience',
  MY_EXPERIENCE_DETAILED = 'my-experience-detailed',
  PROJECTS_MADE = 'projects-made',
}

export interface SectionProps<T> {
  id: IdSection
  title: {
    props: TextProps
    parsed: Array<{ text: string; featured: boolean }>
  }
  description: Array<{
    props: TextProps
    parsed: Array<{ text: string; featured: boolean }>
  }>
  featuredItems?: Array<{
    link: LinkProps
    icon?: IconProps
    image?: ImageProps
  }>
  additional?: T
}

export type MyExperienceProps = SectionProps<
  | {
      identifier: IdSection.MY_EXPERIENCE
      data: Array<{
        year: number
        jobs: Array<{
          company: string
          position: string
          logo?: ImageProps
          description?: string
        }>
      }>
    }
  | {
      identifier: IdSection.MY_EXPERIENCE_DETAILED
      data: Array<{
        logo: ImageProps
        position: string
        company: string
        techs?: string[]
        period?: string
        description?: string[]
      }>
    }
>

export type AboutMeProps = SectionProps<{
  identifier: IdSection
  data: {
    techs: {
      rows: number
      label?: string
      spacing: number
      iconSize: number
      blockSize: number
      decorations?: Array<{
        label: string
        icon?: IconProps
        background?: string
      }>
    }
  }
}>
