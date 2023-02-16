import TypographyHeadingDescriptor from '../../molecules/typography/typographyHeadingDescriptor';
import Heading1 from '../../atoms/headings/heading1';
import Heading2 from '../../atoms/headings/heading2';
import Heading3 from '../../atoms/headings/heading3';
import Heading4 from '../../atoms/headings/heading4';

import styles from './typographyLeftContainer.module.scss';

const TypographyLeftContainer = (props) => {
  return (
    <div className={styles.container}>
      <Heading3>Spartan</Heading3>
      <TypographyHeadingDescriptor title="H1  |  Spartan Bold  |  32px  |  36px Line  |  -1 Spacing">
        <Heading1>Aliquam porttitor mauris sit amet orci Aenean</Heading1>
      </TypographyHeadingDescriptor>
      <TypographyHeadingDescriptor title="H2  |  Spartan Bold  |  20px  |  22px Line  |  -0.63 Spacing">
        <Heading2>Aliquam porttitor mauris sit amet orci Aenean</Heading2>
      </TypographyHeadingDescriptor>
      <TypographyHeadingDescriptor title="H3  |  Spartan Bold  |  16px  |  24px Line  |  -0.8 Spacing">
        <Heading3>Aliquam porttitor mauris sit amet orci Aenean</Heading3>
      </TypographyHeadingDescriptor>
      <TypographyHeadingDescriptor title="H4  |  Spartan Bold  |  12px  |  15px Line  |  -0.25 Spacing">
        <Heading4>Aliquam porttitor mauris sit amet orci Aenean</Heading4>
      </TypographyHeadingDescriptor>
    </div>
  );
};

export default TypographyLeftContainer;
