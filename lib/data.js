import { meta } from 'site.config'
import { GraphQLClient } from 'graphql-request'

const { NODE_ENV, GITHUB_TOKEN, DRIBBBLE_TOKEN, DATOCMS_TOKEN } = process.env

export const fetchShots = async (params) => {
  const url = new URL('https://api.dribbble.com/v2/user/shots')

  if (NODE_ENV === 'development') {
    const response = await fetch('http://localhost:3000/api/dribbble')
    const data = await response.json()

    return data.shots
  }

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    )
  }

  url.searchParams.append('access_token', DRIBBBLE_TOKEN)

  const response = await fetch(url.href)

  if (!response.ok) {
    return []
  }

  return await response.json()
}

export const fetchRepos = async (params) => {
  const url = new URL(
    `https://api.github.com/users/${meta.socials.github.username}/repos`,
  )

  if (NODE_ENV === 'development') {
    const response = await fetch('http://localhost:3000/api/github')
    const data = await response.json()

    return data.repos
  }

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    )
  }

  const response = await fetch(url.href, {
    headers: new Headers({
      Authorization: 'Bearer ' + GITHUB_TOKEN,
    }),
  })

  if (!response.ok) {
    return []
  }

  return await response.json()
}

export const request = ({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}) => {
  const headers = {
    authorization: `Bearer ${DATOCMS_TOKEN}`,
  }

  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true'
  }

  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true'
  }

  const client = new GraphQLClient('https://graphql.datocms.com', { headers })
  return client.request(query, variables)
}
