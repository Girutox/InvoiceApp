import useWindowDimensions from '../../hooks/useWindowDimensions';

import { useState } from 'react';

import ReactDOM from 'react-dom';

// import Modal from '../ui/Modal';
import Modal from 'react-modal';

import PropTypes from 'prop-types';

import SpanCustom from '../atoms/spanCustom';
import Badge from '../molecules/Badge';

import styles from './InvoiceToolbar.module.scss';
import Button5Default from './buttons/button5Default';
import Button2Default from './buttons/button2Default';
import Button3Default from './buttons/button3Default';
import ManageInvoice from '../templates/ManageInvoice';

const customStyles = {
  content: {
    top: '0',
    left: '72px',
    right: 'auto',
    bottom: 'auto',
    width: '700px'
    // marginRight: '-50%'
    // transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const InvoiceToolbar = ({ data }) => {
  InvoiceToolbar.propTypes = {
    data: PropTypes.object
  };

  const { width } = useWindowDimensions();

  // const [showModal, setShowModal] = useState(false);
  // const domElement = document.getElementById('modals');
  const [modalIsOpen, setIsOpen] = useState(false);

  const { statusId, id } = data;

  const editClickHandler = () => {
    setIsOpen(true);
  };

  // const closeModalHandler = () => {
  //   setShowModal(false);
  // };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
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
        contentLabel="Example Modal"
      >
        <ManageInvoice data={data} />
      </Modal>
    </div>
  );
};

export default InvoiceToolbar;
