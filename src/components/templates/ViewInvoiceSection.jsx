import styles from './ViewInvoiceSection.module.scss';
import InvoiceToolbar from '../organisms/InvoiceToolbar';

const ViewInvoiceSection = () => {
  return (
    <div className={styles.container}>
      <InvoiceToolbar statusId={2} id={1} />
    </div>
  );
};

export default ViewInvoiceSection;
