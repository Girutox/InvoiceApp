import ColorDisplayLabel from '../../atoms/colorDisplay/colorDisplayLabel';
import styles from './colorDisplayExtraInfo.module.scss';

const ColorDisplayExtraInfo = (props) => {
  return (
    <div className={styles.container}>
      <ColorDisplayLabel className={props.classNameLabel2}>{props.colorType}</ColorDisplayLabel>
      <ColorDisplayLabel className={props.classNameLabel3}>{props.colorValue}</ColorDisplayLabel>
    </div>
  );
}
 
export default ColorDisplayExtraInfo;