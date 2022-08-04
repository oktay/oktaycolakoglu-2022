import cx from 'classnames'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'

export default function Button({
  className,
  firstIcon,
  secondIcon,
  children,
  ...props
}) {
  const [hover, setHover] = useState(false)

  return (
    <a
      className={cx(
        'group button inline-flex items-center space-x-6 overflow-hidden',
        className,
      )}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      <span>{children}</span>
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
          className="text-2xl"
        >
          {hover ? secondIcon : firstIcon}
        </motion.div>
      </AnimatePresence>
    </a>
  )
}
