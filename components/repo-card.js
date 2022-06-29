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
      event: 'Click',
      action: 'Repository Click',
      target: 'Github Section Repository Card',
      label: name,
    };

    window.dataLayer.push(analyticsData);
  }
  return (
    <div
      key={id}
      className="relative group h-full w-3/4 sm:w-full flex-shrink-0"
    >
      <div className="aspect-3/2">
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
          className="card flex flex-col h-full w-full"
        >
          <div className="font-semibold text-lg flex items-center space-x-2">
            <span className="truncate">{name}</span>
            {fork && <span className="badge">FORK</span>}
          </div>
          <p className="text-sm mt-2 text-zinc-500 truncate">{description}</p>
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
      </div>
    </div>
  );
}
