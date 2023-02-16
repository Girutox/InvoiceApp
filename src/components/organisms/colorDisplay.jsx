import ColorDisplayBox from '../molecules/colorDisplay/colorDisplayBox';
import ColorDisplayExtraInfo from '../molecules/colorDisplay/colorDisplayExtraInfo';

import styles from './colorDisplay.module.scss';

const ColorDisplay = (props) => {
  return (
    <div className={styles.container}>
      <ColorDisplayBox
        classNameLabel1={props.classNameLabel1}
        backgroundColor={props.backgroundColor}
        hexColorText={props.hexColorText}
      />
      <ColorDisplayExtraInfo subData={props.subData} />
    </div>
  );
};

export default ColorDisplay;
