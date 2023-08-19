import styles from "./_ServiceComp.module.scss";

const ServiceComp = ({ title, children, id }) => {
  console.log(id);
  return (
    <div className={styles.service}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{children}</p>
        <button type="button">
          <a
            className={`${styles.learnMore} ${id === "2" ? styles.second : ""}`}
            href="\#"
          >
            Learn more
          </a>
        </button>
      </div>
    </div>
  );
};

export default ServiceComp;
