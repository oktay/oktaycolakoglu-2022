import Head from 'next/head';
import Script from 'next/script';
import Footer from '@comp/footer';
import Header from '@comp/header';
import Avatar from '@comp/avatar';
import RepoCard from '@comp/repo-card';
import ShotCard from '@comp/shot-card';
import Button from '@comp/button';
import { meta } from 'site.config';
import { fetchRepos, fetchShots } from '@lib/data';
import { FiArrowUpRight, FiDribbble, FiGithub, FiMail } from 'react-icons/fi';

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

  function onGithubClick() {
    const analyticsData = {
      event: 'Click',
      action: 'Show More Click',
      target: 'Github Section Button',
      label: 'Github',
    };

    window.dataLayer.push(analyticsData);
  }

  function onDribbbleClick() {
    const analyticsData = {
      event: 'Click',
      action: 'Show More Click',
      target: 'Dribbble Section Button',
      label: 'Dribbble',
    };

    window.dataLayer.push(analyticsData);
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
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

      <main>
        <div className="container flex flex-col justify-center min-h-screen">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Avatar img="/memoji.png" />
            </div>
            <h4 className="text-2xl md:text-3xl font-semibold">
              Merhaba ben Oktay
            </h4>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Arayüz Geliştiricisi & Tasarım Meraklısı
            </h1>
            <p className="text-md md:text-xl font-normal">
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
        </div>
        <div className="container-xl flex items-center justify-between">
          <h2 className="heading text-center">Dribbble son shotlar</h2>
          <Button
            href={meta.socials.dribbble.href}
            onClick={onDribbbleClick}
            target="_blank"
            rel="noreferrer"
            className="button border hidden md:flex"
            firstIcon={<FiDribbble />}
            secondIcon={<FiArrowUpRight />}
          >
            Daha Fazla Göster
          </Button>
        </div>

        <div className="mb-12 mt-8 container-fluid">
          <div className="flex overflow-scroll md:overflow-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shots.slice(0, 6).map(ShotCard)}
          </div>
          <div className="flex justify-center mt-8 md:hidden">
            <Button
              href={meta.socials.dribbble.href}
              onClick={onDribbbleClick}
              target="_blank"
              rel="noreferrer"
              className="button border"
              firstIcon={<FiDribbble />}
              secondIcon={<FiArrowUpRight />}
            >
              Daha Fazla Göster
            </Button>
          </div>
        </div>

        <div className="container-xl mt-24 flex items-center justify-between">
          <h2 className="heading">Github son projeler</h2>
          <Button
            href={meta.socials.github.href}
            onClick={onGithubClick}
            target="_blank"
            rel="noreferrer"
            className="button border hidden md:flex"
            firstIcon={<FiGithub />}
            secondIcon={<FiArrowUpRight />}
          >
            Daha Fazla Göster
          </Button>
        </div>

        <div className="mb-12 mt-8 container-fluid">
          <div className="flex overflow-scroll md:overflow-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {repos.slice(0, 8).map(RepoCard)}
          </div>
          <div className="flex justify-center mt-8 md:hidden">
            <Button
              href={meta.socials.github.href}
              onClick={onGithubClick}
              target="_blank"
              rel="noreferrer"
              className="button border"
              firstIcon={<FiGithub />}
              secondIcon={<FiArrowUpRight />}
            >
              Daha Fazla Göster
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const repos = await fetchRepos({ sort: 'updated_at' });
  const shots = await fetchShots();

  return {
    props: {
      repos,
      shots,
    },
  };
}
