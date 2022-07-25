import cx from 'classnames'
import { useTranslations } from 'next-intl'

export default function Status({ isAvailable }) {
  const t = useTranslations('Global')

  return (
    <div
      className={cx(
        isAvailable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600',
        'badge border-0 inline-flex',
      )}
    >
      <span
        className={cx(
          isAvailable ? 'bg-green-600' : 'bg-red-600',
          'w-2 h-2 rounded-full',
        )}
      />
      <span className={cx(!isAvailable && 'line-through', 'hidden md:block')}>
        {t('opentowork')}
      </span>
    </div>
  )
}
