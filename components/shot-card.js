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
      className="relative group h-full w-3/4 md:w-full flex-shrink-0"
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
        className="flex items-end absolute inset-0 bg-black bg-opacity-40 opacity-0 transition group-hover:opacity-100"
      >
        <div className="p-8 flex items-center">
          <div>
            <h4 className="text-xl font-bold">{title}</h4>
            <ul className="space-x-2">
              {tags.map((tag, index) => (
                <li key={index} className="inline-block text-sm">
                  #{tag},
                </li>
              ))}
            </ul>
          </div>
        </div>
        <FiArrowUpRight className="text-7xl absolute top-8 left-8" />
      </a>
    </div>
  );
}
