import styles from './inputControl.module.scss';

const InputControl = (props) => {
  return (
    <input
      className={`${styles.input} body2 ${props.includeActive ? styles.includeActive : ''}`}
      type="text"
      id={props.controlId}
      value={props.value}
    />
  );
};

export default InputControl;
