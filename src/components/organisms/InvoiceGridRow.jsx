import SpanCustom from '../atoms/spanCustom';
import Badge from '../molecules/Badge';
import { formatDateToString, getCurrencyNumber } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

import styles from './InvoiceGridRow.module.scss';

const InvoiceGridRow = (props) => {
  const navigate = useNavigate();

  const { id, code, paymentDueDate, billTo, value, statusId } = props.data;

  return (
    <div key={id} onClick={() => navigate(`viewInvoice/${id}`)} className={`${styles.container} bgc-white`}>
      <SpanCustom key={`sp1${id}`} className="body2 color-secondary-4 text-bold">
        {code}
      </SpanCustom>
      <SpanCustom key={`sp2${id}`} className="body2 color-secondary-2">
        {formatDateToString('Due', paymentDueDate)}
      </SpanCustom>
      <SpanCustom key={`sp3${id}`} className="body2 color-secondary-2">
        {billTo}
      </SpanCustom>
      <SpanCustom key={`sp4${id}`} className="body2 color-secondary-4 text-bold">
        {getCurrencyNumber('$', value)}
      </SpanCustom>
      {statusId === 1 && (
        <Badge
          key={`b1${id}`}
          classNameBackground="bgc-unknown-2__opacity"
          classNameOval="bgc-unknown-2"
          classNameText="body2 color-unknown-2 text-bold"
          text="Draft"
        />
      )}
      {statusId === 2 && (
        <Badge
          key={`b1${id}`}
          classNameBackground="bgc-unknown-4__opacity"
          classNameOval="bgc-unknown-4"
          classNameText="body2 color-unknown-4 text-bold"
          text="Pending"
        />
      )}
      {statusId === 3 && (
        <Badge
          key={`b1${id}`}
          classNameBackground="bgc-unknown-3__opacity"
          classNameOval="bgc-unknown-3"
          classNameText="body2 color-unknown-3 text-bold"
          text="Paid"
        />
      )}
      <SpanCustom key={`sp5${id}`} className="body2 color-primary text-bold">
        &#32;
      </SpanCustom>
    </div>
  );
};

export default InvoiceGridRow;
