interface ContentfulMetadata {
  tags: string[]
  concepts: string[]
}

interface ContentfulSys {
  space: {
    sys: {
      type: string
      linkType: string
      id: string
    }
  }
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: {
    sys: {
      id: string
      type: string
      linkType: string
    }
  }
  publishedVersion: number
  revision: number
  contentType?: {
    sys: {
      type: string
      linkType: string
      id: string
    }
  }
  locale: string
}

interface WithContentfulAggregations<T> {
  sys: ContentfulSys
  metadata: ContentfulMetadata
  fields: T
}

export type ContentfulAtButton = WithContentfulAggregations<{
  internal: string
  id: string
  label: string
  variant?: string
}>

export type ContentfulAtIcon = WithContentfulAggregations<{
  internal: string
  name: string
  style?: string
}>

export type ContentfulAtImage = WithContentfulAggregations<{
  internal: string
  source: WithContentfulAggregations<{
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
  }>
  alt: string
  width: number
  height: number
}>

export type ContentfulAtLink = WithContentfulAggregations<{
  internal: string
  href: string
  label: string
  asButton?: boolean
  external?: boolean
  featured?: boolean
  buttonVariant?: string
  image?: ContentfulAtImage
  icon?: ContentfulAtIcon
}>

export type ContentfulAtText = WithContentfulAggregations<{
  internal: string
  label: string
  tag: string
  featured?: boolean
  parse?: boolean
}>

export type ContentfulMlHead = WithContentfulAggregations<{
  internal: string
  lang: string
  slug?: string
  title: string
  description: string
  themeColor?: string
}>

export type ContentfulMlModal = WithContentfulAggregations<{
  internal: string
  title: ContentfulAtText
  content: ContentfulAtText
  action: ContentfulAtLink
}>

export type ContentfulOrFooter = WithContentfulAggregations<{
  internal: string
  announcement?: ContentfulMlModal
  socials?: ContentfulAtLink[]
}>

export type ContentfulOrSection = WithContentfulAggregations<{
  internal: string
  id: string
  title: ContentfulAtText
  description?: ContentfulAtText[]
  featured?: ContentfulAtLink[]
  additional: unknown
}>

export type ContentfulPgMain = WithContentfulAggregations<{
  internal: string
  head: ContentfulMlHead
  actions?: ContentfulAtLink[]
  description?: ContentfulAtText[]
  currentlyLearning?: ContentfulAtLink[]
  socials?: ContentfulAtLink[]
  asideImage?: ContentfulAtImage
  sections?: ContentfulOrSection[]
  footer?: ContentfulOrFooter
}>
