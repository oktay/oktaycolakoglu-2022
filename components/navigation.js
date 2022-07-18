import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import Button from '@comp/button';
import cx from 'classnames';
import LocaleSwitch from './locale-switch';

export default function Navigation() {
  const [show, setShow] = useState(false);
  const t = useTranslations('Global');

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
  ];

  function onClick(label) {
    const analyticsData = {
      event: 'Click',
      action: 'Navigation Click',
      target: 'Main Navigation',
      label: label,
    };

    window.dataLayer.push(analyticsData);
  }

  function onMobileClick(label) {
    const analyticsData = {
      event: 'Click',
      action: 'MobileNavigation Click',
      target: 'Mobile Navigation',
      label: label,
    };

    window.dataLayer.push(analyticsData);
  }

  return (
    <nav className="flex items-center">
      <Button
        className="text-xl p-4 border border-zinc-600 lg:hidden"
        onClick={() => setShow(!show)}
      >
        <span className="sr-only">Menu</span>
        <FiMenu />
      </Button>
      <ul className="space-x-16 hidden lg:flex">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="inline-flex items-center space-x-4 font-medium"
              onClick={() => onClick(label)}
            >
              <span>{label}</span>
            </a>
          </li>
        ))}
        <LocaleSwitch />
      </ul>
      <ul
        className={cx(
          show ? 'translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none',
          'bg-zinc-900 flex flex-col absolute top-32 left-0 -z-10 w-full transform origin-top transition lg:hidden',
        )}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="flex px-12 py-8"
              onClick={() => onMobileClick(label)}
            >
              <span>{label}</span>
            </a>
          </li>
        ))}
        <li className="bg-white px-12 py-4">
          <LocaleSwitch />
        </li>
      </ul>
    </nav>
  );
}
