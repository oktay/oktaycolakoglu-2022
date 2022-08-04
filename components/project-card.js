import Image from 'next/image'

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  url,
  thumbnail,
}) {
  function onClick() {
    const analyticsData = {
      event: 'Click',
      action: 'Project Click',
      target: 'Project Card',
      label: title,
    }

    window.dataLayer.push(analyticsData)
  }
  return (
    <a
      key={id}
      className="block relative rounded-lg overflow-hidden"
      href={url}
      onClick={onClick}
      rel="noreferrer"
      target="_blank"
    >
      <div className="aspect-4/3 relative">
        <Image src={thumbnail.url} alt={title} layout="fill" />
      </div>
      <div className="absolute inset-0 flex flex-col p-8">
        <ul className="flex justify-end space-x-4">
          {tags.split(',').map((tag, index) => (
            <li
              key={index}
              className="bg-white border dark:border-0 dark:bg-black dark:text-white px-2 rounded-full"
            >
              <span className="text-zinc-400">#</span>
              {tag}
            </li>
          ))}
        </ul>
        <div className="bg-white border dark:border-0 dark:bg-black dark:text-white mt-auto p-6 rounded-lg">
          <strong>{title}</strong>
          <p className="text-zinc-600 dark:text-zinc-200">{description}</p>
        </div>
      </div>
    </a>
  )
}
