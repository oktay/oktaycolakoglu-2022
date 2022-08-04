import Link from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { HiTranslate } from 'react-icons/hi'
import { useTranslations } from 'next-intl'
import { LayoutGroup, motion } from 'framer-motion'

export default function LocaleSwitch() {
  const { route, locale, locales } = useRouter()
  const t = useTranslations('Global')

  return (
    <Link href={route} locale={locale === 'tr' ? 'en' : 'tr'}>
      <a className="group flex items-center p-1 pl-2 rounded-full bg-white text-xs text-black hover:text-theme-400">
        <HiTranslate className="text-lg mr-2 lg:group-hover:text-theme-400 transition" />
        <span className="mr-auto uppercase lg:sr-only">{t('lang')}</span>
        <div className="flex font-bold">
          <LayoutGroup>
            {locales.map((l) => (
              <div key={l} className="relative px-3">
                {locale === l && (
                  <motion.span
                    layoutId="locale-switch"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 50,
                      mass: 2,
                    }}
                    className="absolute inset-0 bg-black rounded-full group-hover:bg-theme-400"
                  />
                )}
                <span
                  className={cx(
                    'relative uppercase',
                    l === locale && 'text-white',
                  )}
                >
                  {l}
                </span>
              </div>
            ))}
          </LayoutGroup>
        </div>
      </a>
    </Link>
  )
}
