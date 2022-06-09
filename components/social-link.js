export default function SocialLink({ href, label, icon }) {
  const analyticsData = {
    event: `Click`, 
    action: 'Social Link Click',
    target: 'Footer Social Links',
    label: label,
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex p-4 rounded-full hover:bg-gray-100 dark:hover:bg-dark-gray"
      onClick={() => window.dataLayer.push(analyticsData)}
    >
      <span className="sr-only">{label}</span>
      <span className="text-2xl">{icon}</span>
    </a>
  );
}
