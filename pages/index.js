import Head from 'next/head';
import Script from 'next/script';
import Footer from '@comp/footer';
import Header from '@comp/header';
import Avatar from '@comp/avatar';
import RepoCard from '@comp/repo-card';
import ShotCard from '@comp/shot-card';
import Button from '@comp/button';
import { fetchRepos, fetchShots } from '@lib/data';
import { meta } from 'site.config';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { BsDribbble, BsGithub } from 'react-icons/bs';

export default function Home({ repos, shots }) {
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

        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={meta.url} />

        {/* facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />

        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
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
          className="container flex flex-col justify-center min-h-screen"
        >
          <div className="text-center space-y-8">
            <figure className="flex justify-center">
              <Avatar img="/memoji.png" />
            </figure>
            <h4 className="text-2xl sm:text-3xl font-semibold">
              Merhaba ben Oktay
            </h4>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              Arayüz Geliştiricisi &amp; Tasarım Meraklısı
            </h1>
            <p className="text-md sm:text-lg md:text-xl font-normal">
              Tasarımlara hayat veriyor, işlevsel <strong>arayüzler</strong> ve{' '}
              <strong>uygulamalar</strong> yapıyorum.
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
    </div>
  );
}

export async function getServerSideProps() {
  const repos = await fetchRepos({ sort: 'updated_at' });
  const shots = await fetchShots();

  return {
    props: {
      repos,
      shots,
    },
  };
}
