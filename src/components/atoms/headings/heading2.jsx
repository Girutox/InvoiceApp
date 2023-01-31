import styles from "./heading2.module.scss";

const Heading2 = (props) => {
  return (
    <>
      <h1 className={styles.heading2}>
        {props.children}
      </h1>
    </>
  );
};

export default Heading2;
