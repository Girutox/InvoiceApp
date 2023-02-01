import ColorDisplayBoxBackground from "../../atoms/colorDisplay/colorDisplayBackground";
import ColorDisplayLabel from "../../atoms/colorDisplay/colorDisplayLabel";

import styles from "./colorDisplayBox.module.scss";

const ColorDisplayBox = (props) => {
  return (
    <div className={styles.container}>
      <ColorDisplayBoxBackground backgroundColor={props.backgroundColor} />
      <ColorDisplayLabel
        className={`${styles.hexColorText} ${props.classNameLabel1}`}
      >
        {props.hexColorText}
      </ColorDisplayLabel>
    </div>
  );
};

export default ColorDisplayBox;
