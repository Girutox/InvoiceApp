import styles from './ViewInvoiceSection.module.scss';
import InvoiceToolbar from '../organisms/InvoiceToolbar';
import InvoiceInfoGroup from '../organisms/InvoiceInfoGroup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SpanCustom from '../atoms/spanCustom';

const ViewInvoiceSection = ({ id }) => {
  const navigate = useNavigate();
  const mainData = useSelector(state => state.invoice.invoices);

  const data = mainData.filter(a => a.id === +id)[0];

  const spanReturnHandler = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <SpanCustom onClick={spanReturnHandler} className="body2 color-primary text-bold">&lt;</SpanCustom>
        <SpanCustom className="body2 color-secondary-4 text-bold">Go back</SpanCustom>
      </div>
      <InvoiceToolbar data={data} className={styles.toolbar} />
      <InvoiceInfoGroup data={data} />
    </div>
  );
};

export default ViewInvoiceSection;
