import styles from './BadgeOval.module.scss';

const BadgeOval = (props) => {
  return <div className={`${styles.container} ${props.className}`}></div>;
};

export default BadgeOval;
