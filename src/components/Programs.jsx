import { AiFillCaretRight, AiFillCrown } from "react-icons/ai";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import { Link } from "react-router-dom";
import styles from "./Programs.module.css";

const Programs = () => {
  return (
    <>
      <section className={styles.programs}>
        <SectionHead icon={<AiFillCrown />} title="programs" />

        <div className={styles.wrapper}>
          {programs.map((ele, i) => {
            return (
              <article key={i} className={styles.card}>
                <span className={styles.cardIcon}>{ele.icon}</span>
                <h4>{ele.title}</h4>
                <span className={styles.cardInfo}>{ele.info}</span>
                <Link to={ele.path} className={styles.btn}>
                  Learn More <AiFillCaretRight />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Programs;
