import Header from "../../components/Header";
import HeaderImage from "../../images/galleryHeaderimg.jpg";
import styles from "./Gallery.module.css";
import { gallery } from "../../data";

const Gallery = () => {
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}></Header>
      <section className={styles.gallery}>
        <div className={`${styles.container} ${styles.gallery__container}`}>
          {gallery.map(({ id, image, alt }) => {
            return (
              <article key={id}>
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={image}
                  alt={alt}
                />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
