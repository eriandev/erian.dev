import type { ImgAttributes } from 'astro:assets'
import type { HTMLAttributes } from 'astro/types'
import type { IconName } from 'virtual:icon'

export interface ButtonProps extends HTMLAttributes<'button'> {
  id: string
  label: string
  variant?: 'primary' | 'secondary'
}

export interface ContainerProps extends HTMLAttributes<'div'> {
  as?: 'main' | 'header' | 'nav' | 'section' | 'article' | 'footer' | 'aside' | 'div'
  unlimited?: boolean
}

export interface Decoration {
  label: string
  icon?: IconProps
  background?: string
}

export interface FooterProps {
  announcement?: ModalProps
  socials: LinkProps[]
}

export interface GithubGraphProps {
  rows: number
  label?: string
  spacing: number
  iconSize: number
  blockSize: number
  decorations?: Decoration[]
  emptyBlockProbability?: number
  greenBlockProbability?: number
}

export interface HeadProps {
  lang: 'en' | 'es'
  slug?: string
  title: string
  description: string
  themeColor?: string
}

export interface IconProps extends HTMLAttributes<'svg'> {
  name: IconName
  size?: number
  style?: string
  width?: number
  height?: number
}

export interface ImageProps extends ImgAttributes {
  src: string
  alt: string
  width: number
  height: number
  lazy?: boolean
}

export interface JobCardProps {
  company: string
  position: string
  logo?: ImageProps
  description?: string
}

export interface JobCardDetailedProps {
  company: string
  position: string
  tags?: string[]
  period?: string
  logo?: ImageProps
  description?: string[]
}

export interface LinkProps extends Omit<HTMLAttributes<'a'>, 'href'> {
  to: string
  btn?: boolean
  external?: boolean
  featured?: boolean
  label?: string
  icon?: IconProps
  image?: ImageProps
  btnVariant?: ButtonProps['variant']
}

export interface ModalProps {
  title: TextProps
  content: TextProps
  action: LinkProps
}

export interface NavbarProps {
  class?: string
  sections?: Array<{ link: string; name: string }>
}

export interface TextProps extends HTMLAttributes<'p'> {
  label?: string
  parse?: boolean
  featured?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'span' | 'p'
}
