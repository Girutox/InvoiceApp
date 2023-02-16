import styles from './heading4.module.scss';

const Heading4 = (props) => {
  return (
    <>
      <h4 className={`${styles.heading} ${props.className}`}>{props.children}</h4>
    </>
  );
};

export default Heading4;
