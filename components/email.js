import Link from "next/link";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { meta } from "site.config";

export default function Email() {
  return (
    <Link href="/">
      <a className="group font-medium overflow-hidden inline-flex items-center space-x-6">
        <span className="inline-flex justify-center items-center relative text-2xl border rounded-full p-4 dark:border-dark-gray">
          <span className="inline-flex transform group-hover:-translate-y-12 transition">
            <FiMail />
          </span>
          <span className="absolute translate-y-12 group-hover:-translate-y-0 transition">
            <FiArrowUpRight />
          </span>
        </span>
        <span className="text-lg font-semibold">{meta.email}</span>
      </a>
    </Link>
  );
}
