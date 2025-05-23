import type { AboutMeProps, IdSection, MyExperienceProps } from '@/components/sections/types'
import type { FooterProps, HeadProps, ImageProps, LinkProps, TextProps } from '@/components/types'

export interface PgMain {
  head: HeadProps
  actions: LinkProps[]
  description: TextProps[]
  currentlyLearning: LinkProps[]
  socials: LinkProps[]
  asideImage?: ImageProps
  sections: PgMainSection[]
  footer?: FooterProps
}

export type PgMainSection =
  | PgMainContentSection<IdSection.ABOUT_ME, AboutMeProps['additional']>
  | PgMainContentSection<IdSection.MY_EXPERIENCE, MyExperienceProps['additional']>
  | PgMainContentSection<IdSection.MY_EXPERIENCE_DETAILED, MyExperienceProps['additional']>
  | PgMainContentSection<IdSection.PROJECTS_MADE, MyExperienceProps['additional']>

export interface PgMainContentSection<I extends IdSection, A = unknown> {
  id: I
  title: TextProps
  description: TextProps[]
  featuredItems: LinkProps[]
  additional?: A
}
