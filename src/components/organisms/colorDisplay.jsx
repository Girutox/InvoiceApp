import ColorDisplayBox from "../molecules/colorDisplay/colorDisplayBox";
import ColorDisplayExtraInfo from "../molecules/colorDisplay/colorDisplayExtraInfo";

import styles from "./colorDisplay.module.scss";

const ColorDisplay = (props) => {
  return (
    <div className={styles.container}>
      <ColorDisplayBox
        classNameLabel1={props.classNameLabel1}
        backgroundColor={props.backgroundColor}
        hexColorText={props.hexColorText}
      ></ColorDisplayBox>
      <ColorDisplayExtraInfo
        classNameLabel2={props.classNameLabel2}
        classNameLabel3={props.classNameLabel3}
        colorType={props.colorType}
        colorValue={props.colorValue}
      ></ColorDisplayExtraInfo>
    </div>
  );
};

export default ColorDisplay;
