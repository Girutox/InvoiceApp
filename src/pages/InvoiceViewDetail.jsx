import styles from './InvoiceViewDetail.module.scss';
import ViewInvoiceSection from '../components/templates/ViewInvoiceSection';

const InvoiceViewDetail = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <ViewInvoiceSection />
      </main>
    </>
  );
};

export default InvoiceViewDetail;
