import ViewInvoiceSection from '../components/templates/ViewInvoiceSection';
import { useParams } from 'react-router-dom';

const InvoiceViewDetail = () => {
  const { id } = useParams();

  return (
    <>
      <ViewInvoiceSection id={id} />
    </>
  );
};

export default InvoiceViewDetail;
