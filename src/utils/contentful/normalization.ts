import { PROTOCOL } from '@/utils/consts'
import type { IdSection } from '@/components/sections/types'
import type { PgMain, PgMainSection } from '@/services/types'
import type {
  ButtonProps,
  FooterProps,
  HeadProps,
  IconProps,
  ImageProps,
  LinkProps,
  ModalProps,
  TextProps,
} from '@/components/types'
import type {
  ContentfulAtButton,
  ContentfulAtIcon,
  ContentfulAtImage,
  ContentfulAtLink,
  ContentfulAtText,
  ContentfulMlHead,
  ContentfulMlModal,
  ContentfulOrFooter,
  ContentfulOrSection,
  ContentfulPgMain,
} from '@/utils/contentful/types'

export function parsedText(input: string): Array<{ text: string; featured: boolean }> {
  const regex = /\*\*(?<bold>.*?)\*\*/g
  const parts = input.split(regex)

  return parts.map((text, index) => ({
    text,
    featured: index % 2 === 1,
  }))
}

export function normalizeAtButton({ fields }: ContentfulAtButton): ButtonProps {
  const { id, label, variant } = fields

  return {
    id,
    label,
    variant: variant as ButtonProps['variant'],
  }
}

export function normalizeAtIcon(atIcon?: ContentfulAtIcon): IconProps | undefined {
  if (atIcon === undefined) return atIcon

  const { name, style } = atIcon.fields

  return {
    name: name as IconProps['name'],
    style,
  }
}

export function normalizeAtImage(atImage?: ContentfulAtImage): ImageProps | undefined {
  if (atImage === undefined) return atImage

  const { alt, height, source, width } = atImage.fields
  const sourceUrl = source.fields.file.url

  return {
    alt,
    width,
    height,
    src: sourceUrl.startsWith('//') ? PROTOCOL + sourceUrl : sourceUrl,
  }
}

export function normalizeAtLink({ fields }: ContentfulAtLink): LinkProps {
  const { href, label, asButton = false, buttonVariant, external = false, featured = false, icon, image } = fields

  return {
    label,
    to: href,
    external,
    featured,
    btn: asButton,
    icon: normalizeAtIcon(icon),
    image: normalizeAtImage(image),
    btnVariant: buttonVariant as ButtonProps['variant'],
  }
}

export function normalizeAtText({ fields }: ContentfulAtText): TextProps {
  const { label, tag, featured = false, parse = false } = fields

  return {
    as: tag as TextProps['as'],
    featured,
    label,
    parse,
  }
}

export function normalizeMlHead({ fields }: ContentfulMlHead): HeadProps {
  const { description, lang, title, slug, themeColor } = fields

  return {
    description,
    lang: lang as HeadProps['lang'],
    title,
    slug,
    themeColor,
  }
}

export function normalizeMlModal(mlModal?: ContentfulMlModal): ModalProps | undefined {
  if (mlModal === undefined) return mlModal

  const { action, content, title } = mlModal.fields

  return {
    action: normalizeAtLink(action),
    content: normalizeAtText(content),
    title: normalizeAtText(title),
  }
}

export function normalizeOrFooter(orFooter?: ContentfulOrFooter): FooterProps | undefined {
  if (orFooter === undefined) return orFooter

  const { announcement, socials } = orFooter.fields

  return {
    announcement: normalizeMlModal(announcement),
    socials: socials?.map((social) => normalizeAtLink(social)) ?? [],
  }
}

export function normalizeOrSection({ fields }: ContentfulOrSection): PgMainSection {
  const { additional, description, featured, id, title } = fields

  return {
    id: id as IdSection,
    title: normalizeAtText(title),
    description: description?.map((text) => normalizeAtText(text)) ?? [],
    featuredItems: featured?.map((feat) => normalizeAtLink(feat)) ?? [],
    additional: additional as PgMainSection['additional'],
  } as PgMainSection
}

// eslint-disable-next-line complexity -- Necessary to map the object
export function normalizePgMain({ fields }: ContentfulPgMain): PgMain {
  return {
    head: normalizeMlHead(fields.head),
    title: normalizeAtText(fields.title),
    footer: normalizeOrFooter(fields.footer),
    asideImage: normalizeAtImage(fields.asideImage),
    socials: fields.socials?.map((social) => normalizeAtLink(social)) ?? [],
    actions: fields.actions?.map((action) => normalizeAtLink(action)) ?? [],
    description: fields.description?.map((text) => normalizeAtText(text)) ?? [],
    sections: fields.sections?.map((section) => normalizeOrSection(section)) ?? [],
    currentlyLearning: fields.currentlyLearning?.map((link) => normalizeAtLink(link)) ?? [],
  }
}
