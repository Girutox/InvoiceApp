import styles from './heading1.module.scss';

const Heading1 = (props) => {
  return (
    <>
      <h1 className={`${styles.heading} ${props.className}`}>{props.children}</h1>
    </>
  );
};

export default Heading1;
