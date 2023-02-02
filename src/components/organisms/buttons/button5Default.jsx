import ButtonLayout from "../../molecules/buttonLayout";

import styles from './button5Default.module.scss'

const Button5Default = (props) => {
  const applyHover = (props.applyHover) ? props.applyHover : "";
  
  return (
    <div>
      <ButtonLayout
          classNameButton={`${styles.hoverHandler} ${
            applyHover ? styles.applyHover : ""
          } bgc-alert`}
          includeSign={false}
          classNameSpan="body1 text-bold color-white"
          spanText={props.spanText}
        />
    </div>
  );
}
 
export default Button5Default;