import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { HiTranslate } from 'react-icons/hi';
import { useTranslations } from 'next-intl';

export default function LocaleSwitch() {
  const { route, locale } = useRouter();
  const t = useTranslations('Global');

  return (
    <Link href={route} locale={locale === 'tr' ? 'en' : 'tr'}>
      <a className="w-full bg-white text-black p-1 pl-2 rounded-full text-xs tracking-widest font-bold inline-flex items-center group">
        <HiTranslate className="text-lg mr-2 lg:group-hover:text-teal-400 transition" />
        <span className="mr-auto uppercase lg:sr-only">{t('lang')}</span>
        <span className="relative">
          <span
            className={cx(
              'relative px-2 z-10 transition',
              locale === 'tr'
                ? 'text-white'
                : 'text-black lg:group-hover:text-teal-400',
            )}
          >
            TR
          </span>
          <span
            className={cx(
              'relative px-2 z-10 transition',
              locale === 'en'
                ? 'text-white'
                : 'text-black lg:group-hover:text-teal-400',
            )}
          >
            EN
          </span>
          <span
            className={cx(
              'bg-teal-400 absolute w-1/2 h-full inset-0 rounded-full transition-all',
              locale === 'en' ? 'left-1/2' : 'left-0',
            )}
          ></span>
        </span>
      </a>
    </Link>
  );
}
