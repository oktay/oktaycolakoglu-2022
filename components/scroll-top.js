import cx from 'classnames';
import useScrollPosition from '@react-hook/window-scroll';
import { FiArrowUp } from 'react-icons/fi';
import Button from './button';

export default function ScrollTop() {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={cx(
        'fixed bottom-8 right-8 transition',
        scrollPosition < 200 && 'opacity-0 pointer-events-none',
      )}
    >
      <Button
        href="#"
        className="dark:bg-main-black dark:text-white dark:border-dark-gray bg-white border p-4 space-x-0 rounded-full"
        firstIcon={<FiArrowUp />}
        secondIcon={<FiArrowUp />}
      >
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  );
}
