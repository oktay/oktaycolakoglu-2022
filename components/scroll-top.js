import useScrollPosition from '@react-hook/window-scroll'
import { FiArrowUp } from 'react-icons/fi'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from './button'

export default function ScrollTop() {
  const [show, setShow] = useState(false)
  const scrollPosition = useScrollPosition()
  const t = useTranslations('Global')

  // Fix for hydration mismatch
  useEffect(() => {
    setShow(true)
  }, [])
  //

  return (
    <AnimatePresence>
      {scrollPosition > 200 && show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 transition"
        >
          <Button
            href="#"
            className="dark:bg-main-black dark:text-white dark:border-dark-gray bg-white border p-4 space-x-0 rounded-full"
            firstIcon={<FiArrowUp />}
            secondIcon={<FiArrowUp />}
          >
            <span className="sr-only">{t('scroll')}</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
