import { meta } from 'site.config';
import { BsDribbble, BsGithub, BsLinkedin } from 'react-icons/bs';
import {
  SiDatocms,
  SiDribbble,
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si';
import SocialLink from '@comp/social-link';
import Email from '@comp/email';
import CreditsLink from './credits-link';

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

  const credits = [
    {
      href: 'https://www.vercel.com/',
      label: 'Vercel',
      icon: <SiVercel />,
    },
    {
      href: 'https://nextjs.org',
      label: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      href: 'https://tailwindcss.com',
      label: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      href: 'https://www.datocms.com/',
      label: 'Dato CMS',
      icon: <SiDatocms />,
    },
    {
      href: 'https://docs.github.com/en/rest',
      label: 'Github API',
      icon: <SiGithub />,
    },
    {
      href: 'https://developer.dribbble.com/',
      label: 'Dribbble API',
      icon: <SiDribbble />,
    },
  ];

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
          <div className="flex flex-col items-center md:flex-row justify-between text-zinc-500 dark:text-zinc-300">
            <p className="flex-shrink-0 text-lg">
              &copy; {new Date().getFullYear()} &mdash; {meta.title}
            </p>
            <div className="flex flex-wrap justify-center space-x-4 mt-8 md:mt-0">
              {credits.map(({ href, label, icon }) => (
                <CreditsLink key={href} href={href} label={label} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
