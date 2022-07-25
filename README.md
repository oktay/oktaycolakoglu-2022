# oktaycolakoglu-2022

My personal homepage with NextJS & Tailwind CSS

_(Next JS ve Tailwind CSS ile hazırlanan kişisel anasayfam)_

## Description

This project made with Next JS, uses Tailwind CSS for styling and Framer Motion for animations. It's a personal homepage for me. It's a simple project with only one page and it uses Dato CMS for content management, Github API for show Github activities, and Dribbble API for show last dribbble shots.

_(Kişisel anasayfam olan bu proje Next JS kullanılarak hazırlandı, stiller için Tailwind CSS kullanıldı. Tek sayfadan oluşan bu basit proje; içerik yönetimi için Dato CMS, Github aktiviteleri için Github API, Dribbble'da son paylaşımlarımı göstermek için de Dribbble API kullanıyor.)_

## Installation

You must provide all API keys and tokens to use this project. You can see the list in [.env.local.example](./.env.local.example) file.
You need create schemas and fields like in this project on Dato CMS, but instead of it you can remove all cms content and make all content hardcoded.

_(Projeyi ayağa kaldırabilmek için [.env.local.example](./.env.local.example) dosyasında bulunan tüm API key ve token'ları sağlamalısınız. CMS'ten beslenen içerik için DatoCMS üzerinde bu projedeki gibi şemalar ve alanlar oluşturmalısınız ancak bunun yerine CMS'ten beslenen içeriği komple silebilir ve bu kısımları elle girebilirsiniz.)_

```
cp .env.local.example .env.local
```

```
DRIBBBLE_TOKEN=XXXXXXXX
GITHUB_TOKEN=XXXXXXXXX
DATOCMS_TOKEN=XXXXXXXXXXX
```

> Note: When its in development mode it will show dummy data for dribbble and github to reduce requests. [See API Directories](./pages/api/) <br/>
> (_Gtihub ve Dribbble API isteklerini azaltmak için development modundayken dummy içerik gösterecektir [API Dizinlerini Görüntüleyin](./pages/api/)_)

### Start project

```
npm install
npm run dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

## Sources

- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Dato CMS](https://www.datocms.com/docs/next-js)
- [Github API](https://docs.github.com/en/rest)
- [Dribbble API](https://developer.dribbble.com/v2/)
- [Next-Intl](https://www.thisdot.co/blog/next-js-adding-localization-with-next-intl)
