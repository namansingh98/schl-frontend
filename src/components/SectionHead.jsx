import styles from "./SectionHead.module.css";

const SectionHead = ({ icon, title, className }) => {
  return (
    <>
      <div className={`${styles.section__head} ${className}`}>
        <span>{icon}</span>
        <h4>{title}</h4>
      </div>
    </>
  );
};

export default SectionHead;
