import Navigation from '@comp/navigation';
import Email from '@comp/email';

export default function Header() {
  return (
    <div className="relative z-10">
      <header className="bg-white dark:bg-main-black h-32 flex items-center">
        <div className="container-fluid w-full">
          <div className="flex justify-between items-center">
            <Email href="/">oktaycolakoglu@gmail.com</Email>
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  );
}
