import Link from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { HiTranslate } from 'react-icons/hi'
import { useTranslations } from 'next-intl'

export default function LocaleSwitch() {
  const { route, locale } = useRouter()
  const t = useTranslations('Global')

  return (
    <Link href={route} locale={locale === 'tr' ? 'en' : 'tr'}>
      <a className="rounded-full text-xs tracking-widest font-bold flex items-center group bg-white px-8 py-4 hover:bg-theme-50">
        <HiTranslate className="text-lg mr-2 lg:group-hover:text-theme-400 transition" />
        <span className="mr-auto uppercase lg:group-hover:text-theme-400">
          {t('lang')}
        </span>
        <span className="relative">
          <span
            className={cx(
              'relative px-2 z-10 transition',
              locale === 'tr'
                ? 'text-black dark:text-white'
                : 'text-white dark:text-black lg:group-hover:text-theme-400',
            )}
          >
            TR
          </span>
          <span
            className={cx(
              'relative px-2 z-10 transition',
              locale === 'en'
                ? 'text-black dark:text-white'
                : 'text-white dark:text-black lg:group-hover:text-theme-400',
            )}
          >
            EN
          </span>
          <span
            className={cx(
              'bg-theme-400 absolute w-1/2 h-full inset-0 rounded-full transition-all',
              locale === 'en' ? 'left-1/2' : 'left-0',
            )}
          ></span>
        </span>
      </a>
    </Link>
  )
}
