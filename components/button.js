import cx from 'classnames';

export default function Button({
  className,
  firstIcon,
  secondIcon,
  children,
  ...props
}) {
  return (
    <a
      className={cx(
        'group button inline-flex items-center space-x-6 overflow-hidden',
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        className={cx(
          'relative inline-flex',
          !firstIcon && !secondIcon && 'hidden',
        )}
      >
        <span
          className={cx(
            'text-2xl inline-flex transition',
            secondIcon && 'group-hover:-translate-y-12',
          )}
        >
          {firstIcon}
        </span>
        <span className="text-2xl absolute inset-0 translate-y-12 group-hover:translate-y-0 transition">
          {secondIcon}
        </span>
      </span>
    </a>
  );
}
