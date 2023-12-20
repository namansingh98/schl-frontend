import Header from "../../components/Header";
import HeaderImage from "../../images/aboutHeaderimg.jpg";
import StoryImage from "../../images/story.jpg";
import VisionImage from "../../images/vision.jpg";
import MissionImage from "../../images/mission.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        This is About of our Story and mission
      </Header>
      <section className={styles.about__story}>
        <div className={`${styles.container} ${styles.about__story_container}`}>
          <div className={styles.about__section_image}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={StoryImage}
              alt="Our Story Images"
            />
          </div>
          <div className={styles.about__section_content}>
            <h1>Our Story</h1>
            <p style={{ color: "wheat" }}>
              Ankur school is managed by{" "}
              <span style={{ fontWeight: "bold" }}>
                Chandra Bharti Shikshan Sansthan (CBSS) &nbsp;
              </span>
              a registered trust.we are engaged in promoting edudation .Human
              resource development social welfare and rular development
            </p>
            <p style={{ color: "wheat", fontWeight: "bold" }}>
              Ankur school believe that early foundation stages in a frame work
              for development and learning with care,a brighter and more
              equitable future for all. We believe that education is the
              cornerstone of human development and social progress, and our
              dedicated efforts are aimed at achieving the following objectives:
            </p>
            <p style={{ color: "wheat", fontWeight: "bold" }}>
              We recognize that education goes beyond textbooks and exams. Our
              mission extends to nurturing well-rounded individuals by promoting
              physical, mental, emotional, and social development. We strive to
              instill values, critical thinking, creativity, and life skills in
              our student
            </p>
          </div>
        </div>
      </section>
      <section className={styles.about__vision}>
        <div
          className={`${styles.container} ${styles.about__vision_container}`}
        >
          <div className={styles.about__section_content}>
            <h1>Our Vision</h1>
            <p style={{ color: "wheat", fontWeight: "bold" }}>
              Ankur school focus is learning through play and exploration.Our
              vision is to provide a range of leaning opportunites.
            </p>
            <p style={{ color: "wheat", fontWeight: "bold" }}>
              In our vision, education is not just a pathway to knowledge; it's
              the cornerstone of personal and societal growth. We are committed
              to providing a holistic and enriching educational experience that
              fosters intellectual, emotional, and social development.
            </p>
          </div>
          <div className={styles.about__section_image}>
            <img
              
              src={VisionImage}
              alt="Our Vision Images"
            />
          </div>
        </div>
      </section>

      <section className={styles.about__mission}>
        <div
          className={`${styles.container} ${styles.about__mission_container}`}
        >
          <div className={styles.about__section_image}>
            <img
              
              src={MissionImage}
              alt="Our Mission Images"
            />
          </div>
          <div className={styles.about__section_content}>
            <h1>Our Mission</h1>
            <p style={{ color: "wheat", fontWeight: "bold" }}>
              Our mission includes creating a safe, welcoming, and nurturing
              environment where students feel supported, valued, and encouraged
              to express themselves freely.{" "}
            </p>
            <p style={{ color: "wheat", fontWeight: "bold" }}>
              We aim to instill a love for learning in our students. Our mission
              is to inspire curiosity, critical thinking, and a thirst for
              knowledge that extends beyond the classroom and into every aspect
              of their lives
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
