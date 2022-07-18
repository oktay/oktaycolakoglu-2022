import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ShotCard({ id, title, images, html_url, tags }) {
  function onClick() {
    const analyticsData = {
      event: 'Click',
      action: 'Shot Click',
      target: 'Dribbble Section Shot Card',
      label: title,
    };

    window.dataLayer.push(analyticsData);
  }

  return (
    <div
      key={id}
      className="relative group h-full w-3/4 md:w-full flex-shrink-0 snap-start"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={images.two_x}
          alt={title}
          layout="fill"
          priority="low"
          className="trasnform transition duration-1000 group-hover:scale-125"
        />
      </div>
      <a
        href={html_url}
        onClick={onClick}
        target="_blank"
        rel="noreferrer"
        className="overlay bg-theme-400 bg-opacity-90 flex opacity-0 group-hover:opacity-100"
      >
        <div className="p-8 self-end">
          <div>
            <strong className="text-xl font-bold">{title}</strong>
            <p className="space-x-2 text-sm">
              {tags.map((tag) => `#${tag}`).join(', ')}
            </p>
          </div>
        </div>
        <FiArrowUpRight className="text-7xl absolute top-8 left-8" />
      </a>
    </div>
  );
}
