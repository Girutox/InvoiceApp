import InvoicesGridSection from '../components/templates/InvoicesGridSection';

import styles from './InvoiceMain.module.scss';

const InvoiceMain = (props) => {
  return (
    <>
      {/* <main className={styles.mainContainer}> */}
      <InvoicesGridSection className={styles.mainContainer} />
      {/* </main> */}
    </>
  );
};

export default InvoiceMain;
