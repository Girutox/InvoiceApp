import styles from './Modal.module.scss';

const Modal = (props) => {
  return (
    <div className={styles.backdrop} onClick={() => props.onClick()}>
      <div className={styles.modalContent}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
