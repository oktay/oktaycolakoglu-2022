# oktaycolakoglu-2022

My personal homepage with NextJS & Tailwind CSS

## Description

This project made with Next JS, uses Tailwind CSS for styling. It's a personal homepage for me. It's a simple project with only one page and it uses Dato CMS for content management, Github API for show Github activities, and Dribbble API for show last dribbble shots.

## Installation

You must provide all API keys and tokens to use this project. You can see the list in [.env.local.example](./.env.local.example) file.
You need create schemas and fields like in this project on Dato CMS, but instead of it you can remove all cms content and make all content hardcoded.

```
DRIBBBLE_TOKEN=XXXXXXXX
GITHUB_TOKEN=XXXXXXXXX
DATOCMS_TOKEN=XXXXXXXXXXX
```

> Note: When its in development mode it will show dummy data for dribbble and github to reduce requests.

### Start project

```
npm install
npm run dev
```

## Authors

Contributors names and contact info

- [@oktay](https://github.com/oktay)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

## Sources

- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Dato CMS](https://www.datocms.com/docs/next-js)
- [Github API](https://docs.github.com/en/rest)
- [Dribbble API](https://developer.dribbble.com/v2/)
- [Next-Intl](https://www.thisdot.co/blog/next-js-adding-localization-with-next-intl)
