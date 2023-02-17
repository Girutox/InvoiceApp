import PropsType from 'prop-types';

import SpanCustom from '../atoms/spanCustom';

import styles from './SpanTitleSubtitle.module.scss';

const SpanTitleSubtitle = ({ title, subtitle }) => {
  SpanTitleSubtitle.propTypes = {
    title: PropsType.string,
    subtitle: PropsType.string
  };

  return (
    <div className={styles.container}>
      {title !== '' && (
        <SpanCustom className={`body1 color-secondary-3 ${styles.title}`}>{title}</SpanCustom>
      )}
      {subtitle !== '' && (
        <SpanCustom className={`body2 color-secondary-4 text-bold ${styles.subtitle}`}>
          {subtitle}
        </SpanCustom>
      )}
    </div>
  );
};

export default SpanTitleSubtitle;
