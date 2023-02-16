import InvoicesGridSection from '../components/templates/InvoicesGridSection';

import styles from './InvoiceMain.module.scss';

const InvoiceMain = (props) => {
  return (
    <>
      <main className={styles.mainContainer}>
        <InvoicesGridSection />
      </main>
    </>
  );
};

export default InvoiceMain;
