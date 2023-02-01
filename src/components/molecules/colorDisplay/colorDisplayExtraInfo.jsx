import ColorDisplayLabel from "../../atoms/colorDisplay/colorDisplayLabel";
import styles from "./colorDisplayExtraInfo.module.scss";

const ColorDisplayExtraInfo = (props) => {
  return (
    <>
      {props.subData &&
        props.subData.map((item) => {
          return (
            <div key={item.id} className={styles.container}>
              <ColorDisplayLabel key={`l1_${item.id}`} className={item.classNameLabel2}>
                {item.colorType}
              </ColorDisplayLabel>
              <ColorDisplayLabel key={`l2_${item.id}`} className={item.classNameLabel3}>
                {item.colorValue}
              </ColorDisplayLabel>
            </div>
          );
        })}
    </>
  );
};

export default ColorDisplayExtraInfo;
