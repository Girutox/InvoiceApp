import styles from "./heading3.module.scss";

const Heading3 = (props) => {
  return (
    <>
      <h3 className={`${styles.heading} ${props.className}`}>
        {props.children}
      </h3>
    </>
  );
};

export default Heading3;
