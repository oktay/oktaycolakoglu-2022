export default function CreditsLink({ href, label, icon }) {
  const analyticsData = {
    event: 'Click',
    action: 'Credits Click',
    target: 'Footer Credits',
    label: label,
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-xs inline-flex items-center space-x-2 px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-gray"
      title={label}
      onClick={() => window.dataLayer.push(analyticsData)}
    >
      <span className="text-sm rounded-full">{icon}</span>
      <span>{label}</span>
    </a>
  )
}
