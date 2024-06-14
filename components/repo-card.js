import { BsStar, BsEye, BsFileEarmarkCode } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function RepoCard({
  id,
  name,
  description,
  stargazers_count,
  watchers_count,
  language,
  html_url,
  fork,
  variants,
}) {
  function onClick() {
    const analyticsData = {
      event: 'Click',
      action: 'Repository Click',
      target: 'Github Section Repository Card',
      label: name,
    }

    window.dataLayer.push(analyticsData)
  }

  return (
    <motion.a
      href={html_url}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      variants={variants}
      className="relative group h-full w-3/4 sm:w-full flex-shrink-0 snap-start"
    >
      <div className="aspect-3/2">
        <div className="card flex flex-col h-full w-full p-4 md:p-6">
          <span className="font-semibold lg:text-lg flex items-center space-x-2">
            <span className="truncate">{name}</span>
            {fork && <span className="badge">FORK</span>}
          </span>
          <p className="text-sm mt-2 text-zinc-500">
            {description || 'No description'}
          </p>
          <div className="flex items-center mt-auto">
            <div className="text-sm inline-flex items-center gap-1 mr-4">
              <BsFileEarmarkCode />
              <span>{language || 'Mixed'}</span>
            </div>
            <div className="text-sm inline-flex items-center gap-1 mr-2">
              <BsStar />
              <span>{stargazers_count}</span>
            </div>
            <div className="text-sm inline-flex items-center gap-1 mr-2">
              <BsEye />
              <span>{watchers_count}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  )
}
