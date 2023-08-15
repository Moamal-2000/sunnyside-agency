import ServiceComp from "../Shared/ServiceComp";
import ServiceCompTwo from "../Shared/ServiceCompTwo";
import styles from "./_Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.img}>
        <img
          className={styles.introductionImg}
          src={require("../../images/desktop/image-header.jpg")}
          alt="half orange with cyan background"
        />

        <div className={styles.content}>
          <h1>We are creatives</h1>
          <a href="#services">
            <img
              className={styles.arrowImg}
              src={require("../../images/icon-arrow-down.svg").default}
              alt="arrow down"
            />
          </a>
        </div>
      </div>

      <div className={styles.services} id="services">
        <div className={styles.serviceContainer}>
          <ServiceComp title="Transform your brand">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </ServiceComp>

          <div className={styles.servicerImg}>
            <img
              src={require("../../images/desktop/image-transform.jpg")}
              alt="yellow background and egg"
            />
          </div>
        </div>

        <div className={styles.serviceContainer}>
          <div className={styles.servicerImg}>
            <img
              src={require("../../images/desktop/image-stand-out.jpg")}
              alt="pink background with weird shape item"
            />
          </div>

          <ServiceComp title="Stand out to the right audience">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </ServiceComp>
        </div>

        <div className={styles.serviceContainer}>
          <ServiceCompTwo
            img={require("../../images/desktop/image-graphic-design.jpg")}
            title="Graphic design"
          >
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </ServiceCompTwo>

          <ServiceCompTwo
            img={require("../../images/desktop/image-photography.jpg")}
            title="Photography"
          >
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </ServiceCompTwo>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
