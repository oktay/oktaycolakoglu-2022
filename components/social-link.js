export default function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex p-4 rounded-full hover:bg-gray-100 dark:hover:bg-dark-gray"
    >
      <span className="sr-only">{label}</span>
      <span className="text-2xl">{icon}</span>
    </a>
  );
}
