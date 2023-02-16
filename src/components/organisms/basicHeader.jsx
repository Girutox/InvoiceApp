import Logo from '../atoms/logo';
import Heading1 from '../atoms/headings/heading1';

import styles from './basicHeader.module.scss';

const BasicHeader = () => {
  return (
    <header className={styles.container}>
      <Logo className="fill-primary logoResize" />
      <Heading1 className="color-secondary-4">Design System</Heading1>
    </header>
  );
};

export default BasicHeader;
