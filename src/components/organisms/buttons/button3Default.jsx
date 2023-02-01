import ButtonLayout from "../../molecules/buttonLayout";

import styles from './button3Default.module.scss'

const Button3Default = (props) => {
  return (
    <div>
      <ButtonLayout
          classNameButton={`${styles.hoverHandler} bgc-background-light`}
          includeSign={false}
          classNameSpan="body1 text-bold color-secondary-3"
          spanText={props.spanText}
        />
    </div>
  );
}
 
export default Button3Default;