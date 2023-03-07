import styles from './InvoiceViewDetail.module.scss';
import ViewInvoiceSection from '../components/templates/ViewInvoiceSection';
import { useParams } from 'react-router-dom';

const InvoiceViewDetail = () => {
  const { id } = useParams();

  return (
    <>
      {/* <main className={styles.mainContainer}> */}
      <ViewInvoiceSection id={id} />
      {/* </main> */}
    </>
  );
};

export default InvoiceViewDetail;
