export default function handler(_req, res) {
  if (process.env.NODE_ENV === 'production') {
    res.status(404).send('Not found')
    return
  }

  res.status(200).json([
    {
      id: 1,
      images: {
        two_x: '/images/shot-1.jpg',
      },
      title: 'Example Shot',
      html_url: 'https://dribbble.com/oktaycolakoglu',
    },
    {
      id: 2,
      images: {
        two_x: '/images/shot-2.jpg',
      },
      title: 'Example Shot',
      html_url: 'https://dribbble.com/oktaycolakoglu',
    },
    {
      id: 3,
      images: {
        two_x: '/images/shot-3.jpg',
      },
      title: 'Example Shot',
      html_url: 'https://dribbble.com/oktaycolakoglu',
    },
  ])
}
