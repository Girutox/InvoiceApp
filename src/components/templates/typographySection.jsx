import Heading2 from '../atoms/headings/heading2';
import TypographyLeftContainer from '../organisms/typography/typographyLeftContainer';
import TypographyRightContainer from '../organisms/typography/typographyRightContainer';

import styles from './typographySection.module.scss';

const TypographySection = (props) => {
  return (
    <section className={styles.container}>
      <Heading2 className={`${styles.title} color-secondary-3`}>Typography</Heading2>
      <div className={styles.subContainer}>
        <TypographyLeftContainer />
        <TypographyRightContainer />
      </div>
    </section>
  );
};

export default TypographySection;
