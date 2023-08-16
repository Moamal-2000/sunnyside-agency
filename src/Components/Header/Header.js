import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import styles from "./_Header.module.scss";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const mobileNavState = { isMobileNavActive, setIsMobileNavActive };

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="\#" title="logo link">
        <img src={require("../../images/logo.svg").default} alt="Logo" />
      </a>

      <Nav />
      <MobileNav mobileNavState={mobileNavState} />
    </header>
  );
};

export default Header;
