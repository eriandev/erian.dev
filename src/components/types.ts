import type { ImgAttributes } from 'astro:assets'
import type { HTMLAttributes } from 'astro/types'
import type { IconName } from 'virtual:icon'

export interface ButtonProps extends HTMLAttributes<'button'> {
  id: string
  styleType: 'primary' | 'secondary'
}

export interface ContainerProps extends HTMLAttributes<'div'> {
  as?: 'main' | 'header' | 'nav' | 'section' | 'article' | 'footer' | 'aside' | 'div'
  unlimited?: boolean
}

export interface IconProps extends HTMLAttributes<'svg'> {
  name: IconName
  size?: number
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

export interface LinkProps extends Omit<HTMLAttributes<'a'>, 'href'> {
  to: string
  btn?: boolean
  external?: boolean
  featured?: boolean
}

export interface NavbarProps {
  class?: string
  sections?: Array<{ link: string; name: string }>
}

export interface TextProps extends HTMLAttributes<'p'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'span' | 'p'
  featured?: boolean
}
