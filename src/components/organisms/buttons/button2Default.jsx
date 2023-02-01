import ButtonLayout from "../../molecules/buttonLayout";

import styles from './button2Default.module.scss'

const Button2Default = (props) => {
  return (
    <div>
      <ButtonLayout
          classNameButton={`${styles.hoverHandler} bgc-primary`}
          includeSign={false}
          classNameSpan="body1 text-bold color-white"
          spanText={props.spanText}
        />
    </div>
  );
}
 
export default Button2Default;