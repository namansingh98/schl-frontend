import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import styles from "./Faq.module.css";
const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <>
      <article
        className={styles.faq}
        onClick={() => setIsAnswerShowing((prev) => !prev)}
      >
        <div>
          <h4>{question}</h4>
          <button className={styles.faq__icon}>
            {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
      </article>
    </>
  );
};

export default FAQ;
