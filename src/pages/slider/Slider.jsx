import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { SliderData } from "./Slider-Data";
import styles from "./Slider.module.css";

const slideLength = SliderData.length;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);

    const slideInterval = setInterval(() => {
      setCurrentSlide((p) => (p === slideLength - 1 ? 0 : p + 1));
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <>
      <div className={styles.slider}>
        <div
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => {
            setCurrentSlide(
              currentSlide === slideLength - 1 ? 0 : currentSlide + 1
            );
          }}
        >
          <AiOutlineArrowRight />
        </div>

        <div
          onClick={() => {
            setCurrentSlide(
              currentSlide === 0 ? slideLength - 1 : currentSlide - 1
            );
          }}
          className={`${styles.arrow} ${styles.prev}`}
        >
          <AiOutlineArrowLeft />
        </div>

        {SliderData.map((slide, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? `${styles.slide} ${styles.current}`
                  : `${styles.slide}`
              }
              key={index}
            >
              {index === currentSlide && (
                <div className="resize">
                  <img
                    style={{ width: "100%", height: "100vh" }}
                    src={slide.image}
                    alt="slide"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slider;
