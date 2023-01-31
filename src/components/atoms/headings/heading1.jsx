import styles from "./heading1.module.scss";

const Heading1 = (props) => {
  return (
    <>
      <h1 className={`${styles.text} ${styles["text-primary"]}`}>
        {props.value}
      </h1>
    </>
  );
};

export default Heading1;
