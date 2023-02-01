import SpanCustom from "../atoms/spanCustom";
import ButtonContainer from "../atoms/buttonContainer";
import PlusSign from "../atoms/plusSign";

import styles from './buttonLayout.module.scss';

const ButtonLayout = (props) => {
  return (
    <ButtonContainer className={`${styles.customButton} ${props.classNameButton}`}>
      {props.includeSign && <PlusSign
        classNameCircle={`${styles.plusSign} ${props.classNameCircle}`}
        classNamePlus={props.classNamePlus}
      >
        {props.signValue}
      </PlusSign>}
      <SpanCustom className={`${styles.customSpan} ${props.classNameSpan}`}>{props.spanText}</SpanCustom>
    </ButtonContainer>
  );
};

export default ButtonLayout;
