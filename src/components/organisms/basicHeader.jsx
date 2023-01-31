import Logo from "../atoms/logo";
import Heading1 from "../atoms/heading1";

import styles from "./basicHeader.module.scss";

const BasicHeader = () => {
  return (
    <header className={styles.container}>
      <Logo className="svg-primary" />
      <Heading1 className="text text-primary" value="Design System" />
    </header>
  );
};

export default BasicHeader;
