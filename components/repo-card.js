import { BsStar, BsEye, BsFileEarmarkCode } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';

function Badge({ children }) {
  return (
    <div className="px-3 py-1 border text-xs rounded-full flex items-center space-x-2 bg-white font-semibold select-none">
      {children}
    </div>
  );
}

export default function RepoCard({
  name,
  description,
  stargazers_count,
  watchers_count,
  language,
  html_url,
}) {
  function onClick() {
    const analyticsData = {
      eventName: 'Click',
      action: 'Repository Click',
      target: 'Repository Card',
      label: name,
    };

    window.dataLayer.push(analyticsData);
  }
  return (
    <div className="bg-white text-zinc-900 p-8 h-56 rounded-xl flex flex-col transition border-b-8 border-transparent hover:border-teal-400">
      <a
        href={html_url}
        className="font-semibold text-lg flex items-center space-x-2"
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
      >
        <span>{name}</span>
        <FiArrowUpRight />
      </a>
      <p className="text-sm mt-2 text-zinc-500">{description}</p>
      <div className="flex space-x-2 mt-auto">
        <Badge>
          <BsFileEarmarkCode />
          <span>{language || 'Mixed'}</span>
        </Badge>
        <Badge>
          <BsStar />
          <span>{stargazers_count}</span>
        </Badge>
        <Badge>
          <BsEye />
          <span>{watchers_count}</span>
        </Badge>
      </div>
    </div>
  );
}
