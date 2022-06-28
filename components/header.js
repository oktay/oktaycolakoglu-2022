import Navigation from '@comp/navigation';
import Email from '@comp/email';
import styles from '@styl/header.module.css';
import cx from 'classnames';

export default function Header() {
  return (
    <header className={cx(styles.header, 'hidden lg:block')}>
      <div className="container-fluid">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <Email />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
