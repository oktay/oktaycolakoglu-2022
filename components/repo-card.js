import { BsStar, BsEye, BsFileEarmarkCode } from 'react-icons/bs';

export default function RepoCard({
  id,
  name,
  description,
  stargazers_count,
  watchers_count,
  language,
  html_url,
  fork,
}) {
  function onClick() {
    const analyticsData = {
      eventName: 'Click',
      action: 'Repository Click',
      target: 'Github Section Repository Card',
      label: name,
    };

    window.dataLayer.push(analyticsData);
  }
  return (
    <a
      key={id}
      href={html_url}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className="text-zinc-900 p-8 h-56 rounded-xl flex flex-col transition border-b-8 border-transparent hover:border-teal-400 border-2 border-gray-100 dark:bg-white"
    >
      <div className="font-semibold text-lg flex items-center space-x-2">
        <span>{name}</span>
        {fork && (
          <span className="badge">
            FORK
          </span>
        )}
      </div>
      <p className="text-sm mt-2 text-zinc-500">{description}</p>
      <div className="flex space-x-2 mt-auto">
        <div className="badge bg-white">
          <BsFileEarmarkCode />
          <span>{language || 'Mixed'}</span>
        </div>
        <div className="badge bg-white">
          <BsStar />
          <span>{stargazers_count}</span>
        </div>
        <div className="badge bg-white">
          <BsEye />
          <span>{watchers_count}</span>
        </div>
      </div>
    </a>
  );
}
