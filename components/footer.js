import { meta } from 'site.config';
import { BsDribbble, BsGithub, BsLinkedin } from 'react-icons/bs';
import SocialLink from '@comp/social-link';
import Email from '@comp/email';

export default function Footer() {
  const links = [
    {
      ...meta.socials.github,
      icon: <BsGithub />,
    },
    {
      ...meta.socials.linkedin,
      icon: <BsLinkedin />,
    },
    {
      ...meta.socials.dribbble,
      icon: <BsDribbble />,
    },
  ];

  function onCreditsClick(label) {
    const analyticsData = {
      event: 'Click',
      action: 'Credits Click',
      target: 'Footer Credits',
      label: label,
    };

    window.dataLayer.push(analyticsData);
  }

  return (
    <footer className="border-t pt-8 dark:border-t-dark-gray">
      <div className="container-xl">
        <div className="flex justify-between flex-col items-center space-y-4 md:space-y-0 md:flex-row">
          <ul className="flex space-x-2">
            {links.map(({ href, label, icon }) => (
              <li key={href}>
                <SocialLink href={href} label={label} icon={icon} />
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <Email href="mailto:oktaycolakoglu@gmail.com">
              oktaycolakoglu@gmail.com
            </Email>
          </div>
        </div>
      </div>
      <div className="py-4 mt-8">
        <div className="container-xl">
          <div className="flex flex-col items-center md:flex-row justify-between text-gray-600 text-sm dark:text-gray-300">
            <p className="flex-shrink-0">
              © {new Date().getFullYear()} &mdash; {meta.title}
            </p>
            <p className="text-center mt-4 md:mt-0 md:ml-8 md:text-right max-w-md">
              Bu proje{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white underline"
                onClick={() => onCreditsClick('Next.js')}
              >
                Next JS
              </a>{' '}
              ve{' '}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white underline"
                onClick={() => onCreditsClick('Tailwind CSS')}
              >
                Tailwind CSS
              </a>{' '}
              kullanılarak hazırlandı ve kaynak kodları{' '}
              <a
                href="https://github.com/oktay/oktaycolakoglu-2022"
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white underline"
                onClick={() => onCreditsClick('Source Code')}
              >
                Github
              </a>{' '}
              üzerinde paylaşıldı. CMS olarak{' '}
              <a
                href="https://www.datocms.com/"
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white underline"
                onClick={() => onCreditsClick('Dato CMS')}
              >
                Dato CMS
              </a>
              {' '}kullanıldı. Aktiviteler için{' '}
              <a
                href="https://docs.github.com/en/rest"
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white underline"
                onClick={() => onCreditsClick('Github API')}
              >
                Github API
              </a>{' '}
              ve{' '}
              <a
                href="https://developer.dribbble.com/"
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white underline"
                onClick={() => onCreditsClick('Dribbböe API')}
              >
                Dribbble API
              </a>{' '}
              kullanıldı.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
