import { Link } from "react-router-dom";
import styles from "./Notfound.module.css";

const Notfound = () => {
  return (
    <>
      <section>
        <div className={styles.notfound}>
          <div className={`${styles.container} ${styles.notfound__container}`}>
            <h2>Page Not Found :-( :( </h2>
            <Link to="/" className={`${styles.btn}`}>
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notfound;
