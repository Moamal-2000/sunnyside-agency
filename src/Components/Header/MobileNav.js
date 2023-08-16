import styles from "./MobileNav.module.scss";

const MobileNav = ({ mobileNavState }) => {
  const { isMobileNavActive, setIsMobileNavActive } = mobileNavState;

  return (
    <>
      <div
        className={`${styles.openNav} ${
          isMobileNavActive ? styles.active : ""
        }`}
        onClick={() => setIsMobileNavActive((prev) => !prev)}
      >
        <img
          src={require("../../images/icon-hamburger.svg").default}
          alt="open nav"
        />
      </div>

      <nav
        className={`${styles.nav} ${isMobileNavActive ? styles.active : ""}`}
      >
        <ul>
          <li>
            <a href="\#">About</a>
          </li>
          <li>
            <a href="\#">Services</a>
          </li>
          <li>
            <a href="\#">Project</a>
          </li>
          <li>
            <a className={styles.active} href="\#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
