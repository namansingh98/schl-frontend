import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../ui/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import { useState } from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const [index, setIndex] = useState(4);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <>
      <section className={styles.testimonials}>
        <div
          className={`${styles.container} ${styles.testimonials__container}`}
        >
          <SectionHead
            icon={<ImQuotesLeft />}
            title="Testimonials"
            className={styles.testimonials__head}
          />
          <Card className={styles.testimonial}>
            <div className={styles.testimonial__avatar}>
              <img src={avatar} alt={name} />
            </div>
            <p className={styles.testimonial__quote}>{`${quote}`} </p>
            <h5>{name}</h5>
            <small className={styles.testimonal__title}>{job}</small>
          </Card>
          <div className={styles.testimonials__btn_container}>
            <button
              className={styles.testimonials__btn}
              onClick={prevTestimonialHandler}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              className={styles.testimonials__btn}
              onClick={nextTestimonialHandler}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
