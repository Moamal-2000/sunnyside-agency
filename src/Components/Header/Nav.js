import styles from "./_Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
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
  );
};

export default Nav;
