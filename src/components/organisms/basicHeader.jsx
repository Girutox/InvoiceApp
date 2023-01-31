import Logo from "../atoms/logo";
import Heading1 from "../atoms/headings/heading1";

import styles from "./basicHeader.module.scss";

const BasicHeader = () => {
  return (
    <header className={styles.container}>
      <Logo className="svg-primary" />
      <Heading1 className="text text-primary">Design System</Heading1>
    </header>
  );
};

export default BasicHeader;
