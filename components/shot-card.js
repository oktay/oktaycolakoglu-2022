import Image from 'next/image';

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
      <div className="aspect-[4/3]">
        <Image
          src={images.two_x}
          alt={title}
          layout="fill"
          priority="low"
          className="rounded-lg"
        />
      </div>
      <a
        href={html_url}
        onClick={onClick}
        target="_blank"
        rel="noreferrer"
        className="opacity-0 group-hover:opacity-100 transition-all"
      >
        <div className="absolute inset-0 overlay rounded-lg text-white">
          <div className="w-full h-full p-8 flex flex-col justify-end">
            <strong className="text-xl font-bold truncate">{title}</strong>
          </div>
        </div>
      </a>
    </div>
  );
}
