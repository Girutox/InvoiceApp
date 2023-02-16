import styles from './buttonContainer.module.scss';

const ButtonContainer = (props) => {
  return (
    <button type={props.type} className={`${styles.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default ButtonContainer;
