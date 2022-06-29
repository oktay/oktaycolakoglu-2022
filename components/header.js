import Navigation from '@comp/navigation';
import Email from '@comp/email';

export default function Header() {
  return (
    <header className="py-8 absolute w-full top-0 left-0 hidden lg:block">
      <div className="container-fluid">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <Email />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
