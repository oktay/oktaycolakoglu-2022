import Head from 'next/head';
import Footer from '@comp/footer';
import Header from '@comp/header';
import Avatar from '@comp/avatar';
import { meta } from 'site.config';
import { FiArrowDown, FiArrowUp, FiArrowUpRight, FiMail } from 'react-icons/fi';
import Script from 'next/script';
import RepoCard from '@comp/repo-card';
import { useState } from 'react';

export default function Home({ repos }) {
  const [repoCount, setRepoCount] = useState(6);

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
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LYP16CRBLX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', 'G-LYP16CRBLX');
        `}
      </Script>

      <Header />

      <main>
        <div className="container my-4 md:my-16">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Avatar img="/memoji.png" />
            </div>
            <h4 className="text-2xl md:text-3xl font-semibold ">
              Merhaba ben Oktay
            </h4>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Arayüz Geliştiricisi & Tasarım Meraklısı
            </h1>
            <p className="text-md md:text-xl font-normal">
              Tasarımlara hayat veriyor, işlevsel <strong>arayüzler</strong> ve{' '}
              <strong>uygulamalar</strong> yapıyorum.
            </p>
            <a
              href="mailto:oktaycolakoglu@gmail.com"
              className="group button bg-black text-white inline-flex items-center space-x-6 overflow-hidden dark:bg-white dark:text-black"
              onClick={() => onEmailClick()}
            >
              <span>İletişime Geç</span>
              <span className="relative inline-flex">
                <span className="text-2xl inline-flex group-hover:-translate-y-12 transition">
                  <FiMail />
                </span>
                <span className="text-2xl absolute inset-0 translate-y-12 group-hover:translate-y-0 transition">
                  <FiArrowUpRight />
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="container mt-24">
          <h2 className="text-4xl font-bold text-center">
            Latest repositories
          </h2>
        </div>
        <div className="container-xl my-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {repos.slice(0, repoCount).map((repo) => (
              <RepoCard key={repo.id} {...repo} />
            ))}
          </div>
          <button
            onClick={() => setRepoCount(repoCount === 6 ? repos.length : 6)}
            className="button mx-auto border flex items-center space-x-4 text-sm"
          >
            <span>{repoCount === 6 ? 'Show more' : 'Show less'}</span>
            {repoCount === 6 ? (
              <FiArrowDown className="text-lg" />
            ) : (
              <FiArrowUp className="text-lg" />
            )}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.github.com/users/oktay/repos?sort=updated_at'
  );
  const json = await res.json();

  return {
    props: {
      repos: json,
    },
  };
}
