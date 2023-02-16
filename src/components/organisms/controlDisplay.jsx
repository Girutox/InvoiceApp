import SpanCustom from '../atoms/spanCustom';
import FormControl from '../molecules/formControl';
import styles from './controlDisplay.module.scss';

const ControlDisplay = (props) => {
  return (
    <div className={styles.container}>
      <SpanCustom className="body2 color-secondary-3">{props.spanText}</SpanCustom>
      <FormControl labelText={props.controlLabelText} controlId={props.controlId}>
        {props.children}
      </FormControl>
    </div>
  );
};

export default ControlDisplay;
