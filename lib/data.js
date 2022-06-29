import { meta } from 'site.config';
import dummyData from '@lib/dummy-data.json';

const isDev = process.env.NODE_ENV === 'development';

export const fetchShots = async (params) => {
  const url = new URL('https://api.dribbble.com/v2/user/shots');

  if (isDev) {
    return dummyData.shots;
  }

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );
  }

  url.searchParams.append('access_token', process.env.DRIBBBLE_TOKEN);

  const response = await fetch(url.href);

  if (response.status !== 200) {
    return [];
  }

  return await response.json();
};

export const fetchRepos = async (params) => {
  const url = new URL(
    `https://api.github.com/users/${meta.socials.github.username}/repos`,
  );

  if (isDev) {
    return dummyData.repos;
  }

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );
  }

  const response = await fetch(url.href, {
    headers: new Headers({
      Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
    }),
  });

  if (response.status !== 200) {
    return [];
  }

  return await response.json();
};
