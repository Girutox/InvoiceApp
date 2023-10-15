import styles from './inputControl.module.scss';

const InputControl = (props) => {
  return (
    <input
      className={`${styles.input} body2 ${props.includeActive ? styles.includeActive : ''}`}
      type="text"
      id={props.controlId}
      name={props.controlId}
      defaultValue={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputControl;
