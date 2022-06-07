import Navigation from "@comp/navigation";
import styles from "@styl/header.module.css";
import Email from "./email";

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
