import Testimonial from "./Testimonial";
import styles from "./_Testimonials.module.scss";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Client Testimonials</h2>

      <div className={styles.testimonialsCards}>
        <Testimonial
          userImg={require("../../images/image-emily.jpg")}
          name="Emily R."
          work="Marketing Director"
        >
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </Testimonial>

        <Testimonial
          userImg={require("../../images/image-thomas.jpg")}
          name="Thomas S."
          work="Chief Operating Officer"
        >
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </Testimonial>

        <Testimonial
          userImg={require("../../images/image-jennie.jpg")}
          name="Jennie F."
          work="Business Owner"
        >
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </Testimonial>
      </div>
    </section>
  );
};

export default Testimonials;
