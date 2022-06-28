import { meta } from 'site.config';

export const fetchShots = async (params) => {
  const url = new URL('https://api.dribbble.com/v2/user/shots');

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
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
    `https://api.github.com/users/${meta.socials.github.username}/repos`
  );

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  const response = await fetch(url.href);

  if (response.status !== 200) {
    return [];
  }

  return await response.json();
};
