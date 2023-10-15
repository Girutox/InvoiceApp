import LabelCustom from '../atoms/labelCustom';

import styles from './formControl.module.scss';

const FormControl = (props) => {
  return (
    <div className={styles.container}>
      <LabelCustom controlId={props.controlId}>{props.labelText}</LabelCustom>
      {props.children}
    </div>
  );
};

export default FormControl;
