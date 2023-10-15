import BadgeBackground from '../atoms/Badge/BadgeBackground';
import BadgeOval from '../atoms/Badge/BadgeOval';
import SpanCustom from '../atoms/spanCustom';
import styles from './Badge.module.scss';

const variants = {
  paid: {
    background: 'bgc-unknown-3__opacity',
    oval: 'bgc-unknown-3',
    span: 'body2 color-unknown-3 text-bold',
    displayValue: 'Paid'
  },
  pending: {
    background: 'bgc-unknown-4__opacity',
    oval: 'bgc-unknown-4',
    span: 'body2 color-unknown-4 text-bold',
    displayValue: 'Pending'
  },
  draft: {
    background: 'bgc-unknown-2__opacity',
    oval: 'bgc-unknown-2',
    span: 'body2 color-unknown-2 text-bold',
    displayValue: 'Draft'
  }
};

const Badge = (props) => {
  const variantItem = variants[props.status];

  return (
    <div className={styles.container}>
      <BadgeBackground className={`${variantItem.background} ${styles.subContainer}`}>
        <BadgeOval className={variantItem.oval} />
        <SpanCustom className={variantItem.span}>{variantItem.displayValue}</SpanCustom>
      </BadgeBackground>
    </div>
  );
};

export default Badge;
