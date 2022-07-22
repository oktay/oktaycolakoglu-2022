export const homepageFragment = `
  fragment HomepageFragment on HomepageRecord {
    title
    subtitle
    description
    available
  }
`

export const siteFragment = `
  fragment SiteFragment on Site {
    globalSeo(locale: $locale) {
      titleSuffix
      twitterAccount
      fallbackSeo {
        description
        title
      }
    }
  }
`

export const projectFragment = `
  fragment ProjectFragment on ProjectRecord {
    id
    title
    description
    tags
    url
    thumbnail {
      url
    }
  }
`
