import type { IconProps, ImageProps, LinkProps, TextProps } from '@/components/types'

export type IdSection = 'about-me' | 'my-experience' | 'projects-made'

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

export type MyExperienceProps = SectionProps<{
  identifier: IdSection
  data: Array<{
    year: number
    jobs: Array<{
      title: string
      subtitle: string
      logo?: ImageProps
      description: string
    }>
  }>
}>

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
