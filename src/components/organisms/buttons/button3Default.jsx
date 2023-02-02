import ButtonLayout from "../../molecules/buttonLayout";

import styles from './button3Default.module.scss'

const Button3Default = (props) => {
  const applyHover = (props.applyHover) ? props.applyHover : "";
  
  return (
    <div>
      <ButtonLayout
          classNameButton={`${styles.hoverHandler} ${
            applyHover ? styles.applyHover : ""
          } bgc-unknown-1`}
          includeSign={false}
          classNameSpan="body1 text-bold color-secondary-3"
          spanText={props.spanText}
        />
    </div>
  );
}
 
export default Button3Default;