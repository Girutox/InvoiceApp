import TypographyBodyDescriptor from '../../molecules/typography/typographyBodyDescriptor';
import Heading3 from '../../atoms/headings/heading3';

import styles from './typographyRightContainer.module.scss';

const TypographyRightContainer = (props) => {
  return (
    <div className={styles.container}>
      <Heading3>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'}
      </Heading3>
      <TypographyBodyDescriptor
        title="Body 1  |  Spartan Medium  |  12px  |  15px Line  |  -0,25 Spacing"
        classNameBody="body1"
      ></TypographyBodyDescriptor>
      <TypographyBodyDescriptor
        title="Body 2  |  Spartan Medium  |  11px  |  18px Line  |  -0,23 Spacing"
        classNameBody="body2"
      ></TypographyBodyDescriptor>
    </div>
  );
};

export default TypographyRightContainer;
