import styles from "./_ServiceComp.module.scss";

const ServiceComp = ({ title, children }) => {
  return (
    <div className={styles.service}>
      <div className={styles.content}>
      <h2>{title}</h2>
        <p>{children}</p>
        <button type="button">
          <a href="\#">Learn more</a>
        </button>
      </div>
    </div>
  );
};

export default ServiceComp;
