import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { useTranslations } from 'next-intl'
import cx from 'classnames'
import LocaleSwitch from './locale-switch'

export default function Navigation() {
  const [show, setShow] = useState(false)
  const t = useTranslations('Global')

  const links = [
    {
      href: '#hero',
      label: t('home'),
    },
    {
      href: '#github',
      label: 'Github',
    },
    {
      href: '#dribbble',
      label: 'Dribbble',
    },
    {
      href: '#projects',
      label: t('nav-projects'),
    },
  ]

  function onClick(label) {
    const analyticsData = {
      event: 'Click',
      action: 'Navigation Click',
      target: 'Main Navigation',
      label: label,
    }

    window.dataLayer.push(analyticsData)
  }

  function onMobileClick(label) {
    const analyticsData = {
      event: 'Click',
      action: 'MobileNavigation Click',
      target: 'Mobile Navigation',
      label: label,
    }

    window.dataLayer.push(analyticsData)
  }

  return (
    <nav>
      <button
        className={cx(
          !show && 'bg-white text-black',
          'button cursor-pointe text-xl p-4 border dark:border-zinc-600',
        )}
        onClick={() => setShow(!show)}
      >
        <FiMenu />
        <span className="sr-only md:not-sr-only text-sm">{t('menu')}</span>
      </button>
      <div
        className={cx(
          show
            ? 'translate-y-0'
            : 'opacity-0 -translate-y-8 pointer-events-none',
          'absolute top-28 right-0 -z-10 w-full container-padding transform origin-top transition',
        )}
      >
        <ul
          className={cx(
            'bg-white text-black flex flex-col ml-auto w-full md:w-64 rounded-lg overflow-hidden border dark:border-0',
          )}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="flex items-center justify-between px-8 py-4 border-y -mt-px relative hover:z-10 font-medium transition hover:border-theme-200 hover:bg-theme-50 hover:text-theme-600"
                onClick={() => onMobileClick(label)}
              >
                <span>{label}</span>
              </a>
            </li>
          ))}
          <li>
            <LocaleSwitch />
          </li>
        </ul>
      </div>
    </nav>
  )
}
