import styles from './BadgeBackground.module.scss';

const BadgeBackground = (props) => {
  return <div data-testid='badgeBackground' className={`${styles.container} ${props.className}`}>{props.children}</div>;
};

export default BadgeBackground;
