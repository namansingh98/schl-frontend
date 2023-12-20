import SectionHead from "./SectionHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import "./FAQ";
import FAQ from "./FAQ";
import styles from "./Faqs.module.css";

const FAQs = () => {
  return (
    <>
      <section className={styles.faqs}>
        <div className={`${styles.container} ${styles.faqs__container}`}>
          <SectionHead icon={<FaQuestion />} title="FAQs" />
          <div className={styles.faqs__wrapper}>
            {faqs.map(({ id, question, answer }) => {
              return <FAQ key={id} question={question} answer={answer} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
