import Head from "next/head";
import Footer from "@comp/footer";
import Header from "@comp/header";
import Avatar from "@comp/avatar";
import { meta } from "site.config";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="container my-4 md:my-16">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Avatar />
            </div>
            <h4 className="text-2xl md:text-3xl font-semibold ">
              Merhaba ben Oktay
            </h4>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Arayüz Geliştiricisi & Tasarım Meraklısı
            </h1>
            <p className="text-md md:text-xl font-normal">
              Tasarımlara hayat veriyor, işlevsel <strong>arayüzler</strong> ve{" "}
              <strong>uygulamalar</strong> yapıyorum.
            </p>
            <a
              href="mailto:oktaycolakoglu@gmail.com"
              className="group button bg-black text-white inline-flex items-center space-x-6 overflow-hidden dark:bg-white dark:text-black"
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
      </main>

      <Footer />
    </div>
  );
}
