import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import SpanCustom from '../atoms/spanCustom';
import Badge from '../molecules/Badge';
import Button5Default from './buttons/button5Default';
import Button2Default from './buttons/button2Default';
import Button3Default from './buttons/button3Default';
import ManageInvoice from '../templates/ManageInvoice';

import styles from './InvoiceToolbar.module.scss';

const customStyles = {
  content: {
    top: '0',
    left: '72px',
    right: 'auto',
    bottom: 'auto',
    width: '700px',
    overflow: 'auto'
  }
};

Modal.setAppElement('#root');

const InvoiceToolbar = ({ data }) => {
  InvoiceToolbar.propTypes = {
    data: PropTypes.object
  };

  const { width } = useWindowDimensions();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { statusId, id } = data;

  const editClickHandler = () => {
    setIsOpen(true);
  };
  function afterOpenModal() {
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoGroup}>
        <SpanCustom className="body1 color-secondary-2 text-bold">Status</SpanCustom>
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
      </div>
      {width > 375 && <div className={styles.buttonGroup}>
        <Button3Default onClick={editClickHandler} spanText="Edit" />
        <Button5Default spanText="Delete" />
        <Button2Default spanText="Mark as Paid" />
      </div>}
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

export default InvoiceToolbar;
