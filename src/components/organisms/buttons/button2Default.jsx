import ButtonLayout from '../../molecules/buttonLayout';

import styles from './button2Default.module.scss';

const Button2Default = (props) => {
  const applyHover = props.applyHover ? props.applyHover : '';

  return (
    <div>
      <ButtonLayout
        classNameButton={`${styles.hoverHandler} ${applyHover ? styles.applyHover : ''
          } bgc-primary`}
        includeSign={false}
        classNameSpan="body1 text-bold color-white"
        spanText={props.spanText}
        onClick={props.onClick}
      />
    </div>
  );
};

export default Button2Default;
