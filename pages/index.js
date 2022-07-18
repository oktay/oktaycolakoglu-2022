import Head from 'next/head';
import Script from 'next/script';
import Footer from '@comp/footer';
import Header from '@comp/header';
import Avatar from '@comp/avatar';
import RepoCard from '@comp/repo-card';
import ShotCard from '@comp/shot-card';
import Button from '@comp/button';
import ScrollTop from '@comp/scroll-top';
import { fetchRepos, fetchShots, request } from '@lib/data';
import { meta } from 'site.config';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { BsDribbble, BsGithub } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

export default function Home({ repos, shots, homepage, seo }) {
  const t = useTranslations('Global')

  function onEmailClick() {
    const analyticsData = {
      event: 'Click',
      action: 'Email Click',
      target: 'Hero Email Button',
      label: 'Email',
    };

    window.dataLayer.push(analyticsData);
  }

  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{seo.fallbackSeo.title || meta.title}</title>
        <meta
          name="description"
          content={seo.fallbackSeo.description || meta.description}
        />
        <meta
          name="google-site-verification"
          content="PJVvsin3qa5Ny-g9ZEY2T_D5HmfkG1IftdDqq41TH_g"
        />
        <meta name="msapplication-TileColor" content="#2dd4bf" />
        <meta name="theme-color" content="#2dd4bf" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
        <link rel="manifest" href="/site.webmanifest?v=1" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#2dd4bf" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="canonical" href={meta.url} />

        {/* facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta
          property="og:title"
          content={seo.fallbackSeo.title || meta.title}
        />
        <meta
          property="og:description"
          content={seo.fallbackSeo.description || meta.description}
        />
        <meta property="og:image" content="/thumbnail.png" />

        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={meta.url} />
        <meta
          name="twitter:title"
          content={seo.fallbackSeo.title || meta.title}
        />
        <meta
          name="twitter:description"
          content={seo.fallbackSeo.description || meta.description}
        />
        <meta name="twitter:image" content="/thumbnail.png" />
      </Head>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'G-F2S3FW3EV8');
        `}
      </Script>
      <Script id="gtm" strategy="afterInteractive">
        {`
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-5NTV3P2');
        `}
      </Script>

      <Header />

      <main className="mb-32">
        <section
          id="hero"
          className="container-padding pt-16 pb-20 md:pt-20 md:pb-24"
        >
          <div className="container-xs flex flex-col items-center text-center">
            <figure className="mb-8">
              <Avatar img="/memoji.png" alt="Memoji" />
            </figure>
            <h4 className="text-3xl font-medium mb-8 tracking-custom">
              {homepage.subtitle}
            </h4>
            <h1 className="hero-title tracking-custom mb-12">
              {homepage.title}
            </h1>
            <p className="hero-desc text-lg mb-12 sm:text-2xl">
              {homepage.description}
            </p>
            <Button
              href={`mailto:${meta.email}`}
              className="bg-black text-white dark:bg-white dark:text-black text-sm font-bold"
              onClick={onEmailClick}
              firstIcon={<FiMail />}
              secondIcon={<FiArrowUpRight />}
            >
              {t('contact')}
            </Button>
          </div>
        </section>

        <section
          id="github"
          className="container-xl md:grid md:grid-cols-12 scroll-m-36"
        >
          <div className="flex items-center md:block md:col-span-2">
            <figure>
              <BsGithub className="text-3xl md:text-5xl" />
              <span className="sr-only">Github</span>
            </figure>
            <p className="text-xl ml-4 md:ml-0 md:text-2xl md:mt-6">
              {t('github')}
            </p>
          </div>
          <div className="col-span-12 col-start-4 mt-8 md:mt-0">
            <div className="flex overflow-scroll gap-6 snap-mandatory snap-x sm:overflow-auto sm:grid sm:grid-cols-2 xl:grid-cols-3">
              {repos.slice(0, 6).map(RepoCard)}
            </div>
          </div>
        </section>

        <hr className="border-transparent my-8 md:my-16" />

        <section
          id="dribbble"
          className="container-xl md:grid md:grid-cols-12 scroll-m-36"
        >
          <div className="flex items-center md:block md:col-span-2">
            <figure>
              <BsDribbble className="text-3xl md:text-5xl" />
              <span className="sr-only">Dribbble</span>
            </figure>
            <p className="text-xl ml-4 md:ml-0 md:text-2xl md:mt-6">
              {t('dribbble')}
            </p>
          </div>
          <div className="col-span-12 col-start-4 mt-8 md:mt-0">
            <div className="flex overflow-scroll gap-6 snap-mandatory snap-x md:overflow-auto md:grid md:grid-cols-2 xl:grid-cols-3">
              {shots.slice(0, 6).map(ShotCard)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const repos = await fetchRepos({ sort: 'updated' });
  const shots = await fetchShots();
  const data = await request({
    query: `query HomeQuery($locale: SiteLocale) {
      homepage(locale: $locale) {
        title
        subtitle
        description
        available
      }
      site: _site {
        globalSeo(locale: $locale) {
          titleSuffix
          twitterAccount
          fallbackSeo {
            description
            title
          }
        }
      }
    }`,
    variables: { locale },
  });

  return {
    props: {
      repos,
      shots,
      homepage: data.homepage,
      seo: data.site.globalSeo,
      messages: (await import(`../locales/${locale}.json`)).default,
    },
  };
}
