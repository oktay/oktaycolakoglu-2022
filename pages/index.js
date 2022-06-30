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

export default function Home({ repos, shots, homepage, seo }) {
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
    <div>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{seo.fallbackSeo.title || meta.title}</title>
        <meta
          name="description"
          content={seo.fallbackSeo.description || meta.description}
        />
        <link rel="icon" href="/favicon.ico" />
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
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-F2S3FW3EV8"
        strategy="afterInteractive"
      />
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
          className="container flex flex-col justify-center min-h-screen py-16 md:py-28"
        >
          <div className="text-center space-y-8">
            <figure className="flex justify-center">
              <Avatar img="/memoji.png" />
            </figure>
            <h4 className="text-2xl sm:text-3xl font-semibold">
              {homepage.subtitle}
            </h4>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              {homepage.title}
            </h1>
            <p className="text-md sm:text-lg md:text-xl font-normal">
              {homepage.description}
            </p>
            <Button
              href="mailto:oktaycolakoglu@gmail.com"
              className="bg-black text-white dark:bg-white dark:text-black text-lg"
              onClick={onEmailClick}
              firstIcon={<FiMail />}
              secondIcon={<FiArrowUpRight />}
            >
              İletişime Geç
            </Button>
          </div>
        </section>

        <section id="github" className="container-2xl md:grid md:grid-cols-12">
          <div className="flex items-center md:block md:col-span-2">
            <figure>
              <BsGithub className="text-3xl md:text-5xl" />
              <span className="sr-only">Github</span>
            </figure>
            <p className="text-xl ml-4 md:ml-0 md:text-2xl md:mt-6">
              Github&rsquo;dan son hareketler
            </p>
          </div>
          <div className="col-span-12 col-start-4 mt-8 md:mt-0">
            <div className="flex overflow-scroll gap-6 sm:overflow-auto sm:grid sm:grid-cols-2 xl:grid-cols-3">
              {repos.slice(0, 6).map(RepoCard)}
            </div>
          </div>
        </section>

        <hr className="border-transparent my-8 md:my-16" />

        <section
          id="dribbble"
          className="container-2xl md:grid md:grid-cols-12"
        >
          <div className="flex items-center md:block md:col-span-2">
            <figure>
              <BsDribbble className="text-3xl md:text-5xl" />
              <span className="sr-only">Dribbble</span>
            </figure>
            <p className="text-xl ml-4 md:ml-0 md:text-2xl md:mt-6">
              En son dribbble&rsquo;a yolladıklarım
            </p>
          </div>
          <div className="col-span-12 col-start-4 mt-8 md:mt-0">
            <div className="flex overflow-scroll gap-6 md:overflow-auto md:grid md:grid-cols-2 xl:grid-cols-3">
              {shots.slice(0, 6).map(ShotCard)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
}

export async function getServerSideProps() {
  const repos = await fetchRepos({ sort: 'updated' });
  const shots = await fetchShots();
  const data = await request({
    query: `{
      homepage(locale: tr) {
        title
        subtitle
        description
        available
      }
      site: _site {
        globalSeo(locale: tr) {
          titleSuffix
          twitterAccount
          fallbackSeo {
            description
            title
          }
        }
      }
    }`,
  });

  return {
    props: {
      repos,
      shots,
      homepage: data.homepage,
      seo: data.site.globalSeo,
    },
  };
}
