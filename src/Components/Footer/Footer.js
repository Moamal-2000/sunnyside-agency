import styles from "./_Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={require("../../images/footer-logo.svg").default} alt="" />
      </div>

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
        </ul>
      </nav>

      <nav className={styles.socialMedia}>
        <ul>
          <li>
            <a href="\#">
              <img
                src={require("../../images/icon-facebook.svg").default}
                alt="facebook link"
              />
            </a>
          </li>

          <li>
            <a href="\#">
              <img
                src={require("../../images/icon-instagram.svg").default}
                alt="instagram link"
              />
            </a>
          </li>

          <li>
            <a href="\#">
              <img
                src={require("../../images/icon-twitter.svg").default}
                alt="twitter link"
              />
            </a>
          </li>

          <li>
            <a href="\#">
              <img
                src={require("../../images/icon-pinterest.svg").default}
                alt="pinterest link"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
