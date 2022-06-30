import Navigation from '@comp/navigation';
import Email from '@comp/email';
import cx from 'classnames';
import useScrollPosition from '@react-hook/window-scroll';

export default function Header() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={cx(
        'bg-white dark:bg-black fixed w-full top-0 left-0 z-40 transition duration-300 hidden lg:block',
        scrollPosition > 100 ? 'py-4 shadow-sm' : 'py-8',
      )}
    >
      <div className="container-fluid">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <Email href="/">oktaycolakoglu@gmail.com</Email>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
