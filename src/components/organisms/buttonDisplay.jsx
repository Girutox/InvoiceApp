import SpanCustom from '../atoms/spanCustom';
import styles from './buttonDisplay.module.scss';

const ButtonDisplay = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <SpanCustom className="body2 color-secondary-3">{props.titleText}</SpanCustom>
      <div className={styles.subContainer}>{props.children}</div>
    </div>
  );
};

export default ButtonDisplay;
