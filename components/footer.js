import { meta } from "site.config";
import SocialLink from "./social-link";
import Email from "./email";
import { FiDribbble, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const links = [
    {
      ...meta.socials.github,
      icon: <FiGithub />,
    },
    {
      ...meta.socials.linkedin,
      icon: <FiLinkedin />,
    },
    {
      ...meta.socials.dribbble,
      icon: <FiDribbble />,
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
            <Email />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-4 mt-8 dark:bg-black">
        <div className="container-xl">
          <div className="flex flex-col items-center md:flex-row justify-between text-gray-600 text-sm dark:text-gray-300">
            <p className="">
              © {new Date().getFullYear()} &mdash; {meta.title}
            </p>
            <p>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white underline"
                onClick={() => onCreditsClick("Next.js")}
              >
                Next JS
              </a>{" "}
              &amp;{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
                className="text-black dark:text-white underline"
                onClick={() => onCreditsClick("Tailwind CSS")}
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
