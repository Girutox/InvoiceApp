import { any } from 'prop-types';
import SpanCustom from '../atoms/spanCustom';
import SpanTitleSubtitle from '../molecules/SpanTitleSubtitle';
import styles from './InvoiceInfoGroup.module.scss';
import { getCurrencyNumber, formatDateToString } from '../../utils/utils';

const InvoiceInfoGroup = ({ data }) => {
  InvoiceInfoGroup.propTypes = {
    data: any
  };

  const {
    code,
    projectDescription,
    billFromStreetAddress,
    billFromCity,
    billFromPostCode,
    billFromCountry,
    billToStreetAddress,
    billToCity,
    billToPostCode,
    billToCountry,
    invoiceDate,
    paymentDueDate,
    billTo,
    sentTo,
    detailRows
  } = data;

  const amountDue = detailRows?.reduce((prev, current) => prev + (current.itemPrice * current.itemQuantity), 0);

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <div className={styles.column}>
          <SpanCustom className={`body2 color-secondary-4 text-bold ${styles.code}`}>
            {code}
          </SpanCustom>
          <SpanCustom className={`body1 color-secondary-3 ${styles.projectDescription}`}>
            {projectDescription}
          </SpanCustom>
        </div>
        <div className={`${styles.column} ${styles.columnTextAlign}`}>
          <SpanCustom className="body1 color-secondary-3">{billFromStreetAddress}</SpanCustom>
          <SpanCustom className="body1 color-secondary-3">{billFromCity}</SpanCustom>
          <SpanCustom className="body1 color-secondary-3">{billFromPostCode}</SpanCustom>
          <SpanCustom className="body1 color-secondary-3">{billFromCountry}</SpanCustom>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.column}>
          <SpanTitleSubtitle title="Invoice Date" subtitle={formatDateToString('', invoiceDate)} />
          <SpanTitleSubtitle title="Payment Due" subtitle={formatDateToString('', paymentDueDate)} />
        </div>
        <div className={styles.column}>
          <SpanTitleSubtitle title="Bill To" subtitle={billTo} />
          <SpanCustom className="body1 color-secondary-3">{billToStreetAddress}</SpanCustom>
          <SpanCustom className="body1 color-secondary-3">{billToCity}</SpanCustom>
          <SpanCustom className="body1 color-secondary-3">{billToPostCode}</SpanCustom>
          <SpanCustom className="body1 color-secondary-3">{billToCountry}</SpanCustom>
        </div>
        <div className={styles.column}>
          <SpanTitleSubtitle title="Sent To" subtitle={sentTo} />
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className="body1">Item Name</th>
                <th className="body1">QTY.</th>
                <th className="body1">Price</th>
                <th className="body1">Total</th>
              </tr>
            </thead>
            <tbody>
              {detailRows?.map((row) => {
                return (
                  <tr key={row.id}>
                    <td key={`td1${row.id}`} className="body2">
                      {row.itemName}
                    </td>
                    <td key={`td2${row.id}`} className="body2">
                      {row.itemQuantity}
                    </td>
                    <td key={`td3${row.id}`} className="body2">
                      {getCurrencyNumber('$', row.itemPrice)}
                    </td>
                    <td key={`td4${row.id}`} className="body2">
                      {getCurrencyNumber('$', row.itemPrice * row.itemQuantity)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.footer}>
          <SpanCustom className="body2 color-white">Amount Due</SpanCustom>
          <SpanCustom className={`body2 color-white text-bold ${styles.amountDue}`}>
            {getCurrencyNumber('$', amountDue)}
          </SpanCustom>
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfoGroup;
