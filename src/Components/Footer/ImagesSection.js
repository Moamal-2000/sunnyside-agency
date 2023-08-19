import styles from "./ImagesSection.module.scss";

const ImagesSection = () => {
  return (
    <div className={styles.imagesSection}>
      <div className={styles.img}>
        <img
          src={require("../../images/desktop/image-gallery-milkbottles.jpg")}
          alt="Milk bottles"
        />
      </div>

      <div className={styles.img}>
        <img
          src={require("../../images/desktop/image-gallery-orange.jpg")}
          alt=""
        />
      </div>

      <div className={styles.img}>
        <img
          src={require("../../images/desktop/image-gallery-cone.jpg")}
          alt=""
        />
      </div>

      <div className={styles.img}>
        <img
          src={require("../../images/desktop/image-gallery-sugarcubes.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImagesSection;
