import styles from './heading2.module.scss';

const Heading2 = (props) => {
  return (
    <>
      <h2 className={`${styles.heading} ${props.className}`}>{props.children}</h2>
    </>
  );
};

export default Heading2;
