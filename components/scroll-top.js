import cx from 'classnames';
import useScrollPosition from '@react-hook/window-scroll';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollTop() {
  const scrollPosition = useScrollPosition();

  return (
    <button
      className={cx(
        'bg-white hover:bg-gray-100 active:bg-gray-50 text-zinc-800 shadow-md fixed bottom-8 right-8 text-xl p-4 rounded transition',
        scrollPosition < 200 && 'opacity-0 pointer-events-none',
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span className="sr-only">Scroll to top</span>
      <FiArrowUp />
    </button>
  );
}
