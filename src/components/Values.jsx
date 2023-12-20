import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../ui/Card";
import styles from "./Values.module.css";

const Values = () => {
  return (
    <>
      <section className={styles.values}>
        <div className={`${styles.container} ${styles.values__container}`}>
          <div className={styles.values__left}>
            <div className={styles.values__image}>
              <img src={Image} alt="Values Img" />
            </div>
          </div>
          <div className={styles.values__right}>
            <SectionHead icon={<GiCutDiamond />} title="Values" />
            <p>
              loremplacerat orci nulla pellentesque dignissim enim sit amet
              venenatis urna
            </p>
            <div className={styles.values__wrapper}>
              {values.map(({ id, icon, title, desc }) => {
                return (
                  <Card className={styles.values__value} key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
