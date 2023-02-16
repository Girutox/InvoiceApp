import ButtonLayout from '../../molecules/buttonLayout';

import styles from './button4Default.module.scss';

const Button4Default = (props) => {
  const applyHover = props.applyHover ? props.applyHover : '';

  return (
    <div>
      <ButtonLayout
        classNameButton={`${styles.hoverHandler} ${
          applyHover ? styles.applyHover : ''
        } bgc-unknown-2`}
        includeSign={false}
        classNameSpan="body1 text-bold color-secondary-2"
        spanText={props.spanText}
      />
    </div>
  );
};

export default Button4Default;
