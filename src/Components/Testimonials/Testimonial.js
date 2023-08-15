import styles from "./_Testimonial.module.scss";

const Testimonial = ({ userImg, name, work, children }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.userImg}>
        <img src={userImg} alt="user" />
      </div>

      <p>{children}</p>

      <h3>{name}</h3>
      <span>{work}</span>
    </div>
  );
};

export default Testimonial;
