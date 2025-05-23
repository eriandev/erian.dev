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
  const regex = /\*\*(.*?)\*\*/g
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

export function normalizeAtIcon({ fields }: ContentfulAtIcon): IconProps {
  const { name } = fields

  return {
    name: name as IconProps['name'],
  }
}

export function normalizeAtImage({ fields }: ContentfulAtImage): ImageProps {
  const { alt, height, source, width } = fields
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
    to: href,
    btn: asButton,
    external,
    featured,
    label,
    btnVariant: buttonVariant as ButtonProps['variant'],
    icon: icon != null ? normalizeAtIcon(icon) : undefined,
    image: image != null ? normalizeAtImage(image) : undefined,
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

export function normalizeMlModal({ fields }: ContentfulMlModal): ModalProps {
  const { action, content, title } = fields

  return {
    action: normalizeAtLink(action),
    content: normalizeAtText(content),
    title: normalizeAtText(title),
  }
}

export function normalizeOrFooter({ fields }: ContentfulOrFooter): FooterProps {
  const { announcement, socials } = fields

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
  }
}

// eslint-disable-next-line complexity -- Necessary to map the object
export function normalizePgMain({ fields }: ContentfulPgMain): PgMain {
  const { head, actions, asideImage, currentlyLearning, description, footer, sections, socials } = fields

  return {
    head: normalizeMlHead(head),
    asideImage: asideImage != null ? normalizeAtImage(asideImage) : undefined,
    socials: socials?.map((social) => normalizeAtLink(social)) ?? [],
    actions: actions?.map((action) => normalizeAtLink(action)) ?? [],
    currentlyLearning: currentlyLearning?.map((link) => normalizeAtLink(link)) ?? [],
    description: description?.map((text) => normalizeAtText(text)) ?? [],
    sections: sections?.map((section) => normalizeOrSection(section)) ?? [],
    footer: footer != null ? normalizeOrFooter(footer) : undefined,
  }
}
