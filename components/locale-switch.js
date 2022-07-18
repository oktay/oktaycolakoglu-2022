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
        <HiTranslate className="text-lg mr-2" />
        <span className="mr-auto uppercase lg:sr-only">{t('lang')}</span>
        <span
          className={cx(
            locale === 'tr'
              ? 'bg-black text-white group-hover:bg-transparent group-hover:text-black'
              : 'group-hover:bg-black group-hover:text-white',
            'rounded-full px-2 transition-all',
          )}
        >
          TR
        </span>
        <span
          className={cx(
            locale === 'en'
              ? 'bg-black text-white group-hover:bg-transparent group-hover:text-black'
              : 'group-hover:bg-black group-hover:text-white',
            'rounded-full px-2 transition-all',
          )}
        >
          EN
        </span>
      </a>
    </Link>
  );
}
