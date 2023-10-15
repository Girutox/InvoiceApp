import useWindowDimensions from '../../hooks/useWindowDimensions';
import Button5Default from './buttons/button5Default';
import Button2Default from './buttons/button2Default';
import Button3Default from './buttons/button3Default';
import { any } from 'prop-types';
import SpanCustom from '../atoms/spanCustom';
import SpanTitleSubtitle from '../molecules/SpanTitleSubtitle';
import { getCurrencyNumber, formatDateToString } from '../../utils/utils';
import Modal from 'react-modal';
import ManageInvoice from '../templates/ManageInvoice';
import { useState } from 'react';

import styles from './InvoiceInfoGroup.module.scss';

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: 'auto',
    bottom: 'auto',
    width: '700px',
    overflow: 'auto'
  }
};

Modal.setAppElement('#root');

const InvoiceInfoGroup = ({ data }) => {
  InvoiceInfoGroup.propTypes = {
    data: any
  };

  const { width } = useWindowDimensions();

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

  const [modalIsOpen, setIsOpen] = useState(false);

  const editClickHandler = () => {
    setIsOpen(true);
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }

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
        {
          width >= 768 &&
          <>
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
          </>
        }
        {
          width < 768 &&
          <>
            <div className={styles.mainGroup}>
              <div className={styles.group01}>
                <div className={styles.column}>
                  <SpanTitleSubtitle title="Invoice Date" subtitle={formatDateToString('', invoiceDate)} />
                  <SpanTitleSubtitle title="Payment Due" subtitle={formatDateToString('', paymentDueDate)} />
                </div>
              </div>
              <div className={styles.group02}>
                <div className={styles.column}>
                  <SpanTitleSubtitle title="Bill To" subtitle={billTo} />
                  <SpanCustom className="body1 color-secondary-3">{billToStreetAddress}</SpanCustom>
                  <SpanCustom className="body1 color-secondary-3">{billToCity}</SpanCustom>
                  <SpanCustom className="body1 color-secondary-3">{billToPostCode}</SpanCustom>
                  <SpanCustom className="body1 color-secondary-3">{billToCountry}</SpanCustom>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <SpanTitleSubtitle title="Sent To" subtitle={sentTo} />
            </div>
          </>
        }
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {
            width > 375 &&
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
          }
          {
            width <= 375 &&
            <div className={styles.customTable}>
              {detailRows?.map((row) => {
                return (
                  <div key={row.id} className={styles.rowCustomTable}>
                    <div className={styles.column1CustomTable}>
                      <SpanCustom className="body2 color-secondary-4 text-bold">
                        {row.itemName}
                      </SpanCustom>
                      <SpanCustom className="body1 color-secondary-3">
                        {`${row.itemQuantity} x ${getCurrencyNumber('$', row.itemPrice)}`}
                      </SpanCustom>
                    </div>
                    <div className={styles.column1CustomTable}>
                      <SpanCustom className="body2 color-secondary-4 text-bold">
                        {getCurrencyNumber('$', row.itemPrice * row.itemQuantity)}
                      </SpanCustom>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </div>
        <div className={styles.footer}>
          <SpanCustom className="body2 color-white">Amount Due</SpanCustom>
          <SpanCustom className={`body2 color-white text-bold ${styles.amountDue}`}>
            {getCurrencyNumber('$', amountDue)}
          </SpanCustom>
        </div>
        {
          width <= 375 &&
          <div className={styles.fixedOptions}>
            <Button3Default onClick={editClickHandler} spanText="Edit" />
            <Button5Default spanText="Delete" />
            <Button2Default spanText="Mark as Paid" />
          </div>
        }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Invoice Modal">
        <ManageInvoice data={data} onCloseModal={closeModal} />
      </Modal>
    </div>
  );
};

export default InvoiceInfoGroup;
