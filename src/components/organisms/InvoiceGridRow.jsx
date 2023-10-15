import PropTypes from 'prop-types';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import SpanCustom from '../atoms/spanCustom';
import Badge from '../molecules/Badge';
import { formatDateToString, getCurrencyNumber } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

import styles from './InvoiceGridRow.module.scss';

const InvoiceGridRow = ({ data }) => {
  const navigate = useNavigate();

  const { width } = useWindowDimensions();

  const { id, code, paymentDueDate, billTo, value, status } = data;

  return (
    <div key={id} onClick={() => navigate(`viewInvoice/${id}`)} className={`${styles.container} bgc-white`}>
      {
        width <= 375 && <>
          <div className={styles.column1}>
            <SpanCustom key={`sp1${id}`} className="body2 color-secondary-4 text-bold">
              {code}
            </SpanCustom>
            <SpanCustom key={`sp2${id}`} className="body2 color-secondary-2">
              {formatDateToString('Due', paymentDueDate)}
            </SpanCustom>
            <SpanCustom key={`sp4${id}`} className="body2 color-secondary-4 text-bold">
              {getCurrencyNumber('$', value)}
            </SpanCustom>
          </div>
          <div className={styles.column2}>
            <SpanCustom key={`sp3${id}`} className="body2 color-secondary-2">
              {billTo}
            </SpanCustom>
            <Badge
              key={`b1${id}`}
              classNameBackground="bgc-unknown-2__opacity"
              classNameOval="bgc-unknown-2"
              classNameText="body2 color-unknown-2 text-bold"
              status={status}
            />
          </div>
        </>
      }
      {
        width > 375 && <>
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
          <Badge
            key={`b1${id}`}
            classNameBackground="bgc-unknown-2__opacity"
            classNameOval="bgc-unknown-2"
            classNameText="body2 color-unknown-2 text-bold"
            status={status}
          />
          <SpanCustom key={`sp5${id}`} className="body2 color-primary text-bold">
            &#32;
          </SpanCustom>
        </>
      }
    </div>
  );
};
InvoiceGridRow.propTypes = {
  data: PropTypes.object
};

export default InvoiceGridRow;
