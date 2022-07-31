export default function handler(_req, res) {
  if (process.env.NODE_ENV === 'production') {
    res.status(404).send('Not found')
    return
  }

  res.status(200).json([
    {
      id: 1,
      name: 'example-repo',
      html_url: 'https://github.com/oktay/oktaycolakoglu-2022',
      description: 'Example repo description',
      fork: false,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
    },
    {
      id: 2,
      name: 'example-fork',
      html_url: 'https://github.com/oktay/oktaycolakoglu-2022',
      description: 'Example fork repo description',
      fork: true,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
    },
    {
      id: 3,
      name: 'example-repo',
      html_url: 'https://github.com/oktay/oktaycolakoglu-2022',
      description: 'Example repo description',
      fork: false,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
    },
  ])
}
