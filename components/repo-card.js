import {
  BsStar,
  BsEye,
  // BsFileEarmarkCode,
  BsLink45Deg,
} from 'react-icons/bs';

export default function RepoCard({
  id,
  name,
  description,
  stargazers_count,
  watchers_count,
  // language,
  html_url,
  fork,
  homepage,
  topics,
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

  function onHomepageClick() {
    const analyticsData = {
      event: 'Click',
      action: 'Repository Homepage Click',
      target: 'Github Section Repository Card',
      label: homepage,
    };

    window.dataLayer.push(analyticsData);
  }
  return (
    <div
      key={id}
      className="relative group h-full w-3/4 sm:w-full flex-shrink-0"
    >
      <div className="aspect-3/2">
        <div className="card flex flex-col h-full w-full">
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            onClick={onClick}
            className="font-semibold lg:text-lg flex items-center space-x-2"
          >
            <span className="truncate">{name}</span>
            {fork && <span className="badge">FORK</span>}
          </a>
          <p className="text-sm mt-2 text-zinc-500 truncate">
            {description || 'No description'}
          </p>
          {topics.length > 0 && (
            <div className="hidden lg:flex flex-wrap gap-2 mt-4">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="badge text-xs bg-teal-100 text-teal-700 border-teal-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 mt-auto">
            {/* <div className="text-xs inline-flex items-center gap-1">
              <BsFileEarmarkCode />
              <span>{language || 'Mixed'}</span>
            </div> */}
            <div className="text-xs inline-flex items-center gap-1">
              <BsStar />
              <span>{stargazers_count}</span>
            </div>
            <div className="text-xs inline-flex items-center gap-1">
              <BsEye />
              <span>{watchers_count}</span>
            </div>
            {homepage && (
              <a
                href={homepage}
                onClick={onHomepageClick}
                target="_blank"
                rel="noreferrer"
                className="flex items-center ml-auto whitespace-nowrap text-ellipsis overflow-hidden"
              >
                <BsLink45Deg className="text-xl flex-shrink-0" />
                <span className="text-teal-600 font-semibold text-xs whitespace-nowrap text-ellipsis overflow-hidden">
                  {homepage}
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
