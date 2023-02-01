import styles from './colorDisplayLabel.module.scss';

const ColorDisplayLabel = (props) => {
  return (
    <h3 className={`${styles.heading} ${props.className}`}>
      {props.children}
    </h3>
  );
};

export default ColorDisplayLabel;
