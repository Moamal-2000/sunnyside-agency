import styles from "./_ServiceCompTwo.module.scss";

const ServiceCompTwo = ({ img, title, children }) => {
  return (
    <div className={styles.service}>
      <img className={styles.backgroundImg} src={img} alt="service" />

      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ServiceCompTwo;
