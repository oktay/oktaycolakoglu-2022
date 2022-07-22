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
`;
