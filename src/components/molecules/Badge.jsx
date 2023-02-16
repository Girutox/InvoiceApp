import BadgeBackground from '../atoms/Badge/BadgeBackground';
import BadgeOval from '../atoms/Badge/BadgeOval';
import SpanCustom from '../atoms/spanCustom';
import styles from './Badge.module.scss';

const Badge = (props) => {
  return (
    <div className={styles.container}>
      <BadgeBackground className={`${props.classNameBackground} ${styles.subContainer}`}>
        <BadgeOval className={props.classNameOval} />
        <SpanCustom className={props.classNameText}>{props.text}</SpanCustom>
      </BadgeBackground>
    </div>
  );
};

export default Badge;
