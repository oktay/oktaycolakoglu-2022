import Navigation from "@comp/navigation";
import Email from "@comp/email";
import styles from "@styl/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container-xl">
        <div className="flex flex-col justify-between items-center md:flex-row">
          <Email />
          <Navigation />
        </div>
      </div>
    </header>
  );
}
