import styles from "@styl/navigation.module.css";
import { meta } from "site.config";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navigation() {
  const links = [
    meta.socials.github,
    meta.socials.linkedin,
    meta.socials.dribbble,
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={styles.navLink}
              target="_blank"
              rel="noreferrer"
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
