import styles from "./heading3.module.scss";

const Heading3 = (props) => {
  return (
    <>
      <h2 className={`${styles.heading} ${props.className}`}>
        {props.children}
      </h2>
    </>
  );
};

export default Heading3;
