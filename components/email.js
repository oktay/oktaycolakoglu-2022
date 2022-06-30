import Link from 'next/link';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';

export default function Email({ href, children }) {
  return (
    <Link href={href}>
      <a className="group font-medium overflow-hidden inline-flex items-center space-x-6">
        <span className="inline-flex justify-center items-center relative text-2xl border rounded-full p-4 dark:border-dark-gray">
          <span className="inline-flex transform group-hover:-translate-y-12 transition">
            <FiMail />
          </span>
          <span className="absolute translate-y-12 group-hover:-translate-y-0 transition">
            <FiArrowUpRight />
          </span>
        </span>
        <span className="text-lg font-semibold">{children}</span>
      </a>
    </Link>
  );
}
