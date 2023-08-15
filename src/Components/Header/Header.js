import Nav from "./Nav";
import styles from "./_Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="\#" title="logo link">
        <img src={require("../../images/logo.svg").default} alt="Logo" />
      </a>

      <Nav />
    </header>
  );
};

export default Header;
