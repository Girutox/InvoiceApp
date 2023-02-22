import ButtonLayout from '../../molecules/buttonLayout';

import styles from './button1Default.module.scss';

const Button1Default = (props) => {
  const applyHover = props.applyHover ? props.applyHover : '';

  return (
    <div>
      <ButtonLayout
        classNameButton={`${styles.hoverHandler} ${applyHover ? styles.applyHover : ''
          } bgc-primary`}
        includeSign={true}
        signValue={'+'}
        classNameCircle="bgc-white"
        classNamePlus="color-primary"
        classNameSpan="body1 text-bold color-white"
        spanText={props.spanText}
      />
    </div>
  );
};

export default Button1Default;
