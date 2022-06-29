import { meta } from 'site.config';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Navigation() {
  const links = [
    meta.socials.github,
    meta.socials.linkedin,
    meta.socials.dribbble,
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

  return (
    <nav>
      <ul className="flex space-x-10">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="inline-flex items-center space-x-4 font-medium"
              target="_blank"
              rel="noreferrer"
              onClick={() => onClick(label)}
            >
              <span>{label}</span>
              <FiArrowUpRight />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
