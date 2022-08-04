import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'

export default function Email({ href, children }) {
  const [hover, setHover] = useState(false)
  return (
    <Link href={href}>
      <a
        className="group font-medium overflow-hidden inline-flex items-center"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span className="text-2xl border rounded-full p-4 mr-6 dark:border-dark-gray">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={hover ? 2 : 0}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{
                y: '-200%',
                transition: {
                  duration: 0.1,
                },
              }}
            >
              {hover ? <FiArrowUpRight /> : <FiMail />}
            </motion.div>
          </AnimatePresence>
        </span>
        <span className="text-lg font-semibold">{children}</span>
      </a>
    </Link>
  )
}
