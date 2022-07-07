export default function CreditsLink({ href, label, icon }) {
  const analyticsData = {
    event: 'Click',
    action: 'Credits Click',
    target: 'Footer Credits',
    label: label,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-gray"
      title={label}
      onClick={() => window.dataLayer.push(analyticsData)}
    >
      <span className="sr-only">{label}</span>
      <span className="text-xl">{icon}</span>
    </a>
  );
}
