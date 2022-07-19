import Navigation from '@components/navigation';
import Email from '@components/email';
import { meta } from 'site.config';

export default function Header() {
  return (
    <div className="relative z-10">
      <header className="bg-white dark:bg-main-black h-32 flex items-center">
        <div className="container-fluid w-full">
          <div className="flex justify-between items-center">
            <Email href="/">{meta.email}</Email>
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  );
}
